# content-engine

The Content engine sources data that can be used as a blog content.

## Installation

```
$ pnpm add -D content-engine
```

## Configuration

Create a new `content-engine.config.ts`

```ts
import { defineConfig } from 'content-engine/config';
import { fromHashnod, fromMarkdown } from 'content-engine/sources';

export default defineConfig({
  sources: [
    fromHashnode({
      username: 'iamchanii'
    }),
    fromMarkdown({
      remarkPlugins: [
        'remark-plugin-a',
        ['remark-plugin-b', {/* ... */}],
      ]
    }),
  ],
});
```

## Usage

```ts
import { createContentEngine } from 'content-engine';

const contentEngine = await createContentEngine();

console.log(contentEngine.contents);
```

Output:

```typescript
[
  {
    id: '...',
    slug: '/aaa',
    source: {
      id: 'markdown',
      metadata: {},
    },
    createdAt: '...',
    title: '...',
    body: {
      html: '...',
      plainText: '...',
    },
  },
  // ...
]
```

