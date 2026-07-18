# @hdyzen/rollup-plugin-userscript-meta

Rollup plugin to generate userscript metadatablocks (`// ==UserScript==`).

## Installation

```bash
npm install @hdyzen/rollup-plugin-userscript-meta
```

```bash
pnpm add @hdyzen/rollup-plugin-userscript-meta
```

```bash
yarn add @hdyzen/rollup-plugin-userscript-meta
```

```bash
bun add @hdyzen/rollup-plugin-userscript-meta
```

## Usage

```js
import metablock from "@hdyzen/rollup-plugin-userscript-meta";

export default {
  plugins: [
    metablock({
      name: "My Script",
      namespace: "https://example.com",
      version: "1.0.0",
      match: ["https://example.com/*"],
      grant: ["GM_getValue", "GM_setValue"],
    }),
  ],
};
```

## API

### `metablock(meta): Plugin`

Returns a Rollup Plugin that injects the metadatablock into the output.

### `createMetablock(meta): string`

Generates the metablock string without Rollup integration.

### `Metablock`

Type containing all available fields.

## Fields

| Field | Type | Required |
|-------|------|:--------:|
| `name` | `string \| LocalizedMeta` | yes |
| `namespace` | `string` | no |
| `author` | `string` | no |
| `version` | `string` | no |
| `description` | `string \| LocalizedMeta` | no |
| `icon` | `string` | no |
| `match` | `[string, ...string[]]` | no |
| `excludeMatch` | `[string, ...string[]]` | no |
| `include` | `IncludeExcludeMeta` | no |
| `exclude` | `IncludeExcludeMeta` | no |
| `require` | `[string, ...string[]]` | no |
| `resource` | `[ResourceMeta, ...ResourceMeta[]]` | no |
| `runAt` | `"document-start" \| "document-body" \| "document-end" \| "document-idle"` | no |
| `noframes` | `boolean` | no |
| `grant` | `[GrantMeta, ...GrantMeta[]]` | no |
| `injectInto` | `"page" \| "content" \| "auto"` | no |
| `downloadURL` | `string` | no |
| `supportURL` | `string` | no |
| `homepageURL` | `string` | no |
| `unwrap` | `boolean` | no |
| `tag` | `[string, ...string[]]` | no |

## Localization

Strings support the format `[defaultValue, { locale: translation }]`:

```js
name: ["My Script", { "pt-BR": "Meu Script", "zh-CN": "我的脚本" }];
```

## License

MIT
