const Roles = require('./roles');
const roles = Roles.values;

/**
 * List of Permissions and the Roles allowed of using them.
 */
class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,


        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      clientImport: {
        id: 'clientImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.clientEditor,
        ],
      },
      clientCreate: {
        id: 'clientCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.clientEditor,
        ],
        allowedStorageFolders: ['client'],
      },
      clientEdit: {
        id: 'clientEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.clientEditor,
        ],
        allowedStorageFolders: ['client'],
      },
      clientDestroy: {
        id: 'clientDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.clientEditor,
        ],
        allowedStorageFolders: ['client'],
      },
      clientRead: {
        id: 'clientRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.clientEditor,
          roles.clientViewer,
        ],
      },
      clientAutocomplete: {
        id: 'clientAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.clientEditor,
          roles.clientViewer,

        ],
      },

      productImport: {
        id: 'productImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
      },
      productCreate: {
        id: 'productCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
        allowedStorageFolders: ['product'],
      },
      productEdit: {
        id: 'productEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
        allowedStorageFolders: ['product'],
      },
      productDestroy: {
        id: 'productDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
        allowedStorageFolders: ['product'],
      },
      productRead: {
        id: 'productRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productEditor,
          roles.productViewer,
        ],
      },
      productAutocomplete: {
        id: 'productAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productEditor,
          roles.productViewer,
          roles.itemEditor,
          roles.itemViewer,
        ],
      },

      itemImport: {
        id: 'itemImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.itemEditor,
        ],
      },
      itemCreate: {
        id: 'itemCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.itemEditor,
        ],
        allowedStorageFolders: ['item'],
      },
      itemEdit: {
        id: 'itemEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.itemEditor,
        ],
        allowedStorageFolders: ['item'],
      },
      itemDestroy: {
        id: 'itemDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.itemEditor,
        ],
        allowedStorageFolders: ['item'],
      },
      itemRead: {
        id: 'itemRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.itemEditor,
          roles.itemViewer,
        ],
      },
      itemAutocomplete: {
        id: 'itemAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.itemEditor,
          roles.itemViewer,
          roles.shoppingListEditor,
          roles.shoppingListViewer,
          roles.aisleEditor,
          roles.aisleViewer,
        ],
      },

      shoppingListImport: {
        id: 'shoppingListImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.shoppingListEditor,
        ],
      },
      shoppingListCreate: {
        id: 'shoppingListCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.shoppingListEditor,
        ],
        allowedStorageFolders: ['shoppingList'],
      },
      shoppingListEdit: {
        id: 'shoppingListEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.shoppingListEditor,
        ],
        allowedStorageFolders: ['shoppingList'],
      },
      shoppingListDestroy: {
        id: 'shoppingListDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.shoppingListEditor,
        ],
        allowedStorageFolders: ['shoppingList'],
      },
      shoppingListRead: {
        id: 'shoppingListRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.shoppingListEditor,
          roles.shoppingListViewer,
        ],
      },
      shoppingListAutocomplete: {
        id: 'shoppingListAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.shoppingListEditor,
          roles.shoppingListViewer,
          roles.clientEditor,
          roles.clientViewer,
        ],
      },

      aisleImport: {
        id: 'aisleImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.aisleEditor,
        ],
      },
      aisleCreate: {
        id: 'aisleCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.aisleEditor,
        ],
        allowedStorageFolders: ['aisle'],
      },
      aisleEdit: {
        id: 'aisleEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.aisleEditor,
        ],
        allowedStorageFolders: ['aisle'],
      },
      aisleDestroy: {
        id: 'aisleDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.aisleEditor,
        ],
        allowedStorageFolders: ['aisle'],
      },
      aisleRead: {
        id: 'aisleRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.aisleEditor,
          roles.aisleViewer,
        ],
      },
      aisleAutocomplete: {
        id: 'aisleAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.aisleEditor,
          roles.aisleViewer,
          roles.departmentEditor,
          roles.departmentViewer,
        ],
      },

      clerkImport: {
        id: 'clerkImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.clerkEditor,
        ],
      },
      clerkCreate: {
        id: 'clerkCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.clerkEditor,
        ],
        allowedStorageFolders: ['clerk'],
      },
      clerkEdit: {
        id: 'clerkEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.clerkEditor,
        ],
        allowedStorageFolders: ['clerk'],
      },
      clerkDestroy: {
        id: 'clerkDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.clerkEditor,
        ],
        allowedStorageFolders: ['clerk'],
      },
      clerkRead: {
        id: 'clerkRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.clerkEditor,
          roles.clerkViewer,
        ],
      },
      clerkAutocomplete: {
        id: 'clerkAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.clerkEditor,
          roles.clerkViewer,
          roles.aisleEditor,
          roles.aisleViewer,
          roles.managerEditor,
          roles.managerViewer,
        ],
      },

      managerImport: {
        id: 'managerImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.managerEditor,
        ],
      },
      managerCreate: {
        id: 'managerCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.managerEditor,
        ],
        allowedStorageFolders: ['manager'],
      },
      managerEdit: {
        id: 'managerEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.managerEditor,
        ],
        allowedStorageFolders: ['manager'],
      },
      managerDestroy: {
        id: 'managerDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.managerEditor,
        ],
        allowedStorageFolders: ['manager'],
      },
      managerRead: {
        id: 'managerRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.managerEditor,
          roles.managerViewer,
        ],
      },
      managerAutocomplete: {
        id: 'managerAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.managerEditor,
          roles.managerViewer,
          roles.departmentEditor,
          roles.departmentViewer,
        ],
      },

      departmentImport: {
        id: 'departmentImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.departmentEditor,
        ],
      },
      departmentCreate: {
        id: 'departmentCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.departmentEditor,
        ],
        allowedStorageFolders: ['department'],
      },
      departmentEdit: {
        id: 'departmentEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.departmentEditor,
        ],
        allowedStorageFolders: ['department'],
      },
      departmentDestroy: {
        id: 'departmentDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.departmentEditor,
        ],
        allowedStorageFolders: ['department'],
      },
      departmentRead: {
        id: 'departmentRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.departmentEditor,
          roles.departmentViewer,
        ],
      },
      departmentAutocomplete: {
        id: 'departmentAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.departmentEditor,
          roles.departmentViewer,
          roles.clerkEditor,
          roles.clerkViewer,
          roles.managerEditor,
          roles.managerViewer,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;
