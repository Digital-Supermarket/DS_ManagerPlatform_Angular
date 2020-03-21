const MongooseRepository = require('./mongooseRepository');
const MongooseQueryUtils = require('../utils/mongooseQueryUtils');
const AuditLogRepository = require('./auditLogRepository');
const Manager = require('../models/manager');
const Department = require('../models/department');

/**
 * Handles database operations for the Manager.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class ManagerRepository {
  /**
   * Creates the Manager.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    if (MongooseRepository.getSession(options)) {
      await Manager.createCollection();
    }

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await Manager.create(
      [
        {
          ...data,
          createdBy: currentUser.id,
          updatedBy: currentUser.id,
        },
      ],
      MongooseRepository.getSessionOptionsIfExists(options),
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );



    return this.findById(record.id, options);
  }

  /**
   * Updates the Manager.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Manager.updateOne(
        { _id: id },
        {
          ...data,
          updatedBy: MongooseRepository.getCurrentUser(
            options,
          ).id,
        },
      ),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );

    const record = await this.findById(id, options);



    return record;
  }

  /**
   * Deletes the Manager.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Manager.deleteOne({ _id: id }),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      null,
      options,
    );

    await MongooseRepository.destroyRelationToOne(
      id,
      Department,
      'managedBy',
      options,
    );
  }

  /**
   * Counts the number of Managers based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Manager.countDocuments(filter),
      options,
    );
  }

  /**
   * Finds the Manager and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Manager.findById(id)
      .populate('headOf')
      .populate('departments'),
      options,
    );
  }

  /**
   * Finds the Managers based on the query.
   * See https://mongoosejs.com/docs/queries.html to learn how
   * to customize the queries.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  async findAndCountAll(
    { filter, limit, offset, orderBy } = {
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
    options,
  ) {
    let criteria = {};

    if (filter) {
      if (filter.id) {
        criteria = {
          ...criteria,
          ['_id']: MongooseQueryUtils.uuid(filter.id),
        };
      }



      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          criteria = {
            ...criteria,
            ['createdAt']: {
              ...criteria.createdAt,
              $gte: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          criteria = {
            ...criteria,
            ['createdAt']: {
              ...criteria.createdAt,
              $lte: end,
            },
          };
        }
      }
    }

    const sort = MongooseQueryUtils.sort(
      orderBy || 'createdAt_DESC',
    );

    const skip = Number(offset || 0) || undefined;
    const limitEscaped = Number(limit || 0) || undefined;

    const rows = await Manager.find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort)
      .populate('headOf')
      .populate('departments');

    const count = await Manager.countDocuments(criteria);

    return { rows, count };
  }

  /**
   * Lists the Managers to populate the autocomplete.
   * See https://mongoosejs.com/docs/queries.html to learn how to
   * customize the query.
   *
   * @param {Object} search
   * @param {number} limit
   */
  async findAllAutocomplete(search, limit) {
    let criteria = {};

    if (search) {
      criteria = {
        $or: [
          { _id: MongooseQueryUtils.uuid(search) },

        ],
      };
    }

    const sort = MongooseQueryUtils.sort('id_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const records = await Manager.find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record['id'],
    }));
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} id - The record id
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  async _createAuditLog(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: Manager.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = ManagerRepository;
