import authAxios from 'src/app/shared/axios/auth-axios';

export default class AuditLogApi {
  static async fetch(filter, orderBy, limit, offset) {
    const query = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get('/auditLog', {
      params: query,
    });

    return response.data;
  }
}
