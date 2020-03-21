const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End'
  },

  app: {
    title: 'Application',
  },

  entities: {
    client: {
      name: 'client',
      label: 'Clients',
      menu: 'Clients',
      exporterFileName: 'client_export',
      list: {
        menu: 'Clients',
        title: 'Clients',
      },
      create: {
        success: 'Client saved successfully',
      },
      update: {
        success: 'Client saved successfully',
      },
      destroy: {
        success: 'Client deleted successfully',
      },
      destroyAll: {
        success: 'Client(s) deleted successfully',
      },
      edit: {
        title: 'Edit Client',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'phoneNumber': 'Phone Number',
        'email': 'Email',
        'password': 'Password',
        'shoppingLists': 'ShoppingLists',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Client',
      },
      view: {
        title: 'View Client',
      },
      importer: {
        title: 'Import Clients',
        fileName: 'client_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    product: {
      name: 'product',
      label: 'Products',
      menu: 'Products',
      exporterFileName: 'product_export',
      list: {
        menu: 'Products',
        title: 'Products',
      },
      create: {
        success: 'Product saved successfully',
      },
      update: {
        success: 'Product saved successfully',
      },
      destroy: {
        success: 'Product deleted successfully',
      },
      destroyAll: {
        success: 'Product(s) deleted successfully',
      },
      edit: {
        title: 'Edit Product',
      },
      fields: {
        id: 'Id',
        'code': 'Code',
        'name': 'Name',
        'priceRange': 'Price',
        'price': 'Price',
        'weightRange': 'Weight',
        'weight': 'Weight',
        'size': 'Size',
        'photos': 'Photos',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Product',
      },
      view: {
        title: 'View Product',
      },
      importer: {
        title: 'Import Products',
        fileName: 'product_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    item: {
      name: 'item',
      label: 'Items',
      menu: 'Items',
      exporterFileName: 'item_export',
      list: {
        menu: 'Items',
        title: 'Items',
      },
      create: {
        success: 'Item saved successfully',
      },
      update: {
        success: 'Item saved successfully',
      },
      destroy: {
        success: 'Item deleted successfully',
      },
      destroyAll: {
        success: 'Item(s) deleted successfully',
      },
      edit: {
        title: 'Edit Item',
      },
      fields: {
        id: 'Id',
        'product': 'Product',
        'expiryDateRange': 'Expiry Date',
        'expiryDate': 'Expiry Date',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Item',
      },
      view: {
        title: 'View Item',
      },
      importer: {
        title: 'Import Items',
        fileName: 'item_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    shoppingList: {
      name: 'shoppingList',
      label: 'ShoppingLists',
      menu: 'ShoppingLists',
      exporterFileName: 'shoppingList_export',
      list: {
        menu: 'ShoppingLists',
        title: 'ShoppingLists',
      },
      create: {
        success: 'Shopping List saved successfully',
      },
      update: {
        success: 'Shopping List saved successfully',
      },
      destroy: {
        success: 'Shopping List deleted successfully',
      },
      destroyAll: {
        success: 'Shopping List(s) deleted successfully',
      },
      edit: {
        title: 'Edit Shopping List',
      },
      fields: {
        id: 'Id',
        'item': 'Item',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Shopping List',
      },
      view: {
        title: 'View Shopping List',
      },
      importer: {
        title: 'Import ShoppingLists',
        fileName: 'shoppingList_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    aisle: {
      name: 'aisle',
      label: 'Aisles',
      menu: 'Aisles',
      exporterFileName: 'aisle_export',
      list: {
        menu: 'Aisles',
        title: 'Aisles',
      },
      create: {
        success: 'Aisle saved successfully',
      },
      update: {
        success: 'Aisle saved successfully',
      },
      destroy: {
        success: 'Aisle deleted successfully',
      },
      destroyAll: {
        success: 'Aisle(s) deleted successfully',
      },
      edit: {
        title: 'Edit Aisle',
      },
      fields: {
        id: 'Id',
        'item': 'Item',
        'clerk': 'Clerk',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Aisle',
      },
      view: {
        title: 'View Aisle',
      },
      importer: {
        title: 'Import Aisles',
        fileName: 'aisle_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    clerk: {
      name: 'clerk',
      label: 'Clerks',
      menu: 'Clerks',
      exporterFileName: 'clerk_export',
      list: {
        menu: 'Clerks',
        title: 'Clerks',
      },
      create: {
        success: 'Clerk saved successfully',
      },
      update: {
        success: 'Clerk saved successfully',
      },
      destroy: {
        success: 'Clerk deleted successfully',
      },
      destroyAll: {
        success: 'Clerk(s) deleted successfully',
      },
      edit: {
        title: 'Edit Clerk',
      },
      fields: {
        id: 'Id',
        'shiftIsDay': 'Day Shift',
        'departments': 'Departments',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Clerk',
      },
      view: {
        title: 'View Clerk',
      },
      importer: {
        title: 'Import Clerks',
        fileName: 'clerk_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    manager: {
      name: 'manager',
      label: 'Managers',
      menu: 'Managers',
      exporterFileName: 'manager_export',
      list: {
        menu: 'Managers',
        title: 'Managers',
      },
      create: {
        success: 'Manager saved successfully',
      },
      update: {
        success: 'Manager saved successfully',
      },
      destroy: {
        success: 'Manager deleted successfully',
      },
      destroyAll: {
        success: 'Manager(s) deleted successfully',
      },
      edit: {
        title: 'Edit Manager',
      },
      fields: {
        id: 'Id',
        'headOf': 'employees',
        'departments': 'Departments',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Manager',
      },
      view: {
        title: 'View Manager',
      },
      importer: {
        title: 'Import Managers',
        fileName: 'manager_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    department: {
      name: 'department',
      label: 'Departments',
      menu: 'Departments',
      exporterFileName: 'department_export',
      list: {
        menu: 'Departments',
        title: 'Departments',
      },
      create: {
        success: 'Department saved successfully',
      },
      update: {
        success: 'Department saved successfully',
      },
      destroy: {
        success: 'Department deleted successfully',
      },
      destroyAll: {
        success: 'Department(s) deleted successfully',
      },
      edit: {
        title: 'Edit Department',
      },
      fields: {
        id: 'Id',
        'aisles': 'Aisles',
        'managedBy': 'Managed By',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Department',
      },
      view: {
        title: 'View Department',
      },
      importer: {
        title: 'Import Departments',
        fileName: 'department_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetEmailSuccess: `Password reset email sent successfully`,
    passwordResetSuccess: `Password changed successfully`,
    verifyEmail: {
      success: 'Email successfully verified',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    owner: {
      label: 'Owner',
      description: 'Full access to all resources',
    },
    editor: {
      label: 'Editor',
      description: 'Edit access to all resources',
    },
    viewer: {
      label: 'Viewer',
      description: 'View access to all resources',
    },
    auditLogViewer: {
      label: 'Audit Log Viewer',
      description: 'Access to view audit logs',
    },
    iamSecurityReviewer: {
      label: 'Security Reviewer',
      description: `Full access to manage users roles`,
    },
    entityEditor: {
      label: 'Entity Editor',
      description: 'Edit access to all entities',
    },
    entityViewer: {
      label: 'Entity Viewer',
      description: 'View access to all entities',
    },
    clientEditor: {
      label: 'Client Editor',
      description: 'Edit access to Clients',
    },
    clientViewer: {
      label: 'Client Viewer',
      description: 'View access to Clients',
    },
    productEditor: {
      label: 'Product Editor',
      description: 'Edit access to Products',
    },
    productViewer: {
      label: 'Product Viewer',
      description: 'View access to Products',
    },
    itemEditor: {
      label: 'Item Editor',
      description: 'Edit access to Items',
    },
    itemViewer: {
      label: 'Item Viewer',
      description: 'View access to Items',
    },
    shoppingListEditor: {
      label: 'Shopping List Editor',
      description: 'Edit access to ShoppingLists',
    },
    shoppingListViewer: {
      label: 'Shopping List Viewer',
      description: 'View access to ShoppingLists',
    },
    aisleEditor: {
      label: 'Aisle Editor',
      description: 'Edit access to Aisles',
    },
    aisleViewer: {
      label: 'Aisle Viewer',
      description: 'View access to Aisles',
    },
    clerkEditor: {
      label: 'Clerk Editor',
      description: 'Edit access to Clerks',
    },
    clerkViewer: {
      label: 'Clerk Viewer',
      description: 'View access to Clerks',
    },
    managerEditor: {
      label: 'Manager Editor',
      description: 'Edit access to Managers',
    },
    managerViewer: {
      label: 'Manager Viewer',
      description: 'View access to Managers',
    },
    departmentEditor: {
      label: 'Department Editor',
      description: 'Edit access to Departments',
    },
    departmentViewer: {
      label: 'Department Viewer',
      description: 'View access to Departments',
    },
  },

  iam: {
    title: 'Identity and Access Management',
    menu: 'IAM',
    disable: 'Disable',
    disabled: 'Disabled',
    enabled: 'Enabled',
    enable: 'Enable',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own owner permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      primaryColor: 'Primary Color',
      secondaryColor: 'Secondary Color',
    },
    colors: {
      default: 'Default',
      amber: 'Amber',
      blue: 'Blue',
      cyan: 'Cyan',
      deep_orange: 'Deep Orange',
      deep_purple: 'Deep Purple',
      green: 'Green',
      indigo: 'Indigo',
      light_blue: 'Light Blue',
      light_green: 'Light Green',
      lime: 'Lime',
      orange: 'Orange',
      pink: 'Pink',
      purple: 'Purple',
      red: 'Red',
      teal: 'Teal',
      yellow: 'Yellow',
      grey: 'Grey',
      blue_grey: 'Blue Grey',
      brown: 'Brown',
    },
  },
  home: {
    menu: 'Home',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/src/app/home/home.component.html.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      type: '${path} must be an number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `Status: {0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  paginator: {
    itemsPerPageLabel: 'Items per page:',
    nextPageLabel: 'Next page',
    previousPageLabel: 'Previous page',
    firstPageLabel: 'First page',
    lastPageLabel: 'Last page',
    getRangeLabel: {
      zero: '0 of {0}',
      interval: '{0} - {1} of {2}',
    },
  },

  datetime: {
    upSecondLabel: 'Add a second',
    downSecondLabel: 'Minus a second',
    upMinuteLabel: 'Add a minute',
    downMinuteLabel: 'Minus a minute',
    upHourLabel: 'Add a hour',
    downHourLabel: 'Minus a hour',
    prevMonthLabel: 'Previous month',
    nextMonthLabel: 'Next month',
    prevYearLabel: 'Previous year',
    nextYearLabel: 'Next year',
    prevMultiYearLabel: 'Previous 21 years',
    nextMultiYearLabel: 'Next 21 years',
    switchToMonthViewLabel: 'Change to month view',
    switchToMultiYearViewLabel: 'Choose month and year',
    cancelBtnLabel: 'Cancel',
    setBtnLabel: 'Set',
    rangeFromLabel: 'From',
    rangeToLabel: 'To',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },

  table: {
    noData: 'No data',
    loading: 'Loading...',
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  }
};

export default en;
