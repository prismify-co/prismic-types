import { RichTextBlock } from 'prismic-reactjs'
export { };

declare global {
  interface IPrismicMeta<Type = string> {
    id: string;
    uid: string;
    type: Type | string;
    tags?: string[];
    lang?: string;
    published: string;
    updated: string;
  }

  type IPrismicGroup<T extends object> = T[];

  interface IPrismicSlice<Type, Primary = object, Field = any, Label = null>
    extends Omit<IPrismicMeta<Type>, "id" | "uid" | "published" | "updated"> {
    primary?: Primary;
    fields?: Field[];
    label?: Label;
  }

  type IPrismicRichText = RichTextBlock[]

  type IPrismicKeyText = string;

  interface IPrismicImageProps {
    dimensions: {
      width: number;
      height: number;
    };
    alt?: string;
    copyright?: string;
    url?: string;
  }

  type IPrismicImage<T = void> = T extends string
    ? IPrismicImageProps &
        {
          [K in T]: IPrismicImageProps;
        }
    : IPrismicImageProps;

  type IPrismicSelect<T> = T | "";

  type IPrismicBoolean = boolean;

  interface IPrismicDocumentLink {
    meta?: IPrismicMeta;
  }

  interface IPrismicExternalLink {
    url?: string;
  }

  interface IPrismicFileLink extends IPrismicExternalLink {
    name?: string;
    size?: number;
  }

  interface IPrismicImageLink extends IPrismicFileLink {
    width?: number;
    height?: number;
  }

  type IPrismicLink =
    | IPrismicMeta
    | IPrismicDocumentLink
    | IPrismicExternalLink
    | IPrismicFileLink
    | IPrismicImageLink;
}
