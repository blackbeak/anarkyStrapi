import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutAbout extends Schema.SingleType {
  collectionName: 'abouts';
  info: {
    singularName: 'about';
    pluralName: 'abouts';
    displayName: 'About';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    headline: Attribute.String;
    heroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bodyImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    body: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAirhudAirhud extends Schema.SingleType {
  collectionName: 'airhuds';
  info: {
    singularName: 'airhud';
    pluralName: 'airhuds';
    displayName: 'airhud';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Relation<
      'api::airhud.airhud',
      'oneToOne',
      'api::hero.hero'
    >;
    benefitHeadline: Attribute.String;
    feature_collections: Attribute.Relation<
      'api::airhud.airhud',
      'oneToMany',
      'api::feature-collection.feature-collection'
    >;
    subHeadOne: Attribute.String;
    subHeadTwo: Attribute.String;
    cta_section: Attribute.Relation<
      'api::airhud.airhud',
      'oneToOne',
      'api::cta-section.cta-section'
    >;
    systemOverview: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoUrl: Attribute.String;
    benefitText: Attribute.Text;
    videoHeadline: Attribute.String;
    benefits: Attribute.Relation<
      'api::airhud.airhud',
      'oneToMany',
      'api::benefit.benefit'
    >;
    faqs: Attribute.Relation<'api::airhud.airhud', 'oneToMany', 'api::faq.faq'>;
    supportedDrones: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::airhud.airhud',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::airhud.airhud',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: 'articles';
  info: {
    singularName: 'article';
    pluralName: 'articles';
    displayName: 'article';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seoTitle: Attribute.String;
    seoSummary: Attribute.Text;
    seoFeatureImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    author: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'api::author.author'
    >;
    slug: Attribute.String;
    articles: Attribute.DynamicZone<
      [
        'articles.hero',
        'articles.quote',
        'articles.rich-text',
        'articles.body-image-text',
        'articles.article-media'
      ]
    >;
    date: Attribute.Date;
    categories: Attribute.Relation<
      'api::article.article',
      'manyToMany',
      'api::category.category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAuthorAuthor extends Schema.CollectionType {
  collectionName: 'authors';
  info: {
    singularName: 'author';
    pluralName: 'authors';
    displayName: 'author';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    bio: Attribute.Text;
    linkedin: Attribute.String;
    email: Attribute.String;
    telephone: Attribute.String;
    headshot: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    articles: Attribute.Relation<
      'api::author.author',
      'oneToMany',
      'api::article.article'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBenefitBenefit extends Schema.CollectionType {
  collectionName: 'benefits';
  info: {
    singularName: 'benefit';
    pluralName: 'benefits';
    displayName: 'benefit';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    benefitTitle: Attribute.String;
    benefitBody: Attribute.Text;
    orderBy: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::benefit.benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::benefit.benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.SingleType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    headline: Attribute.String;
    summary: Attribute.Text;
    heroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCaseCase extends Schema.CollectionType {
  collectionName: 'cases';
  info: {
    singularName: 'case';
    pluralName: 'cases';
    displayName: 'case';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    headline: Attribute.String;
    heroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    case_collections: Attribute.Relation<
      'api::case.case',
      'oneToMany',
      'api::case-collection.case-collection'
    >;
    slug: Attribute.String;
    testimonials: Attribute.Relation<
      'api::case.case',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::case.case', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::case.case', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCaseCollectionCaseCollection extends Schema.CollectionType {
  collectionName: 'case_collections';
  info: {
    singularName: 'case-collection';
    pluralName: 'case-collections';
    displayName: 'caseCollection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    headline: Attribute.String;
    shortDesc: Attribute.Text;
    caseImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::case-collection.case-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::case-collection.case-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
    articles: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::article.article'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactContact extends Schema.SingleType {
  collectionName: 'contacts';
  info: {
    singularName: 'contact';
    pluralName: 'contacts';
    displayName: 'contact';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    headline: Attribute.String;
    summary: Attribute.Text;
    heroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    body: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCtaSectionCtaSection extends Schema.CollectionType {
  collectionName: 'cta_sections';
  info: {
    singularName: 'cta-section';
    pluralName: 'cta-sections';
    displayName: 'CtaSection';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    headline: Attribute.String;
    description: Attribute.String;
    ctaOneText: Attribute.String;
    ctaTwoText: Attribute.String;
    ctaThreeText: Attribute.String;
    ctaOneSlug: Attribute.String;
    ctaTwoSlug: Attribute.String;
    ctaThreeSlug: Attribute.String;
    ctaID: Attribute.String;
    ctaOne: Attribute.Text;
    ctaTwo: Attribute.Text;
    ctaThree: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cta-section.cta-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cta-section.cta-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.CollectionType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFaqHomeFaqHome extends Schema.SingleType {
  collectionName: 'faq_homes';
  info: {
    singularName: 'faq-home';
    pluralName: 'faq-homes';
    displayName: 'faqHome';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    headline: Attribute.String;
    background: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    shortDesc: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-home.faq-home',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-home.faq-home',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFeatureCollectionFeatureCollection
  extends Schema.CollectionType {
  collectionName: 'feature_collections';
  info: {
    singularName: 'feature-collection';
    pluralName: 'feature-collections';
    displayName: 'featureCollection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    featureDescription: Attribute.Text;
    featureImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::feature-collection.feature-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::feature-collection.feature-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFeaturesFeatures extends Schema.SingleType {
  collectionName: 'allfeatures';
  info: {
    singularName: 'features';
    pluralName: 'allfeatures';
    displayName: 'features';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    headline: Attribute.String;
    scenarioHeadline: Attribute.String;
    scenarioText: Attribute.Text;
    technicalHeadline: Attribute.String;
    scenarios: Attribute.Relation<
      'api::features.features',
      'oneToMany',
      'api::scenario.scenario'
    >;
    tech_collections: Attribute.Relation<
      'api::features.features',
      'oneToMany',
      'api::tech-collection.tech-collection'
    >;
    training_kit: Attribute.Relation<
      'api::features.features',
      'oneToOne',
      'api::training-kit.training-kit'
    >;
    feature_collections: Attribute.Relation<
      'api::features.features',
      'oneToMany',
      'api::feature-collection.feature-collection'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::features.features',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::features.features',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    summary: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
    address: Attribute.String;
    headerOne: Attribute.String;
    headerTwo: Attribute.String;
    headerThree: Attribute.String;
    headerFour: Attribute.String;
    subscribeHeader: Attribute.String;
    subscribeSummary: Attribute.String;
    copyrightLeft: Attribute.String;
    copyrightRight: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFormForm extends Schema.CollectionType {
  collectionName: 'forms';
  info: {
    singularName: 'form';
    pluralName: 'forms';
    displayName: 'form';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    buttonText: Attribute.String;
    successMessage: Attribute.String;
    errorMessage: Attribute.String;
    endpoint: Attribute.String;
    field: Attribute.Component<'forms.form-field', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiHeroHero extends Schema.CollectionType {
  collectionName: 'heroes';
  info: {
    singularName: 'hero';
    pluralName: 'heroes';
    displayName: 'hero';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    headline: Attribute.String;
    description: Attribute.Text;
    ctaOneText: Attribute.String;
    ctaOneLink: Attribute.String;
    ctaTwoText: Attribute.String;
    ctaTwoLink: Attribute.String;
    backgroundMedia: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heroID: Attribute.String;
    backgroundVideo: Attribute.String;
    overlayEnabled: Attribute.Boolean & Attribute.DefaultTo<false>;
    overlayOpacity: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      > &
      Attribute.DefaultTo<50>;
    textAlignment: Attribute.Enumeration<['left', 'right', 'center']> &
      Attribute.DefaultTo<'center'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::hero.hero', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::hero.hero', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: 'Home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    hero: Attribute.Relation<'api::home.home', 'oneToOne', 'api::hero.hero'>;
    articles: Attribute.Relation<
      'api::home.home',
      'oneToMany',
      'api::article.article'
    >;
    sectionHeadline: Attribute.String;
    sectionHeadlineTwo: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiIndexIndex extends Schema.SingleType {
  collectionName: 'indices';
  info: {
    singularName: 'index';
    pluralName: 'indices';
    displayName: 'airskill';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    bodyImageText: Attribute.RichText;
    bodyImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    body: Attribute.RichText;
    videoUrl: Attribute.String;
    benefitHeadline: Attribute.String;
    headerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    downloadImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    downloadBenefits: Attribute.RichText;
    pdfDownload: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    benefits: Attribute.Relation<
      'api::index.index',
      'oneToMany',
      'api::benefit.benefit'
    >;
    hero: Attribute.Relation<'api::index.index', 'oneToOne', 'api::hero.hero'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::index.index',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::index.index',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLabLab extends Schema.SingleType {
  collectionName: 'labs';
  info: {
    singularName: 'lab';
    pluralName: 'labs';
    displayName: 'lab';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    formHeadline: Attribute.String;
    formDescription: Attribute.Text;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    hero: Attribute.Relation<'api::lab.lab', 'oneToOne', 'api::hero.hero'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::lab.lab', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::lab.lab', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiLegalLegal extends Schema.CollectionType {
  collectionName: 'legals';
  info: {
    singularName: 'legal';
    pluralName: 'legals';
    displayName: 'legal';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    headline: Attribute.String;
    summary: Attribute.Text;
    headerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    body: Attribute.RichText;
    dateModified: Attribute.String;
    slug: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::legal.legal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::legal.legal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageCollectionPageCollection extends Schema.CollectionType {
  collectionName: 'page_collections';
  info: {
    singularName: 'page-collection';
    pluralName: 'page-collections';
    displayName: 'PageCollection';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    headline: Attribute.String;
    description: Attribute.Text;
    ctaOneText: Attribute.String;
    ctaOneLink: Attribute.String;
    ctaTwoText: Attribute.String;
    ctaTwoLink: Attribute.String;
    collectionImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    collectionID: Attribute.String;
    styleVariant: Attribute.Enumeration<
      [
        'gradient-dark',
        'gradient-light',
        'gradient-brand',
        'solid-white',
        'solid-dark',
        'image-overlay'
      ]
    >;
    textAlignment: Attribute.Enumeration<['left', 'right', 'center']> &
      Attribute.DefaultTo<'center'>;
    customGradient: Attribute.String;
    customBackgroundColor: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-collection.page-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-collection.page-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricingPricing extends Schema.SingleType {
  collectionName: 'pricings';
  info: {
    singularName: 'pricing';
    pluralName: 'pricings';
    displayName: 'pricing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    headline: Attribute.String;
    body: Attribute.Text;
    heroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pricing.pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pricing.pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductVariableProductVariable
  extends Schema.CollectionType {
  collectionName: 'product_variables';
  info: {
    singularName: 'product-variable';
    pluralName: 'product-variables';
    displayName: 'productVariables';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    description: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-variable.product-variable',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-variable.product-variable',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReferenceLogoReferenceLogo extends Schema.CollectionType {
  collectionName: 'reference_logos';
  info: {
    singularName: 'reference-logo';
    pluralName: 'reference-logos';
    displayName: 'reference logo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    url: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reference-logo.reference-logo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reference-logo.reference-logo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiScenarioScenario extends Schema.CollectionType {
  collectionName: 'scenarios';
  info: {
    singularName: 'scenario';
    pluralName: 'scenarios';
    displayName: 'scenario';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    shortDesc: Attribute.Text;
    scenarioImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::scenario.scenario',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::scenario.scenario',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSoftwareItemSoftwareItem extends Schema.CollectionType {
  collectionName: 'software_items';
  info: {
    singularName: 'software-item';
    pluralName: 'software-items';
    displayName: 'softwareItem';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    headline: Attribute.String;
    description: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::software-item.software-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::software-item.software-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSupportSupport extends Schema.SingleType {
  collectionName: 'supports';
  info: {
    singularName: 'support';
    pluralName: 'supports';
    displayName: 'support';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    whitePaperHeadline: Attribute.String;
    faqHeadline: Attribute.String;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    hero: Attribute.Relation<
      'api::support.support',
      'oneToOne',
      'api::hero.hero'
    >;
    faqs: Attribute.Relation<
      'api::support.support',
      'oneToMany',
      'api::faq.faq'
    >;
    white_papers: Attribute.Relation<
      'api::support.support',
      'oneToMany',
      'api::white-paper.white-paper'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::support.support',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::support.support',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTargetTarget extends Schema.CollectionType {
  collectionName: 'targets';
  info: {
    singularName: 'target';
    pluralName: 'targets';
    displayName: 'target';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    targetTitle: Attribute.String;
    targetBody: Attribute.Text;
    slug: Attribute.String;
    targetImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::target.target',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::target.target',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTechCollectionTechCollection extends Schema.CollectionType {
  collectionName: 'tech_collections';
  info: {
    singularName: 'tech-collection';
    pluralName: 'tech-collections';
    displayName: 'techCollection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    techDescription: Attribute.Text;
    techImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tech-collection.tech-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tech-collection.tech-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Schema.CollectionType {
  collectionName: 'testimonials';
  info: {
    singularName: 'testimonial';
    pluralName: 'testimonials';
    displayName: 'testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    testimonialText: Attribute.Text;
    title: Attribute.String;
    avatar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTrainingKitTrainingKit extends Schema.CollectionType {
  collectionName: 'training_kits';
  info: {
    singularName: 'training-kit';
    pluralName: 'training-kits';
    displayName: 'training-kit';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    headline: Attribute.String;
    kitImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    product_variables: Attribute.Relation<
      'api::training-kit.training-kit',
      'oneToMany',
      'api::product-variable.product-variable'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::training-kit.training-kit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::training-kit.training-kit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTrialTrial extends Schema.SingleType {
  collectionName: 'trials';
  info: {
    singularName: 'trial';
    pluralName: 'trials';
    displayName: 'trial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    headline: Attribute.String;
    summary: Attribute.String;
    heroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    body: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::trial.trial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::trial.trial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVersionVersion extends Schema.CollectionType {
  collectionName: 'versions';
  info: {
    singularName: 'version';
    pluralName: 'versions';
    displayName: 'version';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    versionName: Attribute.String;
    headline: Attribute.String;
    versionDescription: Attribute.String;
    stripePriceAnnualID: Attribute.String;
    product_variables: Attribute.Relation<
      'api::version.version',
      'oneToMany',
      'api::product-variable.product-variable'
    >;
    productPicture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publish: Attribute.Boolean;
    order: Attribute.Integer;
    annualPrice: Attribute.BigInteger;
    software_items: Attribute.Relation<
      'api::version.version',
      'oneToMany',
      'api::software-item.software-item'
    >;
    publish_staging: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::version.version',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::version.version',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWhitePaperWhitePaper extends Schema.CollectionType {
  collectionName: 'white_papers';
  info: {
    singularName: 'white-paper';
    pluralName: 'white-papers';
    displayName: 'white-paper';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    whitePaperTitle: Attribute.String;
    whitePaperDescription: Attribute.Text;
    whitePaperImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    whitePaperFile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    form: Attribute.Relation<
      'api::white-paper.white-paper',
      'oneToOne',
      'api::form.form'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::white-paper.white-paper',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::white-paper.white-paper',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::about.about': ApiAboutAbout;
      'api::airhud.airhud': ApiAirhudAirhud;
      'api::article.article': ApiArticleArticle;
      'api::author.author': ApiAuthorAuthor;
      'api::benefit.benefit': ApiBenefitBenefit;
      'api::blog.blog': ApiBlogBlog;
      'api::case.case': ApiCaseCase;
      'api::case-collection.case-collection': ApiCaseCollectionCaseCollection;
      'api::category.category': ApiCategoryCategory;
      'api::contact.contact': ApiContactContact;
      'api::cta-section.cta-section': ApiCtaSectionCtaSection;
      'api::faq.faq': ApiFaqFaq;
      'api::faq-home.faq-home': ApiFaqHomeFaqHome;
      'api::feature-collection.feature-collection': ApiFeatureCollectionFeatureCollection;
      'api::features.features': ApiFeaturesFeatures;
      'api::footer.footer': ApiFooterFooter;
      'api::form.form': ApiFormForm;
      'api::hero.hero': ApiHeroHero;
      'api::home.home': ApiHomeHome;
      'api::index.index': ApiIndexIndex;
      'api::lab.lab': ApiLabLab;
      'api::legal.legal': ApiLegalLegal;
      'api::page-collection.page-collection': ApiPageCollectionPageCollection;
      'api::pricing.pricing': ApiPricingPricing;
      'api::product-variable.product-variable': ApiProductVariableProductVariable;
      'api::reference-logo.reference-logo': ApiReferenceLogoReferenceLogo;
      'api::scenario.scenario': ApiScenarioScenario;
      'api::software-item.software-item': ApiSoftwareItemSoftwareItem;
      'api::support.support': ApiSupportSupport;
      'api::target.target': ApiTargetTarget;
      'api::tech-collection.tech-collection': ApiTechCollectionTechCollection;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::training-kit.training-kit': ApiTrainingKitTrainingKit;
      'api::trial.trial': ApiTrialTrial;
      'api::version.version': ApiVersionVersion;
      'api::white-paper.white-paper': ApiWhitePaperWhitePaper;
    }
  }
}
