# @platejs/markdown

## 49.2.1

### Patch Changes

- [#4518](https://github.com/udecode/plate/pull/4518) by [@felixfeng33](https://github.com/felixfeng33) – ### AI Streaming Improvements

  **@platejs/ai:**

  - Fixed empty paragraph removal logic in `streamInsertChunk` to only remove true empty paragraphs (no text content)
  - Enhanced streaming support for tables and columns with proper chunk insertion
  - Fixed interface name typo: `SteamInsertChunkOptions` → `StreamInsertChunkOptions`
  - Improved markdown streaming with better handling of incomplete patterns

  **@platejs/layout:**

  - Added streaming support for columns in `withColumn`
  - Fixed column width calculations to handle edge cases

  **@platejs/markdown:**

  - Enhanced column deserialization with proper attribute parsing
  - Added support for column groups in markdown rules
  - Improved attribute parsing in `customMdxDeserialize`

## 49.1.11

### Patch Changes

- [`c0857bf`](https://github.com/udecode/plate/commit/c0857bf9739f948c43a6f7fc603f81e02cccde95) by [@felixfeng33](https://github.com/felixfeng33) – Fix tests when custom headings

## 49.1.10

### Patch Changes

- [#4505](https://github.com/udecode/plate/pull/4505) by [@felixfeng33](https://github.com/felixfeng33) – Fix custom headings node type.

## 49.1.9

### Patch Changes

- [#4493](https://github.com/udecode/plate/pull/4493) by [@felixfeng33](https://github.com/felixfeng33) –
  - Fixed markdown serialization of indented lists when using custom paragraph node types. The serializer now correctly identifies custom paragraph nodes instead of only looking for the default 'p' type.

## 49.1.8

### Patch Changes

- [#4486](https://github.com/udecode/plate/pull/4486) by [@felixfeng33](https://github.com/felixfeng33) – Fix custom plugin key handling in markdown serialization/deserialization. Ensures plugin keys are properly resolved throughout the conversion process for custom plugin configurations.

## 49.1.6

### Patch Changes

- [#4468](https://github.com/udecode/plate/pull/4468) by [@felixfeng33](https://github.com/felixfeng33) – Add support for [display text](mention:id) markdown format for mentions

  - Updated `remarkMention` plugin to only support the `[display text](mention:id)` format
  - Dropped support for legacy `@username` format
  - Mentions now require an explicit display text and ID structure
  - Enables full names, spaces, and special characters in mention display text

## 49.0.17

### Patch Changes

- [#4440](https://github.com/udecode/plate/pull/4440) by [@zbeyens](https://github.com/zbeyens) – Added `spread` option to control list spacing in markdown serialization.

  Added a new optional `spread` property to `SerializeMdOptions`:

  - When `spread` is `false` (default), lists are rendered compactly
  - When `spread` is `true`, lists have double line breaks between items

  Before (default):

  ```markdown
  1. Item 1
  2. Item 2
  ```

  After (with `spread: true`):

  ```markdown
  1. Item 1

  2. Item 2
  ```

## 49.0.14

### Patch Changes

- [#4420](https://github.com/udecode/plate/pull/4420) by [@felixfeng33](https://github.com/felixfeng33) – Added support for custom node types in markdown serialization and deserialization

## 49.0.12

### Patch Changes

- [#4416](https://github.com/udecode/plate/pull/4416) by [@zbeyens](https://github.com/zbeyens) –

  - Fixed an issue where empty paragraphs were lost during markdown serialization and deserialization. Empty paragraphs are now preserved using zero-width spaces (`\u200B`) internally.

    ```ts
    // Before: Empty paragraphs would disappear
    const markdown = serializeMd(editor); // "Text\n\nMore text" → "Text\nMore text"

    // After: Empty paragraphs are preserved
    const markdown = serializeMd(editor); // "Text\n\nMore text" → "Text\n\nMore text"
    ```

  - Added `preserveEmptyParagraphs` option to control this behavior (defaults to `true`)

## 49.0.0

### Major Changes

- [#4327](https://github.com/udecode/plate/pull/4327) by [@zbeyens](https://github.com/zbeyens) –

  - Function `indentListToMdastTree` has been renamed to `listToMdastTree` to align with the list plugin renames (`IndentListPlugin` -> `ListPlugin`).

- [#4327](https://github.com/udecode/plate/pull/4327) by [@zbeyens](https://github.com/zbeyens) –
  - Renamed all `@udecode/plate-*` packages to `@platejs/*`. Replace `@udecode/plate-` with `@platejs/` in your code.

# @udecode/plate-markdown

## 48.0.2

### Patch Changes

- [#4288](https://github.com/udecode/plate/pull/4288) by [@felixfeng33](https://github.com/felixfeng33) – Added support for `subscript`, `superscript`, `date`, `callout`, `font`.

  Replaced dependency on `zeed-dom` with `remark-mdx` for more robust MDX tag generation.

  Add `splitIncompleteMdx` to separate the complete and the incomplete mdx string.

## 48.0.0

## 47.4.1

### Patch Changes

- [#4269](https://github.com/udecode/plate/pull/4269) by [@felixfeng33](https://github.com/felixfeng33) – If `deserializeMd` returns an inline element, wrap it with a paragraph

## 47.3.1

### Patch Changes

- [#4267](https://github.com/udecode/plate/pull/4267) by [@zbeyens](https://github.com/zbeyens) – Update deps

## 47.2.6

### Patch Changes

- [#4258](https://github.com/udecode/plate/pull/4258) by [@felixfeng33](https://github.com/felixfeng33) – Fix #4256

## 47.2.4

### Patch Changes

- [#4250](https://github.com/udecode/plate/pull/4250) by [@martin-lysk](https://github.com/martin-lysk) – Fixes serialization of nested formatting of inlineCode blocks like
  ```
  `code`**`boldCode`**`code`
  ```

## 47.2.2

### Patch Changes

- [#4245](https://github.com/udecode/plate/pull/4245) by [@martin-lysk](https://github.com/martin-lysk) – fixes serialization of code_blocks created in plate editor

## 47.2.1

### Patch Changes

- [#4224](https://github.com/udecode/plate/pull/4224) by [@martin-lysk](https://github.com/martin-lysk) – Fix overlapping inline formatting

- [#4243](https://github.com/udecode/plate/pull/4243) by [@martin-lysk](https://github.com/martin-lysk) – Fix formatted empty paragraph

## 47.2.0

### Minor Changes

- [#4236](https://github.com/udecode/plate/pull/4236) by [@felixfeng33](https://github.com/felixfeng33) –

  - Added fallback handling for unsupported MDX tags to gracefully preserve content
  - Now remarkMdx is exported directly from the `@udecode/plate-markdown` package instead of importing from `remark-mdx`
  - New `onError` option in `DeserializeMdOptions` to handle and catch MDX parsing errors

## 47.1.2

### Patch Changes

- [#4234](https://github.com/udecode/plate/pull/4234) by [@felixfeng33](https://github.com/felixfeng33) – Add deserialize rule for `<kbd />` tag

## 47.1.1

### Patch Changes

- [`222408d`](https://github.com/udecode/plate/commit/222408dd6aeeb10debc22566f27fd2fb1ac28975) by [@felixfeng33](https://github.com/felixfeng33) – Add `deserializeInlineMd` to `editor.api.markdown.deserializeInlineMd`.

  Add `footnoteDefinition` to `defaultRules`

## 47.0.7

### Patch Changes

- [#4216](https://github.com/udecode/plate/pull/4216) by [@martin-lysk](https://github.com/martin-lysk) – linebreaks (soft linebreaks and paragraphs) are serialized and deserialized differently now

## 47.0.6

### Patch Changes

- [#4215](https://github.com/udecode/plate/pull/4215) by [@martin-lysk](https://github.com/martin-lysk) – removes lodash dependency

- [#4214](https://github.com/udecode/plate/pull/4214) by [@felixfeng33](https://github.com/felixfeng33) – Make remarkMention plugin optional.

## 47.0.5

### Patch Changes

- [#4200](https://github.com/udecode/plate/pull/4200) by [@martin-lysk](https://github.com/martin-lysk) – fixes blockquote serialization/deserialization, adds break deserialization

- [#4211](https://github.com/udecode/plate/pull/4211) by [@martin-lysk](https://github.com/martin-lysk) – adds explicit spread false to lists to have a less noisy serialization

## 47.0.4

### Patch Changes

- [#4208](https://github.com/udecode/plate/pull/4208) by [@felixfeng33](https://github.com/felixfeng33) – Add missing options to `deserializeInlineMd`

## 47.0.3

### Patch Changes

- [#4204](https://github.com/udecode/plate/pull/4204) by [@felixfeng33](https://github.com/felixfeng33) – Add support for deserializing @username strings into Plate mention nodes.

## 47.0.1

### Patch Changes

- [#4201](https://github.com/udecode/plate/pull/4201) by [@felixfeng33](https://github.com/felixfeng33) – Support for GitHub Flavored Markdown del, fix task list during deserialization

## 47.0.0

### Major Changes

- [#4174](https://github.com/udecode/plate/pull/4174) by [@felixfeng33](https://github.com/felixfeng33) – #### New Features

  - Added support for math type deserialization
  - Added default underline mark serialization as `<u>underline</u>`
  - Improved serialization process:
    - Now uses a two-step process: `slate nodes => MDAST nodes => markdown string`
    - Previously: direct conversion from Slate nodes to markdown string
    - Results in more reliable and robust serialization
  - New node filtering options:
    - `allowedNodes`: Whitelist specific nodes
    - `disallowedNodes`: Blacklist specific nodes
    - `allowNode`: Custom function to filter nodes
  - New `rules` option for customizing serialization and deserialization rules, including **custom mdx** support
  - New `remarkPlugins` option to use [remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins)

  #### Breaking Changes

  **Plugin Options**

  Removed options:

  - `elementRules` use `rules` instead
  - `textRules` use `rules` instead
  - `indentList` now automatically detects if the IndentList plugin is used
  - `splitLineBreaks` deserialize only

  ##### Deserialization

  - Removed `elementRules` and `textRules` options
    - Use `rules.key.deserialize` instead
    - See [nodes documentation](https://platejs.org/docs/markdown)

  Example migration:

  ```tsx
  export const markdownPlugin = MarkdownPlugin.configure({
    options: {
      disallowedNodes: [SuggestionPlugin.key],
      rules: {
        // For textRules
        [BoldPlugin.key]: {
          mark: true,
          deserialize: (mdastNode) => ({
            bold: true,
            text: node.value || '',
          }),
        },
        // For elementRules
        [EquationPlugin.key]: {
          deserialize: (mdastNode, options) => ({
            children: [{ text: '' }],
            texExpression: node.value,
            type: EquationPlugin.key,
          }),
        },
      },
      remarkPlugins: [remarkMath, remarkGfm],
    },
  });
  ```

  - Removed processor in `editor.api.markdown.deserialize`
    - Use `remarkPlugins` instead

  ##### Serialization

  - Removed `serializeMdNodes`
    - Use `editor.markdown.serialize({ value: nodes })` instead
  - Removed `SerializeMdOptions` due to new serialization process
    - Previous process: `slate nodes => md`
    - New process: `slate nodes => md-ast => md`
  - Removed options:
    - `nodes`
    - `breakTag`
    - `customNodes`
    - `ignoreParagraphNewline`
    - `listDepth`
    - `markFormats`
    - `ulListStyleTypes`
    - `ignoreSuggestionType`

  Migration example for `SerializeMdOptions.customNodes` and `SerializeMdOptions.nodes`:

  ```tsx
  export const markdownPlugin = MarkdownPlugin.configure({
    options: {
      rules: {
        // Ignore all `insert` type suggestions
        [SuggestionPlugin.key]: {
          mark: true,
          serialize: (slateNode: TSuggestionText, options): mdast.Text => {
            const suggestionData = options.editor
              .getApi(SuggestionPlugin)
              .suggestion.suggestionData(node);

            return suggestionData?.type === 'insert'
              ? { type: 'text', value: '' }
              : { type: 'text', value: node.text };
          },
        },
        // For elementRules
        [EquationPlugin.key]: {
          serialize: (slateNode) => ({
            type: 'math',
            value: node.texExpression,
          }),
        },
      },
      remarkPlugins: [remarkMath, remarkGfm],
    },
  });
  ```

## 46.0.8

### Patch Changes

- [#4153](https://github.com/udecode/plate/pull/4153) by [@martin-lysk](https://github.com/martin-lysk) – fixes empty value detection

- [#4152](https://github.com/udecode/plate/pull/4152) by [@martin-lysk](https://github.com/martin-lysk) – fixes indentList for root level lists

- [#4156](https://github.com/udecode/plate/pull/4156) by [@martin-lysk](https://github.com/martin-lysk) – Fixes nodes option in serialize function

## 46.0.3

### Patch Changes

- [#4130](https://github.com/udecode/plate/pull/4130) by [@felixfeng33](https://github.com/felixfeng33) – Add `ignoreSuggestionType` to default retain the original document content, excluding the content after "suggestion."

## 45.0.4

### Patch Changes

- [#3998](https://github.com/udecode/plate/pull/3998) by [@felixfeng33](https://github.com/felixfeng33) – Fix serialize code-block and indent-list. Add support for equation and inline-equation.

## 44.0.0

## 43.0.0

## 42.0.3

### Patch Changes

- [#3952](https://github.com/udecode/plate/pull/3952) by [@zbeyens](https://github.com/zbeyens) –
  - `editor.api.markdown.deserialize`:
    - Improve support for indented lists: nested lists, mixed ordered and unordered lists
    - Fix: markdown codeblock without language should not set `lang: undefined` to the node
    - Add options:
      - `memoize`: Enable block-level memoization with `_memo` property, so it is compatible with `PlateStatic` memoization.
      - `parse`: Filter out specific markdown token types (e.g. 'space')
      - `processor`: Customize the markdown processor
  - Add `parseMarkdownBlocks`: Extract and filter markdown tokens using marked lexer
  - Fix `editor.api.markdown.serialize` indenting should be 3 spaces instead of 2.

## 42.0.0

## 41.0.14

### Patch Changes

- [#3924](https://github.com/udecode/plate/pull/3924) by [@cwooldridge1](https://github.com/cwooldridge1) – fix: markdown parser ordered list numbering

- [#3924](https://github.com/udecode/plate/pull/3924) by [@cwooldridge1](https://github.com/cwooldridge1) – fix: markdown parser ordered list numbering

## 41.0.0

## 40.2.2

### Patch Changes

- [#3679](https://github.com/udecode/plate/pull/3679) by [@natamox](https://github.com/natamox) – Split line breaks into separate paragraphs during Markdown deserialization

## 40.0.5

### Patch Changes

- [`c7a030e31590f558b63685040df55a8d9d6a79bb`](https://github.com/udecode/plate/commit/c7a030e31590f558b63685040df55a8d9d6a79bb) by [@zbeyens](https://github.com/zbeyens) – Support deserializing tables

## 40.0.4

### Patch Changes

- [#3764](https://github.com/udecode/plate/pull/3764) by [@abhi-bc](https://github.com/abhi-bc) – fix: [add strikethrough support to deserializeMd](https://github.com/udecode/plate/issues/3733)

## 40.0.0

### Minor Changes

- [#3744](https://github.com/udecode/plate/pull/3744) by [@zbeyens](https://github.com/zbeyens) –
  - `api.markdown.deserialize`: add second argument option: `processor?: (processor: Processor) => Processor`. You could use this to add other remark plugins like `remark-gfm`.
  - Add `delete` text rule. This does not add support for strikethrough yet.

## 39.2.0

### Minor Changes

- [#3644](https://github.com/udecode/plate/pull/3644) by [@felixfeng33](https://github.com/felixfeng33) – Add `deserializeInlineMd`, `serializeInlineMd`, `stripMarkdownBlocks`, `stripMarkdownInline`

## 39.1.5

### Patch Changes

- [#3619](https://github.com/udecode/plate/pull/3619) by [@zbeyens](https://github.com/zbeyens) – Critical fix(`deserializeMd`): input `>`, `>>`, `>>>` should be deserialized to a single `blockquote` with empty text node.

## 39.0.0

## 38.0.13

### Patch Changes

- [#3591](https://github.com/udecode/plate/pull/3591) by [@depressedX](https://github.com/depressedX) – Fix @udecode/plate-markdown deserializing list with indented block element

## 38.0.1

### Patch Changes

- [#3526](https://github.com/udecode/plate/pull/3526) by [@zbeyens](https://github.com/zbeyens) – Upgrade `unified`

## 38.0.0

## 37.0.0

### Major Changes

- [#3420](https://github.com/udecode/plate/pull/3420) by [@zbeyens](https://github.com/zbeyens) –
  - `createDeserializeMdPlugin` -> `MarkdownPlugin`

## 36.4.0

### Patch Changes

- [`8342b6c2f333ee445c8b6be7e864857fd2a2584a`](https://github.com/udecode/plate/commit/8342b6c2f333ee445c8b6be7e864857fd2a2584a) by [@zbeyens](https://github.com/zbeyens) – fix(serializer-md): invalid condition for ignoreParagraphNewLine

## 36.0.7

### Patch Changes

- [#3359](https://github.com/udecode/plate/pull/3359) by [@12joan](https://github.com/12joan) – Replace potentially inefficient RegExp with String.trim()

## 36.0.0

## 34.0.0

## 33.0.0

### Major Changes

- [#3125](https://github.com/udecode/plate/pull/3125) by [@zbeyens](https://github.com/zbeyens) –
  - `serializeMd`: remove `nodes` option. `editor.children` is now serialized.

### Minor Changes

- [#3125](https://github.com/udecode/plate/pull/3125) by [@zbeyens](https://github.com/zbeyens) –

  - Fixes #2716
  - Fixes #2858
  - Add default support for indent lists.
  - Improved new lines around heading.
  - Trim new lines.
  - Add `serializeMdNodes`: serialize nodes to markdown without editor.
  - Add options enabling much more control over the serialization:

  ```ts
  type SerializeMdNodeOptions = {
    /**
     * Whether the node is enabled. If false, the node will be considered as
     * paragraph.
     */
    enabled?: boolean;

    isLeaf?: boolean;

    /**
     * Whether the node is void. Required for empty void nodes to not be skipped.
     * Default is true for `hr` and `img` nodes
     */
    isVoid?: boolean;

    /** Serialize node to markdown. */
    serialize?: (
      children: string,
      node: MdNodeType,
      opts: SerializeMdOptions
    ) => string;

    /** Whether the node should be skipped (serialized to empty string). */
    skip?: boolean;

    /** The type of the node. */
    type: string;
  };
  /** @default Options for each node type. */
  {
    /** @default Options for each node type. */
    nodes: Record<keyof MdNodeTypes, SerializeMdNodeOptions>;

    /**
     * Tag to use for line breaks.
     *
     * @default '<br>'
     */
    breakTag?: string;

    /** Custom nodes to serialize. */
    customNodes?: Record<string, SerializeMdNodeOptions>;

    ignoreParagraphNewline?: boolean;

    listDepth?: number;

    /**
     * Format for underline.
     *
     * @example
     *   {
     *     "underline": ["<u>", "</u>"]
     *   }
     */
    markFormats?: Partial<MarkFormats>;

    /**
     * List of unordered list style types (when using indent list).
     *
     * @default ['disc', 'circle', 'square']
     */
    ulListStyleTypes?: string[];
  }
  ```

  - Remove plugin dependencies.
  - Remove `nodeTypes` option in favor of `nodes`.

## 32.0.0

## 31.4.3

## 31.4.0

### Patch Changes

- [#3118](https://github.com/udecode/plate/pull/3118) by [@felixfeng33](https://github.com/felixfeng33) – Missing exports

## 31.3.4

## 31.3.0

### Minor Changes

- [#3076](https://github.com/udecode/plate/pull/3076) by [@dimaanj](https://github.com/dimaanj) – Add `serializeMd`

## 31.1.3

## 31.0.0

## 30.9.4

## 30.9.2

## 30.7.0

## 30.5.3

### Patch Changes

- [`4cbed7159`](https://github.com/udecode/plate/commit/4cbed7159d51f7427051686e45bcf2a8899aeede) by [@zbeyens](https://github.com/zbeyens) – Move `@udecode/plate-common` to peerDeps to fix a bug when multiple instances were installed

## 30.5.2

## 30.4.5

## 30.2.1

### Patch Changes

- [#2885](https://github.com/udecode/plate/pull/2885) by [@FranciscoMoretti](https://github.com/FranciscoMoretti) – Fix(deserialize md): support empty list item

## 30.1.2

## 30.0.0

## 29.1.0

### Minor Changes

- [#2856](https://github.com/udecode/plate/pull/2856) by [@FranciscoMoretti](https://github.com/FranciscoMoretti) – New option in markdown deserializer plugin: `indentList?: boolean`. Set it to true if you're using Indent List plugin instead of the List plugin.

## 29.0.1

## 29.0.0

## 28.0.0

## 27.0.3

## 27.0.0

## 26.0.4

## 25.0.1

## 25.0.0

## 24.5.2

## 24.5.1

## 24.4.3

## 24.4.0

### Minor Changes

- [#2675](https://github.com/udecode/plate/pull/2675) by [@zbeyens](https://github.com/zbeyens) – Support slate-react 0.99.0

## 24.3.6

## 24.3.5

## 24.3.3

### Patch Changes

- [`f47fdba0`](https://github.com/udecode/plate/commit/f47fdba049c363d6a441c6bc7bab12b4e1267929) by [@zbeyens](https://github.com/zbeyens) – fix types

## 24.3.2

## 24.3.1

## 24.3.0

## 24.2.0

## 24.0.2

## 24.0.1

## 24.0.0

## 23.7.4

## 23.7.2

## 23.7.0

## 23.6.0

## 23.5.0

## 23.4.0

## 23.3.1

## 23.3.0

## 23.2.0

## 22.0.2

## 22.0.1

## 22.0.0

## 21.5.0

## 21.4.2

## 21.4.1

## 21.4.0

## 21.3.2

## 21.3.0

## 21.2.0

## 21.1.5

## 21.0.0

## 20.7.2

## 20.7.0

## 20.4.1

## 20.4.0

## 20.3.2

## 20.0.0

## 19.7.0

## 19.5.0

## 19.4.4

## 19.4.3

## 19.4.2

## 19.4.1

## 19.4.0

### Minor Changes

- [#2175](https://github.com/udecode/plate/pull/2175) by [@12joan](https://github.com/12joan) –
  - Plugin can now be customised using `elementRules` and `textRules` options
  - Various fixes

## 19.3.0

## 19.2.0

## 19.1.1

## 19.1.0

## 19.0.6

### Patch Changes

- [#2124](https://github.com/udecode/plate/pull/2124) by [@zbeyens](https://github.com/zbeyens) – Fix: Revert "Remove unnecessary query in deserialize markdown" to fix internal slate copy/pasting

## 19.0.5

### Patch Changes

- [#2115](https://github.com/udecode/plate/pull/2115) by [@neko-neko](https://github.com/neko-neko) – Fix markdown string to Node conversion process not working properly in markdown string pasting.

## 19.0.3

## 19.0.1

## 19.0.0

## 18.15.0

## 18.13.0

## 18.12.2

### Patch Changes

- [#2032](https://github.com/udecode/plate/pull/2032) by [@neko-neko](https://github.com/neko-neko) – Fixed deserialization for markdown.

## 18.11.0

## 18.10.1

## 18.9.2

## 18.9.1

## 18.9.0

## 18.8.1

## 18.7.0

## 18.6.0

## 18.2.0

## 18.1.1

## 18.1.0

## 17.0.3

## 17.0.2

## 17.0.1

## 17.0.0

## 16.9.1

## 16.9.0

## 16.8.0

## 16.6.1

## 16.5.0

## 16.4.2

## 16.4.1

## 16.3.0

## 16.2.2

## 16.2.1

## 16.2.0

## 16.1.0

## 16.0.2

## 16.0.0

## 15.0.6

## 15.0.5

## 15.0.3

## 15.0.1

## 15.0.0

## 14.4.3

## 14.4.2

## 14.4.1

## 14.4.0

## 14.1.0

## 14.0.2

## 14.0.0

## 13.8.0

## 13.7.0

## 13.6.0

## 13.5.0

## 13.3.1

## 13.1.0

## 11.2.1

## 11.2.0

## 11.1.0

## 11.0.6

## 11.0.5

## 11.0.4

## 11.0.3

## 11.0.2

## 11.0.1

## 11.0.0

### Minor Changes

- [#1500](https://github.com/udecode/plate/pull/1500) by [@zbeyens](https://github.com/zbeyens) – updated deps:
  ```bash
  "remark-slate": "^1.8.6",
  "unified": "^9.2.1"
  ```

## 10.6.0

### Minor Changes

- [#1482](https://github.com/udecode/plate/pull/1482) by [@108EAA0A](https://github.com/108EAA0A) – Deserialization of markdown horizontal rule

## 10.5.3

## 10.5.2

## 10.5.0

## 10.4.2

## 10.4.1

## 10.4.0

## 10.2.2

## 10.2.1

## 10.1.2

## 10.1.1

## 10.1.0

## 10.0.0

## 9.3.1

## 9.3.0

## 9.2.1

## 9.2.0

## 9.0.0

## 8.3.0

## 8.1.0

## 8.0.0

### Major Changes

- [#1234](https://github.com/udecode/plate/pull/1234) by [@zbeyens](https://github.com/zbeyens) –

  - `createDeserializeMdPlugin`:
    - is now disabled if there is html data in the data transfer.

  Renamed:

  - `createDeserializeMDPlugin` to `createDeserializeMdPlugin`
  - `deserializeMD` to `deserializeMd`

## 7.0.2

## 7.0.1

## 7.0.0

## 6.4.1

## 6.4.0

## 6.3.0

## 6.2.0

## 6.1.0

## 6.0.0

## 5.3.5

### Patch Changes

- Updated dependencies [[`3718c6d1`](https://github.com/udecode/plate/commit/3718c6d1abe1af8a94b41e9debef0cb5301d051c), [`a6bf8c5e`](https://github.com/udecode/plate/commit/a6bf8c5e6897c6ab443e0ac3d69a30befeaddadf), [`25dcad65`](https://github.com/udecode/plate/commit/25dcad654b8297a50c905cc427a59e68c0ff8093)]:
  - @udecode/plate-list@5.3.5
  - @udecode/plate-common@5.3.5
  - @udecode/plate-code-block@5.3.5
  - @udecode/plate-block-quote@5.3.5
  - @udecode/plate-heading@5.3.5
  - @udecode/plate-link@5.3.5
  - @udecode/plate-paragraph@5.3.5
  - @udecode/plate-serializer@5.3.5

## 5.3.4

### Patch Changes

- Updated dependencies [[`f45ed8cf`](https://github.com/udecode/plate/commit/f45ed8cff140a604169bfa0d042447a8fd0236ed), [`9b61b9d5`](https://github.com/udecode/plate/commit/9b61b9d5a631c9b0e14dfd081f70a633a3c0b436), [`a574a753`](https://github.com/udecode/plate/commit/a574a7537f7a4a25bb6a527a08ad6698da1dc7b1)]:
  - @udecode/plate-serializer@5.3.4
  - @udecode/plate-code-block@5.3.4

## 5.3.3

### Patch Changes

- [#1141](https://github.com/udecode/plate/pull/1141) [`cff2a6a0`](https://github.com/udecode/plate/commit/cff2a6a0dea34dae0beea9e5d5001c494d8435fe) Thanks [@dylans](https://github.com/dylans)! - fix typo in markdown deserializer

## 5.3.1

### Patch Changes

- [#1136](https://github.com/udecode/plate/pull/1136) [`8aec270f`](https://github.com/udecode/plate/commit/8aec270f8b06a3b25b8d7144c2e23b0dc12de118) Thanks [@dylans](https://github.com/dylans)! - allow disabling deserializer by paste target

- Updated dependencies [[`8aec270f`](https://github.com/udecode/plate/commit/8aec270f8b06a3b25b8d7144c2e23b0dc12de118)]:
  - @udecode/plate-core@5.3.1
  - @udecode/plate-code-block@5.3.1
  - @udecode/plate-serializer@5.3.1
  - @udecode/plate-common@5.3.1
  - @udecode/plate-block-quote@5.3.1
  - @udecode/plate-heading@5.3.1
  - @udecode/plate-link@5.3.1
  - @udecode/plate-list@5.3.1
  - @udecode/plate-paragraph@5.3.1

## 5.3.0

### Patch Changes

- Updated dependencies [[`7ee21356`](https://github.com/udecode/plate/commit/7ee21356f0a4e67e367232b3dbc9957254a0c11e), [`5c68eb04`](https://github.com/udecode/plate/commit/5c68eb04b5f528d08d45a4f994ef8c1d7924ab33)]:
  - @udecode/plate-core@5.3.0
  - @udecode/plate-code-block@5.3.0
  - @udecode/plate-common@5.3.0
  - @udecode/plate-block-quote@5.3.0
  - @udecode/plate-heading@5.3.0
  - @udecode/plate-link@5.3.0
  - @udecode/plate-list@5.3.0
  - @udecode/plate-paragraph@5.3.0
  - @udecode/plate-serializer@5.3.0

## 5.1.0

### Patch Changes

- Updated dependencies [[`503956fd`](https://github.com/udecode/plate/commit/503956fd9f71253249b3ad699b81c1c465351b0a), [`503956fd`](https://github.com/udecode/plate/commit/503956fd9f71253249b3ad699b81c1c465351b0a)]:
  - @udecode/plate-list@5.1.0
  - @udecode/plate-common@5.1.0
  - @udecode/plate-block-quote@5.1.0
  - @udecode/plate-code-block@5.1.0
  - @udecode/plate-heading@5.1.0
  - @udecode/plate-link@5.1.0
  - @udecode/plate-paragraph@5.1.0
  - @udecode/plate-serializer@5.1.0

## 4.4.0

### Patch Changes

- Updated dependencies [[`c353b008`](https://github.com/udecode/plate/commit/c353b0085804fa9099f0c18405ca01b0b25da03a), [`7c32d4ef`](https://github.com/udecode/plate/commit/7c32d4efc0e84f6e2878473a3dd0efad3740ba9e), [`b22c06aa`](https://github.com/udecode/plate/commit/b22c06aad1cfed08069dadc7ec39bcbfb1d0af37)]:
  - @udecode/plate-list@4.4.0
  - @udecode/plate-code-block@4.4.0
  - @udecode/plate-common@4.4.0
  - @udecode/plate-block-quote@4.4.0
  - @udecode/plate-heading@4.4.0
  - @udecode/plate-link@4.4.0
  - @udecode/plate-paragraph@4.4.0
  - @udecode/plate-serializer@4.4.0

## 4.3.7

### Patch Changes

- Updated dependencies [[`58f6fb53`](https://github.com/udecode/plate/commit/58f6fb53bf45a2e0509f4aca617aa21356952fca)]:
  - @udecode/plate-core@4.3.7
  - @udecode/plate-common@4.3.7
  - @udecode/plate-block-quote@4.3.7
  - @udecode/plate-code-block@4.3.7
  - @udecode/plate-heading@4.3.7
  - @udecode/plate-link@4.3.7
  - @udecode/plate-list@4.3.7
  - @udecode/plate-paragraph@4.3.7
  - @udecode/plate-serializer@4.3.7

## 4.3.5

### Patch Changes

- Updated dependencies [[`8525af01`](https://github.com/udecode/plate/commit/8525af01b2ca705665bad3ada73b8e906620dad8)]:
  - @udecode/plate-code-block@4.3.5

## 4.3.1

### Patch Changes

- Updated dependencies [[`a692c078`](https://github.com/udecode/plate/commit/a692c078f9386ebb63aea9cb704decf554b07e8e)]:
  - @udecode/plate-code-block@4.3.1

## 4.3.0

### Patch Changes

- Updated dependencies [[`7b892a59`](https://github.com/udecode/plate/commit/7b892a59f27bdaa81c90097534c411cc80b92e8a), [`6af469cd`](https://github.com/udecode/plate/commit/6af469cd5ac310e831eb8a99a71eba73bde62fc6)]:
  - @udecode/plate-code-block@4.3.0
  - @udecode/plate-core@4.3.0
  - @udecode/plate-common@4.3.0
  - @udecode/plate-block-quote@4.3.0
  - @udecode/plate-heading@4.3.0
  - @udecode/plate-link@4.3.0
  - @udecode/plate-list@4.3.0
  - @udecode/plate-paragraph@4.3.0
  - @udecode/plate-serializer@4.3.0

## 4.2.0

### Patch Changes

- Updated dependencies [[`87cca4a0`](https://github.com/udecode/plate/commit/87cca4a0894b512a8257257570952e827924c13b), [`6fe49e22`](https://github.com/udecode/plate/commit/6fe49e22e51b5fbec8695629e77ab149d80ce4cb)]:
  - @udecode/plate-list@4.2.0

## 4.1.0

### Patch Changes

- Updated dependencies [[`eb30aa5d`](https://github.com/udecode/plate/commit/eb30aa5d355abb81bc3e8577fedb3800e1b056aa)]:
  - @udecode/plate-list@4.1.0

## 4.0.0

### Patch Changes

- Updated dependencies [[`22da824e`](https://github.com/udecode/plate/commit/22da824e9acea62cbd9073a150b543348a1b128b)]:
  - @udecode/plate-link@4.0.0

## 3.5.1

### Patch Changes

- Updated dependencies [[`b758cfb6`](https://github.com/udecode/plate/commit/b758cfb6ea955ab4d054c0873ab632aaf1c3e866), [`0db393e1`](https://github.com/udecode/plate/commit/0db393e1cebec792c89a633cb8929a0786943713)]:
  - @udecode/plate-list@3.5.1
  - @udecode/plate-serializer@3.5.1

## 3.5.0

### Patch Changes

- Updated dependencies [[`7ab01674`](https://github.com/udecode/plate/commit/7ab016745c5eddcf4daa73bbc1958f087d0c4b90)]:
  - @udecode/plate-link@3.5.0

## 3.4.0

### Patch Changes

- Updated dependencies [[`f1da7267`](https://github.com/udecode/plate/commit/f1da7267d46d94e207f4477f73e42b63736a9085), [`35caf35d`](https://github.com/udecode/plate/commit/35caf35d48fff851518648ff66e64a4268dcc97c)]:
  - @udecode/plate-common@3.4.0
  - @udecode/plate-core@3.4.0
  - @udecode/plate-block-quote@3.4.0
  - @udecode/plate-code-block@3.4.0
  - @udecode/plate-heading@3.4.0
  - @udecode/plate-link@3.4.0
  - @udecode/plate-list@3.4.0
  - @udecode/plate-paragraph@3.4.0
  - @udecode/plate-serializer@3.4.0

## 3.2.1

### Patch Changes

- Updated dependencies [[`baddeb11`](https://github.com/udecode/plate/commit/baddeb117c1a13451f7f4da271ea441fafe3c02d)]:
  - @udecode/plate-list@3.2.1

## 3.2.0

### Minor Changes

- [#995](https://github.com/udecode/plate/pull/995) [`58387c6d`](https://github.com/udecode/plate/commit/58387c6d34e86be7880999b40a9105b6178f4ce4) Thanks [@dylans](https://github.com/dylans)! - update slate dependencies and peerDependencies to 0.66.\*

### Patch Changes

- [#996](https://github.com/udecode/plate/pull/996) [`8662815f`](https://github.com/udecode/plate/commit/8662815f8c714ba9efb8cc6772bb675ea075332b) Thanks [@dylans](https://github.com/dylans)! - add additional nodeTypes to markdown deserializer

- Updated dependencies [[`3a590663`](https://github.com/udecode/plate/commit/3a5906637b008e85a6d907a7492a78fe9961bf34), [`58387c6d`](https://github.com/udecode/plate/commit/58387c6d34e86be7880999b40a9105b6178f4ce4), [`5eb42cdd`](https://github.com/udecode/plate/commit/5eb42cdd47db4fd41936420b86b0bf7df9a8aa09)]:
  - @udecode/plate-serializer@3.2.0
  - @udecode/plate-common@3.2.0
  - @udecode/plate-core@3.2.0
  - @udecode/plate-block-quote@3.2.0
  - @udecode/plate-code-block@3.2.0
  - @udecode/plate-heading@3.2.0
  - @udecode/plate-link@3.2.0
  - @udecode/plate-list@3.2.0
  - @udecode/plate-paragraph@3.2.0

## 3.1.3

### Patch Changes

- Updated dependencies [[`f6c58134`](https://github.com/udecode/plate/commit/f6c581347cc5877b7afa0774ef1ad78ad227564e), [`d73b22d0`](https://github.com/udecode/plate/commit/d73b22d03a0fc270265cbd1bdecfcc4adc70b9d8)]:
  - @udecode/plate-common@3.1.3
  - @udecode/plate-list@3.1.3
  - @udecode/plate-block-quote@3.1.3
  - @udecode/plate-code-block@3.1.3
  - @udecode/plate-heading@3.1.3
  - @udecode/plate-link@3.1.3
  - @udecode/plate-paragraph@3.1.3
  - @udecode/plate-serializer@3.1.3

## 3.1.2

### Patch Changes

- Updated dependencies [[`2906a0a4`](https://github.com/udecode/plate/commit/2906a0a45fa00b38a1e71ed8e3c57203f429db4d)]:
  - @udecode/plate-list@3.1.2

## 3.0.5

### Patch Changes

- [#974](https://github.com/udecode/plate/pull/974) [`7cffccb2`](https://github.com/udecode/plate/commit/7cffccb29aa1a1ab00e29b12c48c486b67d3c873) Thanks [@dylans](https://github.com/dylans)! - markdown deserializer was favoring URL over files when pasting content

## 3.0.4

### Patch Changes

- Updated dependencies [[`46398095`](https://github.com/udecode/plate/commit/4639809567e4c96d58912c2a16e74948474d4547)]:
  - @udecode/plate-list@3.0.4

## 2.0.0

### Patch Changes

- Updated dependencies [[`ec4d5b7b`](https://github.com/udecode/plate/commit/ec4d5b7bd01b6fd21ba14a28f782c143d32c7532)]:
  - @udecode/plate-common@2.0.0
  - @udecode/plate-block-quote@2.0.0
  - @udecode/plate-code-block@2.0.0
  - @udecode/plate-heading@2.0.0
  - @udecode/plate-link@2.0.0
  - @udecode/plate-list@2.0.0
  - @udecode/plate-paragraph@2.0.0
  - @udecode/plate-serializer@2.0.0

## 1.1.8

### Patch Changes

- Updated dependencies [[`a3825e35`](https://github.com/udecode/plate/commit/a3825e3556e9980b8cce39d454aa4d3c8ea78586)]:
  - @udecode/plate-list@1.1.8

## 1.1.6

### Patch Changes

- Updated dependencies [[`7d045d8d`](https://github.com/udecode/plate/commit/7d045d8db39515d4574c5313cc97287486c5866b)]:
  - @udecode/plate-common@1.1.6
  - @udecode/plate-block-quote@1.1.6
  - @udecode/plate-code-block@1.1.6
  - @udecode/plate-heading@1.1.6
  - @udecode/plate-link@1.1.6
  - @udecode/plate-list@1.1.6
  - @udecode/plate-paragraph@1.1.6
  - @udecode/plate-serializer@1.1.6

## 1.0.0

### Major Changes

🎉 The **Slate Plugins** project has evolved to **Plate** 🎉

To migrate, install `@udecode/plate[-x]` then find and replace all
occurrences of:

- `slate-plugins` to `plate`
- `SlatePlugins` to `Plate`
- `SlatePlugin` to `PlatePlugin`

## 1.0.0-next.61

> This is the last version of `@udecode/slate-plugins[-x]`, please install
> `@udecode/plate[-x]`.

### Major Changes

- [#869](https://github.com/udecode/slate-plugins/pull/869) [`fd91359d`](https://github.com/udecode/slate-plugins/commit/fd91359dc3722292cee06e0f80ed414934b27572) Thanks [@zbeyens](https://github.com/zbeyens)! - Removed `getFragment` and `insert` option in favor of the new plugin options.

### Patch Changes

- Updated dependencies [[`546ee49b`](https://github.com/udecode/slate-plugins/commit/546ee49b1e22464a8a0c0fad7f254da85bcfde3d), [`7c26cf32`](https://github.com/udecode/slate-plugins/commit/7c26cf32e8b501d531c6d823ab55bf361e228bc3)]:
  - @udecode/slate-plugins-serializer@1.0.0-next.61
  - @udecode/slate-plugins-core@1.0.0-next.61
  - @udecode/slate-plugins-common@1.0.0-next.61
  - @udecode/slate-plugins-block-quote@1.0.0-next.61
  - @udecode/slate-plugins-code-block@1.0.0-next.61
  - @udecode/slate-plugins-heading@1.0.0-next.61
  - @udecode/slate-plugins-link@1.0.0-next.61
  - @udecode/slate-plugins-list@1.0.0-next.61
  - @udecode/slate-plugins-paragraph@1.0.0-next.61

## 1.0.0-next.60

### Minor Changes

- [#864](https://github.com/udecode/slate-plugins/pull/864) [`37a52994`](https://github.com/udecode/slate-plugins/commit/37a529945a882adb0222b47a28466dd31286a354) Thanks [@dylans](https://github.com/dylans)! - Refactor insert for deserializers

## 1.0.0-next.59

### Patch Changes

- Updated dependencies [[`3a3eb1b8`](https://github.com/udecode/slate-plugins/commit/3a3eb1b8565789b7ba49e8170479df8245ed5b22)]:
  - @udecode/slate-plugins-common@1.0.0-next.59
  - @udecode/slate-plugins-block-quote@1.0.0-next.59
  - @udecode/slate-plugins-code-block@1.0.0-next.59
  - @udecode/slate-plugins-heading@1.0.0-next.59
  - @udecode/slate-plugins-link@1.0.0-next.59
  - @udecode/slate-plugins-list@1.0.0-next.59
  - @udecode/slate-plugins-paragraph@1.0.0-next.59

## 1.0.0-next.58

### Patch Changes

- [#860](https://github.com/udecode/slate-plugins/pull/860) [`db6371c3`](https://github.com/udecode/slate-plugins/commit/db6371c36e389cb03901a119194dd93652134554) Thanks [@dylans](https://github.com/dylans)! - wrap paste deserialization in withoutNormalization block to prevent paste errors

## 1.0.0-next.57

### Patch Changes

- Updated dependencies [[`5abacbc2`](https://github.com/udecode/slate-plugins/commit/5abacbc23af67f9388536f73076d026b89b24c5c)]:
  - @udecode/slate-plugins-list@1.0.0-next.57

## 1.0.0-next.56

### Patch Changes

- Updated dependencies [[`75b39f18`](https://github.com/udecode/slate-plugins/commit/75b39f18901d38f80847573cd3431ece1d1d4b3d)]:
  - @udecode/slate-plugins-core@1.0.0-next.56
  - @udecode/slate-plugins-common@1.0.0-next.56
  - @udecode/slate-plugins-block-quote@1.0.0-next.56
  - @udecode/slate-plugins-code-block@1.0.0-next.56
  - @udecode/slate-plugins-heading@1.0.0-next.56
  - @udecode/slate-plugins-link@1.0.0-next.56
  - @udecode/slate-plugins-list@1.0.0-next.56
  - @udecode/slate-plugins-paragraph@1.0.0-next.56

## 1.0.0-next.55

### Patch Changes

- Updated dependencies [[`abaf4a11`](https://github.com/udecode/slate-plugins/commit/abaf4a11d3b69157983b6cf77b023a6008478a79)]:
  - @udecode/slate-plugins-core@1.0.0-next.55
  - @udecode/slate-plugins-common@1.0.0-next.55
  - @udecode/slate-plugins-block-quote@1.0.0-next.55
  - @udecode/slate-plugins-code-block@1.0.0-next.55
  - @udecode/slate-plugins-heading@1.0.0-next.55
  - @udecode/slate-plugins-link@1.0.0-next.55
  - @udecode/slate-plugins-list@1.0.0-next.55
  - @udecode/slate-plugins-paragraph@1.0.0-next.55

## 1.0.0-next.54

### Patch Changes

- Updated dependencies [[`477bab57`](https://github.com/udecode/slate-plugins/commit/477bab572d943b21d3390c440f28e76074484a56), [`d906095d`](https://github.com/udecode/slate-plugins/commit/d906095d20cf8755a200d254f6c20c510a748f29)]:
  - @udecode/slate-plugins-list@1.0.0-next.54
  - @udecode/slate-plugins-common@1.0.0-next.54
  - @udecode/slate-plugins-block-quote@1.0.0-next.54
  - @udecode/slate-plugins-code-block@1.0.0-next.54
  - @udecode/slate-plugins-heading@1.0.0-next.54
  - @udecode/slate-plugins-link@1.0.0-next.54
  - @udecode/slate-plugins-paragraph@1.0.0-next.54

## 1.0.0-next.53

### Patch Changes

- Updated dependencies [[`42360b44`](https://github.com/udecode/slate-plugins/commit/42360b444d6a2959847d5619eda32319e360e3af)]:
  - @udecode/slate-plugins-core@1.0.0-next.53
  - @udecode/slate-plugins-common@1.0.0-next.53
  - @udecode/slate-plugins-block-quote@1.0.0-next.53
  - @udecode/slate-plugins-code-block@1.0.0-next.53
  - @udecode/slate-plugins-heading@1.0.0-next.53
  - @udecode/slate-plugins-link@1.0.0-next.53
  - @udecode/slate-plugins-list@1.0.0-next.53
  - @udecode/slate-plugins-paragraph@1.0.0-next.53

## 1.0.0-next.48

### Minor Changes

- [#821](https://github.com/udecode/slate-plugins/pull/821) [`091f0940`](https://github.com/udecode/slate-plugins/commit/091f0940bd3c06c3dfaf49a4ab14eb611678637d) Thanks [@dylans](https://github.com/dylans)! - If empty fragment, eject from deserializer

### Patch Changes

- [#819](https://github.com/udecode/slate-plugins/pull/819) [`b82f47a6`](https://github.com/udecode/slate-plugins/commit/b82f47a66ea1521dc426ae87e1ec37f004593cbe) Thanks [@dylans](https://github.com/dylans)! - Markdown deserializer was breaking the pasting of a simple URL into the editor. Now checks the content and if it's simply a URL, it skips the handling of the content as markdown

- Updated dependencies [[`a15ab621`](https://github.com/udecode/slate-plugins/commit/a15ab6217c6e2d4eb2a1320f6b76c483fc963047)]:
  - @udecode/slate-plugins-list@1.0.0-next.48

## 1.0.0-next.47

### Minor Changes

- [#813](https://github.com/udecode/slate-plugins/pull/813) [`2d671565`](https://github.com/udecode/slate-plugins/commit/2d67156509ca8689aede2d4a9a45f749772c789c) Thanks [@dylans](https://github.com/dylans)! - Fix ast-deserialize insert, minor cleanup to html/md deserializer

- [#814](https://github.com/udecode/slate-plugins/pull/814) [`1bbdae38`](https://github.com/udecode/slate-plugins/commit/1bbdae389e7ec3ec7a54877526055a9464e46fdf) Thanks [@dylans](https://github.com/dylans)! - allow override of fragment root for deserializers

## 1.0.0-next.46

### Patch Changes

- Updated dependencies [[`6e9068f6`](https://github.com/udecode/slate-plugins/commit/6e9068f6f483b698b6b3aae6819333103504f41b)]:
  - @udecode/slate-plugins-common@1.0.0-next.46
  - @udecode/slate-plugins-block-quote@1.0.0-next.46
  - @udecode/slate-plugins-code-block@1.0.0-next.46
  - @udecode/slate-plugins-heading@1.0.0-next.46
  - @udecode/slate-plugins-link@1.0.0-next.46
  - @udecode/slate-plugins-list@1.0.0-next.46
  - @udecode/slate-plugins-paragraph@1.0.0-next.46

## 1.0.0-next.44

### Patch Changes

- [#801](https://github.com/udecode/slate-plugins/pull/801) [`7f5f223d`](https://github.com/udecode/slate-plugins/commit/7f5f223d39e0b6a6381d42d1a95d73592960319a) Thanks [@dylans](https://github.com/dylans)! - Make markdown deserializer more consistent in approach with html and ast deserializers

## 1.0.0-next.43

### Patch Changes

- Updated dependencies [[`e70f8043`](https://github.com/udecode/slate-plugins/commit/e70f8043125d06161fa3ea5d47810749782e0a8a)]:
  - @udecode/slate-plugins-list@1.0.0-next.43

## 1.0.0-next.42

### Patch Changes

- Updated dependencies [[`e10f2fa4`](https://github.com/udecode/slate-plugins/commit/e10f2fa4963efdfef9e642a5125942c4819cfe9c), [`558a89da`](https://github.com/udecode/slate-plugins/commit/558a89da4217e9be57bc6ab2abcc48482c9f60bd)]:
  - @udecode/slate-plugins-list@1.0.0-next.42

## 1.0.0-next.40

### Patch Changes

- Updated dependencies [[`15048e6f`](https://github.com/udecode/slate-plugins/commit/15048e6facbefc5fe21b0b9bd9a586f269cada89)]:
  - @udecode/slate-plugins-core@1.0.0-next.40
  - @udecode/slate-plugins-common@1.0.0-next.40
  - @udecode/slate-plugins-block-quote@1.0.0-next.40
  - @udecode/slate-plugins-code-block@1.0.0-next.40
  - @udecode/slate-plugins-heading@1.0.0-next.40
  - @udecode/slate-plugins-link@1.0.0-next.40
  - @udecode/slate-plugins-list@1.0.0-next.40
  - @udecode/slate-plugins-paragraph@1.0.0-next.40

## 1.0.0-next.39

### Patch Changes

- Updated dependencies [[`b444071e`](https://github.com/udecode/slate-plugins/commit/b444071e2673803dba05c770c5dfbbde14f7a631)]:
  - @udecode/slate-plugins-core@1.0.0-next.39
  - @udecode/slate-plugins-common@1.0.0-next.39
  - @udecode/slate-plugins-block-quote@1.0.0-next.39
  - @udecode/slate-plugins-code-block@1.0.0-next.39
  - @udecode/slate-plugins-heading@1.0.0-next.39
  - @udecode/slate-plugins-link@1.0.0-next.39
  - @udecode/slate-plugins-list@1.0.0-next.39
  - @udecode/slate-plugins-paragraph@1.0.0-next.39

## 1.0.0-next.38

### Patch Changes

- Updated dependencies [[`f4c3b4fb`](https://github.com/udecode/slate-plugins/commit/f4c3b4fbe1f8c057f3f2d33ee4f8a6ae9768f9bf), [`317f6205`](https://github.com/udecode/slate-plugins/commit/317f620598d19f2f9ebf01b4f92256bf0ca05097)]:
  - @udecode/slate-plugins-list@1.0.0-next.38

## 1.0.0-next.37

### Patch Changes

- Updated dependencies [[`2cf618c3`](https://github.com/udecode/slate-plugins/commit/2cf618c3a0220ca03c1d95e0b51d1ff58d73578c)]:
  - @udecode/slate-plugins-common@1.0.0-next.37
  - @udecode/slate-plugins-block-quote@1.0.0-next.37
  - @udecode/slate-plugins-code-block@1.0.0-next.37
  - @udecode/slate-plugins-heading@1.0.0-next.37
  - @udecode/slate-plugins-link@1.0.0-next.37
  - @udecode/slate-plugins-list@1.0.0-next.37
  - @udecode/slate-plugins-paragraph@1.0.0-next.37

## 1.0.0-next.36

### Patch Changes

- Updated dependencies [[`7cbd7bd9`](https://github.com/udecode/slate-plugins/commit/7cbd7bd95b64e06fde38dcd68935984de8f3a82f), [`806e1632`](https://github.com/udecode/slate-plugins/commit/806e16322e655802822079d8540a6983a9dfb06e)]:
  - @udecode/slate-plugins-common@1.0.0-next.36
  - @udecode/slate-plugins-core@1.0.0-next.36
  - @udecode/slate-plugins-block-quote@1.0.0-next.36
  - @udecode/slate-plugins-code-block@1.0.0-next.36
  - @udecode/slate-plugins-heading@1.0.0-next.36
  - @udecode/slate-plugins-link@1.0.0-next.36
  - @udecode/slate-plugins-list@1.0.0-next.36
  - @udecode/slate-plugins-paragraph@1.0.0-next.36

## 1.0.0-next.32

### Patch Changes

- Updated dependencies [[`73b77853`](https://github.com/udecode/slate-plugins/commit/73b77853cb38f61d4bfb31a0d604e947c130ee0f)]:
  - @udecode/slate-plugins-block-quote@1.0.0-next.32
  - @udecode/slate-plugins-code-block@1.0.0-next.32
  - @udecode/slate-plugins-link@1.0.0-next.32
  - @udecode/slate-plugins-list@1.0.0-next.32

## 1.0.0-next.31

### Patch Changes

- Updated dependencies [[`15cdf5d7`](https://github.com/udecode/slate-plugins/commit/15cdf5d7614734c78c31f290586d0d64b0cff3fd)]:
  - @udecode/slate-plugins-list@1.0.0-next.31

## 1.0.0-next.30

### Patch Changes

- Updated dependencies [[`84b5feed`](https://github.com/udecode/slate-plugins/commit/84b5feedd20b12f0ec23e082d90314b045a69e62), [`33605a49`](https://github.com/udecode/slate-plugins/commit/33605a495ccc3fd9b4f6cfdaf2eb0e6e59bd7a67), [`28f30c8a`](https://github.com/udecode/slate-plugins/commit/28f30c8a6b0a2d245d6f6403c8399f2e59d98b92), [`75e6d25d`](https://github.com/udecode/slate-plugins/commit/75e6d25de0f9cf2487adecff54c2993ebc795aa0)]:
  - @udecode/slate-plugins-list@1.0.0-next.30
  - @udecode/slate-plugins-core@1.0.0-next.30
  - @udecode/slate-plugins-common@1.0.0-next.30
  - @udecode/slate-plugins-code-block@1.0.0-next.30
  - @udecode/slate-plugins-block-quote@1.0.0-next.30
  - @udecode/slate-plugins-heading@1.0.0-next.30
  - @udecode/slate-plugins-link@1.0.0-next.30
  - @udecode/slate-plugins-paragraph@1.0.0-next.30

## 1.0.0-next.29

### Patch Changes

- Updated dependencies [[`dfbde8bd`](https://github.com/udecode/slate-plugins/commit/dfbde8bd856e1e646e3d8fe2cbf1df8f9b8c67c3), [`dfbde8bd`](https://github.com/udecode/slate-plugins/commit/dfbde8bd856e1e646e3d8fe2cbf1df8f9b8c67c3)]:
  - @udecode/slate-plugins-core@1.0.0-next.29
  - @udecode/slate-plugins-common@1.0.0-next.29
  - @udecode/slate-plugins-block-quote@1.0.0-next.29
  - @udecode/slate-plugins-code-block@1.0.0-next.29
  - @udecode/slate-plugins-heading@1.0.0-next.29
  - @udecode/slate-plugins-link@1.0.0-next.29
  - @udecode/slate-plugins-list@1.0.0-next.29
  - @udecode/slate-plugins-paragraph@1.0.0-next.29

## 1.0.0-next.27

### Patch Changes

- Updated dependencies [[`88d49713`](https://github.com/udecode/slate-plugins/commit/88d497138c2f8a1ce51af6910c5052b1ddf8dabc)]:
  - @udecode/slate-plugins-list@1.0.0-next.27

## 1.0.0-next.26

### Patch Changes

- Updated dependencies [[`201a7993`](https://github.com/udecode/slate-plugins/commit/201a799342ff88405e120182d8554e70b726beea)]:
  - @udecode/slate-plugins-core@1.0.0-next.26
  - @udecode/slate-plugins-common@1.0.0-next.26
  - @udecode/slate-plugins-block-quote@1.0.0-next.26
  - @udecode/slate-plugins-code-block@1.0.0-next.26
  - @udecode/slate-plugins-heading@1.0.0-next.26
  - @udecode/slate-plugins-link@1.0.0-next.26
  - @udecode/slate-plugins-list@1.0.0-next.26
  - @udecode/slate-plugins-paragraph@1.0.0-next.26
