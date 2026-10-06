import { diagramUrl, linkedinActivityUrl } from './site';
export const writing = [
  {
    slug: 'designing-connected-services', title: 'Designing connected services', category: 'Architecture', readTime: '2 min read',
    summary: 'Thinking about service boundaries, APIs, and the workflows that connect an application.',
    sections: [
      { title: 'Start with a workflow', body: 'Before choosing a service architecture, describe the journey the application must support. Booking, payments, notifications, and reporting each have different responsibilities. Clear boundaries begin with understanding how those responsibilities connect.' },
      { title: 'Make communication explicit', body: 'Define what each API accepts, returns, and owns. A service boundary should make failures easier to understand and changes easier to contain. Choose synchronous calls for immediate results and background processing when work can happen independently.' },
      { title: 'Keep the delivery path practical', body: 'Containers can make a development environment repeatable. More orchestration introduces operational responsibility, so choose the simplest deployment model that meets the project’s needs. My public distributed-services project explores this progression.' },
    ],
    repository: 'https://github.com/joyshaha/Services_of_Distributed_System',
  },
  {
    slug: 'interfaces-apis-and-caching', title: 'Interfaces, APIs, and caching', category: 'Full-stack engineering', readTime: '2 min read',
    summary: 'A practical way to reason about the layers between a React interface and persistent data.',
    sections: [
      { title: 'Give each layer a responsibility', body: 'The interface presents information and collects input. The backend validates requests and applies business rules. The database stores durable records. Keeping these responsibilities visible helps a team reason about changes across the stack.' },
      { title: 'Treat caching as a design decision', body: 'A cache can avoid repeated work, but it introduces questions about freshness, invalidation, and failure behavior. Identify which data can be reused, how long it remains useful, and what happens when the cache is unavailable before adding it.' },
      { title: 'Explore with a small system', body: 'The Flask/React caching repository is a technical demo connecting React, Flask, PostgreSQL, Redis, and Docker. It is an architecture exploration, rather than a claim about measured production performance.' },
    ],
    repository: 'https://github.com/joyshaha/Flask_React_Caching_System',
  },
  {
    slug: 'from-code-to-cloud', title: 'From code to cloud', category: 'DevOps', readTime: '2 min read',
    summary: 'Connecting application development with reproducible environments and deployment workflows.',
    sections: [
      { title: 'Make environments repeatable', body: 'A reproducible development environment reduces setup differences between teammates. Containers and dev containers can capture runtime and tooling requirements so the project can be started consistently.' },
      { title: 'Describe infrastructure intentionally', body: 'Terraform and HCL provide a way to describe infrastructure changes in code. A useful workflow includes reviewing plans, protecting state, and separating environments. Cloud provider knowledge still matters when working with AWS or GCP resources.' },
      { title: 'Keep the handover in mind', body: 'Deployment work includes configuration, documentation, and a clear path for the next person to make changes. My public dev-container project is one small example of making a working environment easier to reproduce.' },
    ],
    repository: 'https://github.com/joyshaha/Vscode_devcontainer',
  },
].map(post => ({ ...post, diagramUrl, linkedinUrl: linkedinActivityUrl }));
