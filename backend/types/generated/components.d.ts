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

export interface ArticlesRichText extends Schema.Component {
  collectionName: 'components_articles_rich_texts';
  info: {
    displayName: 'rich-text';
  };
  attributes: {
    content: Attribute.RichText;
    textSize: Attribute.Enumeration<
      ['small', 'medium', 'large', 'extra-large']
    > &
      Attribute.DefaultTo<'medium'>;
    textAlignment: Attribute.Enumeration<
      ['left', 'center', 'right', 'justify']
    > &
      Attribute.DefaultTo<'left'>;
    containerWidth: Attribute.Enumeration<
      ['narrow', 'medium', 'wide', 'full-width']
    > &
      Attribute.DefaultTo<'medium'>;
    backgroundColor: Attribute.Enumeration<
      ['transparent', 'white', 'light-gray', 'brand-light']
    > &
      Attribute.DefaultTo<'transparent'>;
    padding: Attribute.Enumeration<['none', 'small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
    enableDropCap: Attribute.Boolean & Attribute.DefaultTo<false>;
    customCssClass: Attribute.String;
  };
}

export interface ArticlesQuote extends Schema.Component {
  collectionName: 'components_articles_quotes';
  info: {
    displayName: 'quote';
  };
  attributes: {
    quoteText: Attribute.Text;
    personName: Attribute.String;
    personTitle: Attribute.String;
    companyName: Attribute.String;
    companyUrl: Attribute.String;
    headshot: Attribute.Media<'images'>;
    quoteStyle: Attribute.Enumeration<
      ['standard', 'large', 'boxed', 'minimal']
    > &
      Attribute.DefaultTo<'standard'>;
    alignment: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'center'>;
    backgroundColor: Attribute.Enumeration<
      ['transparent', 'light-gray', 'brand-light', 'white']
    > &
      Attribute.DefaultTo<'transparent'>;
    showQuoteMarks: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ArticlesHero extends Schema.Component {
  collectionName: 'components_articles_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    headline: Attribute.String;
    description: Attribute.Text;
    backgroundType: Attribute.Enumeration<
      [
        'image',
        'video-url',
        'gradient-dark',
        'gradient-light',
        'gradient-brand',
        'solid-color'
      ]
    > &
      Attribute.DefaultTo<'gradient-dark'>;
    backgroundImage: Attribute.Media<'images'>;
    backgroundVideoUrl: Attribute.String;
    customColor: Attribute.String;
    textAlignment: Attribute.Enumeration<['left', 'right', 'center']> &
      Attribute.DefaultTo<'left'>;
    ctaOneText: Attribute.String;
    ctaTwoText: Attribute.String;
    ctaOneLink: Attribute.String;
    ctaTwoLink: Attribute.String;
    overlayOpacity: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      > &
      Attribute.DefaultTo<40>;
    minHeight: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
    customGradient: Attribute.String;
  };
}

export interface ArticlesBodyImageText extends Schema.Component {
  collectionName: 'components_articles_body_image_texts';
  info: {
    displayName: 'body-image-text';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    imagePosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
    textContent: Attribute.RichText;
    altText: Attribute.String;
    imageSize: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
    verticalAlignment: Attribute.Enumeration<['top', 'center', 'bottom']> &
      Attribute.DefaultTo<'top'>;
    backgroundColor: Attribute.Enumeration<
      ['transparent', 'white', 'light-gray', 'brand-light']
    > &
      Attribute.DefaultTo<'transparent'>;
    spacing: Attribute.Enumeration<['tight', 'normal', 'loose']> &
      Attribute.DefaultTo<'normal'>;
    borderRadius: Attribute.Enumeration<['none', 'small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
    imageShadow: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ArticlesArticleMedia extends Schema.Component {
  collectionName: 'components_articles_article_medias';
  info: {
    displayName: 'article-media';
  };
  attributes: {
    mediaType: Attribute.Enumeration<['image', 'video-url']> &
      Attribute.Required;
    image: Attribute.Media<'images'>;
    videoUrl: Attribute.String;
    caption: Attribute.String;
    altText: Attribute.String;
    alignment: Attribute.Enumeration<
      ['left', 'right', 'center', 'full-width']
    > &
      Attribute.DefaultTo<'center'>;
    size: Attribute.Enumeration<['small', 'medium', 'large', 'full-width']> &
      Attribute.DefaultTo<'medium'>;
    borderRadius: Attribute.Enumeration<
      ['none', 'small', 'medium', 'large', 'full']
    > &
      Attribute.DefaultTo<'medium'>;
    shadow: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'forms.form-field': FormsFormField;
      'articles.rich-text': ArticlesRichText;
      'articles.quote': ArticlesQuote;
      'articles.hero': ArticlesHero;
      'articles.body-image-text': ArticlesBodyImageText;
      'articles.article-media': ArticlesArticleMedia;
    }
  }
}
