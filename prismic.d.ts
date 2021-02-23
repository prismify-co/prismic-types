declare module "prismic-javascript" {
  export interface AlternateLanguage {
    id: string;
    uid?: string;
    type: string;
    lang: string;
  }

  export interface Document {
    id: string;
    uid?: string;
    url?: string;
    type: string;
    href: string;
    tags: string[];
    slugs: string[];
    lang?: string;
    alternate_languages: AlternateLanguage[];
    first_publication_date: string | null;
    last_publication_date: string | null;
    data: any;
  }
}

declare module "prismic-reactjs" {
  enum Elements {
    heading1 = "heading1",
    heading2 = "heading2",
    heading3 = "heading3",
    heading4 = "heading4",
    heading5 = "heading5",
    heading6 = "heading6",
    paragraph = "paragraph",
    preformatted = "preformatted",
    strong = "strong",
    em = "em",
    listItem = "list-item",
    oListItem = "o-list-item",
    list = "group-list-item",
    oList = "group-o-list-item",
    image = "image",
    embed = "embed",
    hyperlink = "hyperlink",
    label = "label",
    span = "span",
  }

  type Link = {
    link_type?: "Web" | "Document" | "Media" | "Any";
    url?: string;
    target?: string;
    id?: string;
    uid?: string;
    isBroken?: boolean;
    lang?: string;
    slug?: string;
    tags?: string[];
    type?: string;
    height?: string;
    kind?: string;
    name?: string;
    size?: string;
    width?: string;
  };

  export type RichTextSpan = {
    start: number;
    end: number;
    type: Elements.strong | Elements.hyperlink | Elements.em | Elements.label;
    data?: Link & { label?: string };
  };

  export type RichTextBlock = {
    type: Elements;
    text?: string;
    spans?: RichTextSpan[];
    alt?: string | null;
    copyright?: string | null;
    dimensions?: { width: number; height: number };
    url?: string;
    linkTo?: Link;
    oembed?: any;
  };

  export type HTMLSerializer<T> = (
    type: Elements,
    element: any,
    content: string,
    children: T[],
    key: string
  ) => T | null;

  export interface RichTextProps {
    Component?: React.ReactNode;
    elements?: {};
    htmlSerializer?: HTMLSerializer<React.ReactNode>;
    linkResolver?: LinkResolver;
    render?: RichTextBlock[];
    renderAsText?: any;
    serializeHyperlink?: HTMLSerializer<React.ReactNode>;
  }

  export const RichText: React.FC<RichTextProps> & {
    asText: (input: RichTextBlock[]) => string;
    render: (input: RichTextBlock[]) => React.ReactNode;
    displayName: "RichText";
  };

  export type LinkResolver = (doc: any) => string;

  interface LinkProps {
    url(link: any, linkResolver?: LinkResolver): string;
  }

  export const Link: React.FC<LinkProps> & {
    url: (link: any, linkResolver?: LinkResolver) => string;
  };

  interface PrismicDate {
    (date?: string): Date;
  }

  export const Date: PrismicDate;
}
