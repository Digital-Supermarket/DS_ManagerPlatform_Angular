const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Início',
    end: 'Fim'
  },

  app: {
    title: 'Aplicativo',
  },

  entities: {
    client: {
      name: 'Client',
      label: 'Clients',
      menu: 'Clients',
      exporterFileName: 'Client_exportados',
      list: {
        menu: 'Clients',
        title: 'Clients',
      },
      create: {
        success: 'Client salvo com sucesso',
      },
      update: {
        success: 'Client salvo com sucesso',
      },
      destroy: {
        success: 'Client deletado com sucesso',
      },
      destroyAll: {
        success: 'Client(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Client',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'phoneNumber': 'Phone Number',
        'email': 'Email',
        'password': 'Password',
        'shoppingLists': 'ShoppingLists',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Client',
      },
      view: {
        title: 'Visualizar Client',
      },
      importer: {
        title: 'Importar Clients',
        fileName: 'client_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    product: {
      name: 'Product',
      label: 'Products',
      menu: 'Products',
      exporterFileName: 'Product_exportados',
      list: {
        menu: 'Products',
        title: 'Products',
      },
      create: {
        success: 'Product salvo com sucesso',
      },
      update: {
        success: 'Product salvo com sucesso',
      },
      destroy: {
        success: 'Product deletado com sucesso',
      },
      destroyAll: {
        success: 'Product(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Product',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Product',
      },
      view: {
        title: 'Visualizar Product',
      },
      importer: {
        title: 'Importar Products',
        fileName: 'product_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    item: {
      name: 'Item',
      label: 'Items',
      menu: 'Items',
      exporterFileName: 'Item_exportados',
      list: {
        menu: 'Items',
        title: 'Items',
      },
      create: {
        success: 'Item salvo com sucesso',
      },
      update: {
        success: 'Item salvo com sucesso',
      },
      destroy: {
        success: 'Item deletado com sucesso',
      },
      destroyAll: {
        success: 'Item(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Item',
      },
      fields: {
        id: 'Id',
        'product': 'Product',
        'expiryDateRange': 'Expiry Date',
        'expiryDate': 'Expiry Date',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Item',
      },
      view: {
        title: 'Visualizar Item',
      },
      importer: {
        title: 'Importar Items',
        fileName: 'item_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    shoppingList: {
      name: 'Shopping List',
      label: 'ShoppingLists',
      menu: 'ShoppingLists',
      exporterFileName: 'Shopping List_exportados',
      list: {
        menu: 'ShoppingLists',
        title: 'ShoppingLists',
      },
      create: {
        success: 'Shopping List salvo com sucesso',
      },
      update: {
        success: 'Shopping List salvo com sucesso',
      },
      destroy: {
        success: 'Shopping List deletado com sucesso',
      },
      destroyAll: {
        success: 'Shopping List(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Shopping List',
      },
      fields: {
        id: 'Id',
        'item': 'Item',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Shopping List',
      },
      view: {
        title: 'Visualizar Shopping List',
      },
      importer: {
        title: 'Importar ShoppingLists',
        fileName: 'shoppingList_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    aisle: {
      name: 'Aisle',
      label: 'Aisles',
      menu: 'Aisles',
      exporterFileName: 'Aisle_exportados',
      list: {
        menu: 'Aisles',
        title: 'Aisles',
      },
      create: {
        success: 'Aisle salvo com sucesso',
      },
      update: {
        success: 'Aisle salvo com sucesso',
      },
      destroy: {
        success: 'Aisle deletado com sucesso',
      },
      destroyAll: {
        success: 'Aisle(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Aisle',
      },
      fields: {
        id: 'Id',
        'item': 'Item',
        'clerk': 'Clerk',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Aisle',
      },
      view: {
        title: 'Visualizar Aisle',
      },
      importer: {
        title: 'Importar Aisles',
        fileName: 'aisle_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    clerk: {
      name: 'Clerk',
      label: 'Clerks',
      menu: 'Clerks',
      exporterFileName: 'Clerk_exportados',
      list: {
        menu: 'Clerks',
        title: 'Clerks',
      },
      create: {
        success: 'Clerk salvo com sucesso',
      },
      update: {
        success: 'Clerk salvo com sucesso',
      },
      destroy: {
        success: 'Clerk deletado com sucesso',
      },
      destroyAll: {
        success: 'Clerk(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Clerk',
      },
      fields: {
        id: 'Id',
        'shiftIsDay': 'Day Shift',
        'departments': 'Departments',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Clerk',
      },
      view: {
        title: 'Visualizar Clerk',
      },
      importer: {
        title: 'Importar Clerks',
        fileName: 'clerk_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    manager: {
      name: 'Manager',
      label: 'Managers',
      menu: 'Managers',
      exporterFileName: 'Manager_exportados',
      list: {
        menu: 'Managers',
        title: 'Managers',
      },
      create: {
        success: 'Manager salvo com sucesso',
      },
      update: {
        success: 'Manager salvo com sucesso',
      },
      destroy: {
        success: 'Manager deletado com sucesso',
      },
      destroyAll: {
        success: 'Manager(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Manager',
      },
      fields: {
        id: 'Id',
        'headOf': 'employees',
        'departments': 'Departments',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Manager',
      },
      view: {
        title: 'Visualizar Manager',
      },
      importer: {
        title: 'Importar Managers',
        fileName: 'manager_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    department: {
      name: 'Department',
      label: 'Departments',
      menu: 'Departments',
      exporterFileName: 'Department_exportados',
      list: {
        menu: 'Departments',
        title: 'Departments',
      },
      create: {
        success: 'Department salvo com sucesso',
      },
      update: {
        success: 'Department salvo com sucesso',
      },
      destroy: {
        success: 'Department deletado com sucesso',
      },
      destroyAll: {
        success: 'Department(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Department',
      },
      fields: {
        id: 'Id',
        'aisles': 'Aisles',
        'managedBy': 'Managed By',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Department',
      },
      view: {
        title: 'Visualizar Department',
      },
      importer: {
        title: 'Importar Departments',
        fileName: 'department_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Editar Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    owner: {
      label: 'Proprietário',
      description: 'Acesso completo a todos os recursos',
    },
    editor: {
      label: 'Editor',
      description: 'Acesso para edição a todos os recursos',
    },
    viewer: {
      label: 'Visualizador',
      description:
        'Acesso de visualização a todos os recursos',
    },
    auditLogViewer: {
      label: 'Visualizador de Registros de Autoria',
      description:
        'Acesso de visualização dos registros de autoria',
    },
    iamSecurityReviewer: {
      label: 'Revisor de segurança',
      description: `Acesso total para gerenciar as funções do usuário`,
    },
    entityEditor: {
      label: 'Editor de Entidades',
      description: 'Acesso de edição a todas as entidades',
    },
    entityViewer: {
      label: 'Visualizador de Entidades',
      description:
        'Acesso de visualização a todas as entidades',
    },
    clientEditor: {
      label: 'Editor de Clients',
      description: 'Acesso de edição aos Clients',
    },
    clientViewer: {
      label: 'Visualizador de Clients',
      description: 'Acesso de visualização aos Clients',
    },
    productEditor: {
      label: 'Editor de Products',
      description: 'Acesso de edição aos Products',
    },
    productViewer: {
      label: 'Visualizador de Products',
      description: 'Acesso de visualização aos Products',
    },
    itemEditor: {
      label: 'Editor de Items',
      description: 'Acesso de edição aos Items',
    },
    itemViewer: {
      label: 'Visualizador de Items',
      description: 'Acesso de visualização aos Items',
    },
    shoppingListEditor: {
      label: 'Editor de ShoppingLists',
      description: 'Acesso de edição aos ShoppingLists',
    },
    shoppingListViewer: {
      label: 'Visualizador de ShoppingLists',
      description: 'Acesso de visualização aos ShoppingLists',
    },
    aisleEditor: {
      label: 'Editor de Aisles',
      description: 'Acesso de edição aos Aisles',
    },
    aisleViewer: {
      label: 'Visualizador de Aisles',
      description: 'Acesso de visualização aos Aisles',
    },
    clerkEditor: {
      label: 'Editor de Clerks',
      description: 'Acesso de edição aos Clerks',
    },
    clerkViewer: {
      label: 'Visualizador de Clerks',
      description: 'Acesso de visualização aos Clerks',
    },
    managerEditor: {
      label: 'Editor de Managers',
      description: 'Acesso de edição aos Managers',
    },
    managerViewer: {
      label: 'Visualizador de Managers',
      description: 'Acesso de visualização aos Managers',
    },
    departmentEditor: {
      label: 'Editor de Departments',
      description: 'Acesso de edição aos Departments',
    },
    departmentViewer: {
      label: 'Visualizador de Departments',
      description: 'Acesso de visualização aos Departments',
    },
  },

  iam: {
    title: 'Gerenciamento de usuários e permissões',
    menu: 'IAM',
    disable: 'Desabilitar',
    disabled: 'Desabilitado',
    enabled: 'Habilitado',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuário habilitado com sucesso',
    doDisableSuccess: 'Usuário desabilitado com sucesso',
    doDisableAllSuccess:
      'Usuário(s) desabilitado(s) com sucesso',
    doEnableAllSuccess:
      'Usuário(s) habilidatos com sucesso',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    viewBy: 'Visualizar por',
    users: {
      name: 'users',
      label: 'Usuários',
      exporterFileName: 'usuarios_exportados',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    roles: {
      label: 'Perfis',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      disablingHimself: `Você não pode desativar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Id de autenticação',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      disabled: 'Desativado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
    },
    enabled: 'Habilitado',
    disabled: 'Desabilitado',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
      primaryColor: 'Cor Primária',
      secondaryColor: 'Cor Secundária',
    },
    colors: {
      default: 'Padrão',
      amber: 'Âmbar',
      blue: 'Azul',
      cyan: 'Ciano',
      deep_orange: 'Laranja Escuro',
      deep_purple: 'Roxo Escuro',
      green: 'Azul',
      indigo: 'Índigo',
      light_blue: 'Azul Fraco',
      light_green: 'Verde Fraco',
      lime: 'Limão',
      orange: 'Laranja',
      pink: 'Rosa',
      purple: 'Roxo',
      red: 'Vermelho',
      teal: 'Verde Azulado',
      yellow: 'Amarelo',
      grey: 'Cinza',
      blue_grey: 'Azul Cinza',
      brown: 'Marrom',
    },
  },
  home: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/src/app/home/home.component.html.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
      type: '${path} deve ser um número',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser: '{0}'.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  paginator: {
    itemsPerPageLabel: 'Itens por página:',
    nextPageLabel: 'Próxima',
    previousPageLabel: 'Anterior',
    firstPageLabel: 'Primeira página',
    lastPageLabel: 'Última página',
    getRangeLabel: {
      zero: '0 de {0}',
      interval: '{0} - {1} de {2}',
    },
  },

  datetime: {
    upSecondLabel: 'Adicionar um segundo',
    downSecondLabel: 'Diminuir um segundo',
    upMinuteLabel: 'Adicionar um minuto',
    downMinuteLabel: 'Diminuir um minuto',
    upHourLabel: 'Adicionar uma hora',
    downHourLabel: 'Diminuir uma hora',
    prevMonthLabel: 'Mês anterior',
    nextMonthLabel: 'Mês seguinte',
    prevYearLabel: 'Ano anterior',
    nextYearLabel: 'Ano seguinte',
    prevMultiYearLabel: '21 anos anteriores',
    nextMultiYearLabel: '21 anos próximos',
    switchToMonthViewLabel: 'Alterar para visão mensal',
    switchToMultiYearViewLabel: 'Escolher mês e ano',
    cancelBtnLabel: 'Cancelar',
    setBtnLabel: 'Confirmar',
    rangeFromLabel: 'De',
    rangeToLabel: 'Até',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },

  table: {
    noData: 'Não há dados',
    loading: 'Carregando...',
  },

  autocomplete: {
    loading: 'Carregando...',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  }
};

export default ptBR;
