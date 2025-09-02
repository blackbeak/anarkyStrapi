import type { Schema, Attribute } from '@strapi/strapi';

export interface FormsFormField extends Schema.Component {
  collectionName: 'components_forms_form_fields';
  info: {
    displayName: 'formField';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    label: Attribute.String;
    placeholder: Attribute.String;
    type: Attribute.Enumeration<
      [
        'text',
        'email',
        'tel',
        'password',
        'number',
        'url',
        'date',
        'datetime-local',
        'time',
        'textarea',
        'select',
        'radio',
        'checkbox',
        'file',
        'hidden'
      ]
    >;
    required: Attribute.Boolean & Attribute.DefaultTo<false>;
    options: Attribute.JSON;
    order: Attribute.Integer;
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'forms.form-field': FormsFormField;
    }
  }
}
