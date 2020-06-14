# prismic-types

Typescript interfaces for Prismic content types and fields.

## Usage

1. Install the types

```bash
yarn add https://github.com/prismify-co/prismic-types
```

2. Add the types to your `tsconfig.json` file

```json
{
  // ...
  "typeRoots": ["@prismify/prismic-types"]
}
```

3) Use it!

```ts
type MySlice = IPrismicSlice<
  // Define the type
  "my_slice",
  // Define the primary fields (or use 'never' if no primary field exists)
  {
    my_title: IPrismicRichText;
  },
  // Define the repeatable fields (or use 'never' if no repeatable field exists)
  {
    my_image: IPrismicImage<"sm"> & IPrismicImage<"md"> & IPrismicImage<"lg">;
  }
>;

function MyComponent(props: MySlice) {
  //...
}
```

## Interfaces

```ts
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

interface IPrismicRichText {
  type?: string;
  text?: string;
  spans?: string[];
}

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

type IPrismicSelect<T = string> = T | "";

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
```
