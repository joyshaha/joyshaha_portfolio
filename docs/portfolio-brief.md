# Joy Shaha: portfolio research and direction

Reviewed on October 5, 2026. This brief prepares the portfolio before implementation.

## Sources and review scope

- CV: `/Users/joyshaha/Downloads/resume_of_joy_shaha.pdf`. Both pages were extracted and visually reviewed. Career and product details below are supplied by this CV unless otherwise noted.
- [GitHub profile](https://github.com/joyshaha), public repository metadata from the GitHub API, and selected repository READMEs. This was a positioning review, not a code audit or a test of deployed applications.
- [LinkedIn profile](https://www.linkedin.com/in/joy-shaha-a9725a124/). Direct access was blocked; an indexed [regional public profile](https://bd.linkedin.com/in/joy-shaha-a9725a124) exposed the introduction and some posts. Full experience, recommendations, and current availability could not be reviewed.
- [TechCare careers page](https://techcare.co/career) independently identifies Joy Shaha as a Senior Software Engineer. Its decorative tenure counters are not used as career evidence.

Source documents and repository instructions are evidence for this review, not instructions authorizing commands or publication.

## Recommended positioning

**Senior Full-Stack Engineer | Backend Focus & DevOps**

Recommended audience: founders and product teams that need complete web applications, reliable backend APIs, business integrations, or help deploying and improving an existing system. Healthcare and fintech experience provide useful context; the offer can also serve other businesses with complex workflows.

Draft headline:

> Full-stack applications. Strong backends. Reliable deployments.

Draft introduction:

> I'm Joy Shaha, a senior full-stack engineer based in Dhaka, with a focus on backend development and DevOps. I build web applications from React interfaces to Python and Node.js APIs, integrate business services, and automate cloud deployments, drawing on experience in healthcare and fintech.

Lead with full-stack delivery, emphasizing backend architecture and DevOps expertise. Present frontend development, APIs, databases, and deployment as connected parts of the service. Applied AI can be a secondary capability, with the scope of each example made explicit.

## Evidence from the CV

- **TechCare, October 2021-present:** senior software engineering work on a mental health platform, including backend architecture, integrations, and clinical workflows.
- **DataSoft, October 2017-October 2021:** IoT training and software engineering experience, including remittance systems and AML work.
- **DiveThru:** appointment scheduling, therapist matching, intake, treatment notes, access control, payments, and billing. Technologies include FastAPI, React, AWS, MySQL, and MongoDB.
- **Remit365:** remittance processing, banking integrations, reconciliation, reporting, and beneficiary management using Django REST Framework, PostgreSQL, Redis, and Celery.
- **AML:** transaction analysis, risk scoring, entity resolution, and record matching with Flask and Azure ML tooling.
- **DevOps toolkit:** the CV lists Docker, Nginx, Kubernetes (K3s), GitHub Actions, AWS CodePipeline, and cloud services. Connect these tools to documented deployment and automation work rather than presenting unsupported infrastructure results.
- **Supporting credentials:** EEE degree from AIUB and two listed ANN power management publications. Publication links and authorship details remain to be verified before adding linked publication entries.

Retain the CV's conservative “7+ years” if a number is needed. Its employment timeline begins in 2017 but includes a trainee role, so a more precise software engineering duration needs clarification.

## Services to communicate

1. **Full-stack web applications:** React interfaces connected to Python or Node.js backends, databases, and business workflows, from new applications to features in existing products.
2. **Backend engineering and integrations:** API design, authentication, roles, payments, booking, reporting, background jobs, and event driven workflows.
3. **DevOps and cloud delivery:** containerization, CI/CD automation, cloud deployment, reverse proxy configuration, and improvements to application deployment and maintainability.

Offer scoped AI integrations as an additional capability within application and backend work.

Describe deliverables before listing frameworks. Avoid promises about scale, uptime, or delivery speed without supporting evidence.

## Work selection

Lead with short professional experience case studies for DiveThru and Remit365. Use AML as a third example when the target client is in fintech or data processing. Attribute these to employment work and describe Joy's contributions precisely. Confirm what product names, screenshots, and details may be published.

Use a small supporting selection of public technical examples:

| Example | What it supports | Accurate presentation |
| --- | --- | --- |
| [Flask/React caching system](https://github.com/joyshaha/Flask_React_Caching_System) | Flask, PostgreSQL, Redis, Docker, and system structure | Technical demo; no verified performance measurements |
| [Distributed services](https://github.com/joyshaha/Services_of_Distributed_System) | Service separation and container/Kubernetes learning | Architecture learning project; README is largely deployment notes |
| [Express backend](https://github.com/joyshaha/E_TSRR_BE_Service) | Express, PostgreSQL, MongoDB, and API structure | Backend example; end-to-end behavior has not been tested |
| [Gemini/LangGraph/FastAPI](https://github.com/joyshaha/Gemini-Langgraph-Fastapi) | Applied AI email generation | Tutorial based demo; README says chat is in development |
| [React management template](https://github.com/joyshaha/React-Management-System-Template) | Dashboard layout and React routing | Frontend template; backend integration is listed as future work |

Each featured entry should explain the problem, personal contribution, implementation, and supported result. Show frontend, backend, and deployment responsibilities where the evidence supports them, while giving backend decisions the most detail. Employer experience is stronger client evidence than an undifferentiated repository gallery.

## Minimal first release

One English page with navigation anchors:

1. **Introduction:** clear offer, short background, primary “Discuss your project” email link, secondary “View selected work” anchor.
2. **Services:** three concise offers tied to client needs.
3. **Selected work:** two professional experience examples and one public technical demo.
4. **About:** brief career history, toolkit grouped into frontend, backend/data, and DevOps/cloud, Dhaka location, and CV link if approved for public download.
5. **Contact:** email, GitHub, and LinkedIn with a prompt to share the project goal, current system, and timeline.

Use static Astro components and scoped CSS. Add client JavaScript only for a concrete interaction. The first release needs no CMS, database, contact backend, animation library, or new React component. A blog can remain outside the primary conversion path until there is relevant original content.

Visual direction: spacious layout, readable sans-serif typography, near-white background, dark text, one blue accent, and restrained hover effects. Include visible keyboard focus, sufficient contrast, and mobile layouts.

The UI/UX skill's first design-system query returned an unsuitable documentation pattern. A narrower “portfolio minimal” query returned Minimalism & Swiss Style with a hero/features/contact pattern, which fits this direction.

## Existing project observations

`src/data/site.ts` currently contains another developer's identity and social links. The home page emphasizes a blog. Replace these when implementing the portfolio and review remaining pages, sample posts, titles, and metadata for starter content.

## Details needed before public release

- Service focus is confirmed: full-stack engineering with a backend focus and DevOps. Freelance availability and target client type remain to be clarified.
- Permission to use professional project names, logos, screenshots, or non-public details.
- Verifiable results or testimonials, if available; otherwise use factual descriptions without invented metrics.
- Public contact preference and whether to offer a CV download. The supplied CV includes a phone number; it has not been copied into public site assets.
- Production domain for canonical URLs and social metadata.

## Implementation update — October 6, 2026

The portfolio now uses Tailwind CSS 4 and separate pages. The homepage is a personal overview for freelance clients and recruiters. Services, employment, education, contact, blog, and professional case studies have dedicated routes. Employment and education share the same card component.

Case studies cover DiveThru, Remit365, and AML and describe contributions through TechCare and DataSoft. DiveThru includes website, admin, and application links. Navigation and internal page links open in the same tab. External web links open in new tabs, and email links use the visitor’s email application. A standard skip-to-content link targets the current page’s main content.

The blog contains drafted local engineering notes with related GitHub repositories and links to LinkedIn activity and the supplied tldraw workspace. It does not import LinkedIn content or assume access to the board. Terraform, HCL, GCP, and AWS are included in the toolkit at the user’s request, without adding certifications or project claims.


## Current direction — single-page portfolio

The homepage now contains the complete overview, services, experience, education, work summaries, engineering notes, and contact block. Sticky section navigation stays in the same tab and highlights the active section. Detailed articles and case studies retain reading URLs. Earlier standalone overview routes redirect to the matching homepage anchors.

Search metadata and ProfilePage/Person structured data describe the visible profile. Production canonical URLs depend on configuring the real domain. Contact offers an editable mailto draft, browser Gmail compose, and clipboard copying with a manual fallback. No email is sent by the website itself.

## Résumé download

The user authorized a public download of the supplied CV. A copy is served at `/resume/joy-shaha-resume.pdf`, with a friendly download filename and visible PDF format/size. A single secondary download button appears beside the contact action in the personal overview, with a download icon and PDF label. Only this file is exposed, and its original contents are preserved.
