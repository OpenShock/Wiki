import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import lastModified from "fumadocs-mdx/plugins/last-modified";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { remarkAdmonition } from "fumadocs-core/mdx-plugins";
import remarkGemoji from "remark-gemoji";
import { z } from "zod";

// VitePress markdown often relies on the first H1 for the title and has no
// `title` frontmatter — relax the schema accordingly. Also passthrough
// VitePress-only fields like `hero`/`features`/`layout`/`tags` so the loader
// doesn't choke on them.
const relaxedPageSchema = pageSchema
  .extend({
    title: z.string().optional().default("Untitled"),
  })
  .passthrough();

export const docs = defineDocs({
  dir: "docs",
  docs: {
    schema: relaxedPageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  plugins: [lastModified()],
  mdxOptions: {
    remarkPlugins: [remarkAdmonition, remarkGemoji],
  },
});
