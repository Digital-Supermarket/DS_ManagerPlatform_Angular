import { i18n } from 'src/i18n';
import { values as _values } from 'lodash';

export class Roles {
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

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }

  static get selectOptions() {
    return _values(this.values).map((value) => ({
      id: value,
      value: value,
      title: this.descriptionOf(value),
      label: this.labelOf(value),
    }));
  }
}
