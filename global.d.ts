import { RichTextBlock } from "prismic-reactjs";
import { Document } from "prismic-javascript";

export {};

declare global {
  type IPrismicGroup<T extends object> = T[];

  interface IPrismicSlice<Primary = object, Item = any, Label = null> {
    primary?: Primary;
    items?: Item[];
    label?: Label;
  }

  type IPrismicRichText = RichTextBlock[];

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

  interface IPrismicAnyLink {
    link_type: "Any";
  }
  interface IPrismicDocumentLink
    extends Omit<
      Document,
      | "alternate_languages"
      | "first_publication_date"
      | "last_publication_date"
      | "data"
    > {
    link_type: "Document";
    isBroken: boolean;
  }

  interface IPrismicExternalLink {
    link_type: "Web";
    url?: string;
  }

  interface IPrismicFileLink {
    link_type: "Media";
    url?: string;
    name?: string;
    size?: number;
  }

  interface IPrismicImageLink extends IPrismicFileLink {
    width?: number;
    height?: number;
  }

  type IPrismicLink =
    | IPrismicAnyLink
    | IPrismicDocumentLink
    | IPrismicExternalLink
    | IPrismicFileLink
    | IPrismicImageLink;
}
