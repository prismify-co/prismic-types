declare interface IPrismicMeta<Type = string> {
  id: string;
  uid: string;
  type: Type | string;
  tags?: string[];
  lang?: string;
  published: string;
  updated: string;
}

declare type IPrismicGroup<T extends object> = T[];

declare interface IPrismicSlice<
  Type,
  Primary = object,
  Field = any,
  Label = null
> extends Omit<IPrismicMeta<Type>, "id" | "uid" | "published" | "updated"> {
  primary?: Primary;
  fields?: Field[];
  label?: Label;
}

declare interface IPrismicRichText {
  type?: string;
  text?: string;
  spans?: string[];
}

declare type IPrismicKeyText = string;

interface IPrismicImageProps {
  dimensions: {
    width: number;
    height: number;
  };
  alt?: string;
  copyright?: string;
  url?: string;
}

declare type IPrismicImage<T = void> = T extends string
  ? IPrismicImageProps &
      {
        [K in T]: IPrismicImageProps;
      }
  : IPrismicImageProps;

declare type IPrismicSelect<T> = T | "";

declare type IPrismicBoolean = boolean;

declare interface IPrismicDocumentLink {
  meta?: IPrismicMeta;
}

declare interface IPrismicExternalLink {
  url?: string;
}

declare interface IPrismicFileLink extends IPrismicExternalLink {
  name?: string;
  size?: number;
}

declare interface IPrismicImageLink extends IPrismicFileLink {
  width?: number;
  height?: number;
}

declare type IPrismicLink =
  | IPrismicMeta
  | IPrismicDocumentLink
  | IPrismicExternalLink
  | IPrismicFileLink
  | IPrismicImageLink;
