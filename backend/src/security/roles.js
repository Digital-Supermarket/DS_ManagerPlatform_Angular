/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      owner: 'owner',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      clientEditor: 'clientEditor',
      clientViewer: 'clientViewer',
      productEditor: 'productEditor',
      productViewer: 'productViewer',
      itemEditor: 'itemEditor',
      itemViewer: 'itemViewer',
      shoppingListEditor: 'shoppingListEditor',
      shoppingListViewer: 'shoppingListViewer',
      aisleEditor: 'aisleEditor',
      aisleViewer: 'aisleViewer',
      clerkEditor: 'clerkEditor',
      clerkViewer: 'clerkViewer',
      managerEditor: 'managerEditor',
      managerViewer: 'managerViewer',
      departmentEditor: 'departmentEditor',
      departmentViewer: 'departmentViewer',
    };
  }
}

module.exports = Roles;
