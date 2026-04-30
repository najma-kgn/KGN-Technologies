import type { Schema, Struct } from '@strapi/strapi';

export interface CategoryNavigation extends Struct.ComponentSchema {
  collectionName: 'components_category_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    open_in_new_tab: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
  };
}

export interface HeroSectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TechnologyTechnologies extends Struct.ComponentSchema {
  collectionName: 'components_technology_technologies';
  info: {
    displayName: 'technologies';
  };
  attributes: {
    Technologyitem: Schema.Attribute.Component<
      'technologyitem.technology-item',
      true
    >;
  };
}

export interface TechnologyTechnologySection extends Struct.ComponentSchema {
  collectionName: 'components_technology_technology_sections';
  info: {
    displayName: 'Technology Section';
  };
  attributes: {
    technologies: Schema.Attribute.Component<'technology.technologies', true>;
    title: Schema.Attribute.String;
  };
}

export interface TechnologyitemTechnologyItem extends Struct.ComponentSchema {
  collectionName: 'components_technologyitem_technology_items';
  info: {
    displayName: 'Technology Item';
  };
  attributes: {
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
  };
}

export interface ZigzagSectionZigzagSection extends Struct.ComponentSchema {
  collectionName: 'components_zigzag_section_zigzag_sections';
  info: {
    displayName: 'Zigzag Section';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    Content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    layout: Schema.Attribute.Enumeration<['left', 'right']>;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'category.navigation': CategoryNavigation;
      'hero-section.hero-section': HeroSectionHeroSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services-section': SharedServicesSection;
      'shared.slider': SharedSlider;
      'technology.technologies': TechnologyTechnologies;
      'technology.technology-section': TechnologyTechnologySection;
      'technologyitem.technology-item': TechnologyitemTechnologyItem;
      'zigzag-section.zigzag-section': ZigzagSectionZigzagSection;
    }
  }
}
