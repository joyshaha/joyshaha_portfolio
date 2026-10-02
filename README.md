# Devfolio

A personal developer portfolio and Markdown blog built with Astro 7 and React 19. Astro generates static pages, while a React island adds an interactive like button to each blog post.

## Getting started

Use Node.js **22.12.0 or newer**. From the parent workspace directory:

```sh
cd devfolio
npm install
npm run dev -- --background
```

Open the local URL printed by the dev server (normally `http://localhost:4321`).

## Commands

Run these commands inside `devfolio/`:

| Command | Purpose |
| --- | --- |
| `npm run dev -- --background` | Start the development server in the background |
| `npm run astro -- dev status` | Check the background server status |
| `npm run astro -- dev logs` | View development server logs |
| `npm run astro -- dev stop` | Stop the background server |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- sync --force` | Refresh the content store and generated types |

## Project structure

```text
devfolio/
├── public/                    # Static assets, including the favicon
├── src/
│   ├── components/            # Header, footer, post cards, and React like button
│   ├── data/
│   │   ├── blog/              # Markdown blog posts
│   │   └── site.ts            # Profile information and social links
│   ├── layouts/
│   │   └── BaseLayout.astro   # Shared page layout
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── index.astro    # Blog listing
│   │   │   └── [id].astro     # Individual post pages
│   │   ├── index.astro        # Home page
│   │   ├── about.astro        # About page
│   │   └── 404.astro          # Custom not-found page
│   ├── styles/global.css     # Shared styles
│   └── content.config.ts     # Blog loader and frontmatter schema
├── astro.config.mjs          # Astro configuration and React integration
└── package.json
```

## Customizing the portfolio

Edit `src/data/site.ts` to update your name, role, bio, availability, and social links. Update the page templates in `src/pages/` for page content and `src/styles/global.css` for styling.

## Writing a blog post

Create a Markdown file in `src/data/blog/`, for example `my-first-post.md`:

```markdown
---
title: 'My first post'
description: 'A short introduction to the post.'
pubDate: 2026-10-02
tags: ['astro', 'learning']
---

Write your post here using Markdown.
```

All four frontmatter fields are required by `src/content.config.ts`. Posts appear on `/blog` with the newest publication date first. The example above generates `/blog/my-first-post`.

The like button hydrates when it becomes visible. Its count stays in component state and resets when the page is reloaded.

## Troubleshooting content

If Astro reports that the `blog` collection does not exist or is empty, confirm that your Markdown files are saved in `src/data/blog/` and their frontmatter matches the schema. Refresh the content store and restart the development server:

```sh
npm run astro -- dev stop
npm run astro -- sync --force
npm run dev -- --background
```

## Documentation

- [Astro documentation](https://docs.astro.build)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [React integration](https://docs.astro.build/en/guides/integrations-guide/react/)
