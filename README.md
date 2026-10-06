# Joy Shaha — Portfolio

A single-page Astro portfolio for freelance clients and recruiters, styled with Tailwind CSS 4. The homepage introduces Joy as a senior full-stack engineer with a backend focus and DevOps expertise.

## Development

Use Node.js 22.12.0 or newer.

```sh
npm install
npm run dev -- --background
```

The usual development URL is http://localhost:4321. Astro may choose the next port if it is occupied.

| Command | Purpose |
| --- | --- |
| `npm run dev -- --background` | Start the background development server |
| `npm run astro -- dev status` | Check server status |
| `npm run astro -- dev logs` | Read server logs |
| `npm run astro -- dev stop` | Stop the server |
| `npm run check` | Run Astro and TypeScript diagnostics |
| `npm run build` | Build the static site in `dist/` |
| `npm run preview` | Preview the production build |

## Page structure

The homepage contains Overview, Services, Experience, Education, Work, Notes, and Contact sections. Sticky navigation uses ordinary anchor links and highlights the current section as you scroll. The page content and anchor navigation remain usable without JavaScript.

Detailed case studies and engineering articles retain individual URLs for reading and sharing:

- `/case-studies/divethru/`
- `/case-studies/remit365/`
- `/case-studies/anti-money-laundering/`
- `/blog/designing-connected-services/`
- `/blog/interfaces-apis-and-caching/`
- `/blog/from-code-to-cloud/`

The previous `/about/`, `/services/`, `/experience/`, `/education/`, and `/contact/` routes redirect to the corresponding homepage sections. Static-host builds use generated redirect HTML; server-capable hosting can implement HTTP redirects.

## Contact behavior

- **Write an email:** opens the visitor’s configured email application with Joy’s address, subject, and editable draft body.
- **Compose in Gmail:** opens a browser-based Gmail draft; the visitor may need to sign in.
- **Copy email address:** copies the address with visible confirmation. If clipboard access is unavailable, it displays the address for manual copying.

These controls compose messages; visitors send them from their email service. The site does not claim to send mail or require a contact backend.

## Editing content and styles

- `src/data/site.ts`: profile, email destinations, services, skills, navigation, employment, and education.
- `src/data/case-studies.ts`: project contributions and platform links.
- `src/data/writing.ts`: local engineering notes and related resources.
- `src/pages/index.astro`: the single-page portfolio.
- `src/components/Header.astro`: section navigation and active-section behavior.
- `src/components/EmailContact.astro`: email and copy controls.
- `src/data/ui.ts`: shared Tailwind utilities.
- `src/styles/global.css`: Tailwind theme and accessibility defaults, including sticky-header scroll offsets and reduced motion.

Internal page and section links use the same tab. External HTTP(S) links open in new tabs with secure rel attributes and accessible hints.

## Search and publication

The homepage has one descriptive main heading, semantic sections, meta description, social metadata, and ProfilePage/Person structured data. Portfolio content is rendered at build time. Structured data describes the visible profile; it does not promise search rankings or rich results.

When the production domain is known, set `site: 'https://your-domain.example'` in `astro.config.mjs`. The shared layout will then output canonical URLs and Open Graph URLs. Build and deploy `dist/` to a static host.

Professional work is attributed to TechCare and DataSoft. Diagrams are conceptual, not product screenshots. Blog notes link to LinkedIn, GitHub, and the supplied tldraw workspace without importing private content. The supplied résumé is publicly downloadable at `/resume/joy-shaha-resume.pdf`, including its existing contact details. Only this PDF is copied into `public/resume/`; the original Downloads folder is not exposed. Replace that file to update the résumé; update its displayed size in `src/data/site.ts` if needed.
