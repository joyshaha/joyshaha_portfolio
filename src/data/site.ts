const email = 'joyshaha.iot@gmail.com';
const emailSubject = 'Project or engineering opportunity';
const emailBody = 'Hi Joy,\r\n\r\nI would like to discuss a project or opportunity.\r\n\r\nProject or role:\r\nTimeline:\r\nA little context:\r\n\r\nBest,\r\n';

export const site = {
  name: 'Joy Shaha',
  role: 'Senior Full-Stack Engineer',
  bio: 'Full-stack engineering with a backend focus and DevOps expertise. I build web applications, business integrations, and cloud systems.',
  email,
  location: 'Dhaka, Bangladesh',
  resume: { url: '/resume/joy-shaha-resume.pdf', filename: 'Joy-Shaha-Resume.pdf', format: 'PDF', size: '27 KB' },
  contactUrl: `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
  gmailUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
  socials: [
    { label: 'GitHub', url: 'https://github.com/joyshaha' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/joy-shaha-a9725a124/' },
  ],
};

export const services = [
  { number: '01', icon: 'window', title: 'Full-stack development', description: 'From the interface your customers use to the systems behind it. Build a new product or add thoughtful features to an existing one.', items: ['Web applications & dashboards', 'React interfaces', 'API & database integration'] },
  { number: '02', icon: 'layers', title: 'Backend engineering', description: 'Turn complex business workflows into well-structured services. My focus is on the foundations that make your application work.', items: ['Python & Node.js APIs', 'Payments & third-party integrations', 'Background jobs & event workflows'] },
  { number: '03', icon: 'cloud', title: 'DevOps & cloud delivery', description: 'Connect development to deployment. Set up repeatable workflows and infrastructure that your team can maintain with confidence.', items: ['Docker & cloud deployments', 'CI/CD pipelines', 'Nginx & service architecture'] },
];

export const toolkit = [
  { title: 'Frontend', tools: ['React', 'JavaScript', 'Redux / RTK Query', 'HTML & CSS', 'Tailwind CSS'] },
  { title: 'Backend & data', tools: ['Python', 'Django / FastAPI / Flask', 'Node.js / Express', 'PostgreSQL / MySQL', 'MongoDB', 'Redis / Celery'] },
  { title: 'DevOps & cloud', tools: ['AWS', 'Google Cloud (GCP)', 'Terraform', 'HCL', 'Docker', 'Nginx', 'Kubernetes (K3s)', 'GitHub Actions', 'CI/CD'] },
];

export const navigation = [
  { label: 'Overview', href: '/#overview' },
  { label: 'Services', href: '/#services' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Education', href: '/#education' },
  { label: 'Work', href: '/#work' },
  { label: 'Notes', href: '/#notes' },
];

export const experiences = [
  { organization: 'TechCare Inc.', role: 'Senior Software Engineer', period: 'October 2021 — Present', location: 'Dhaka, Bangladesh', overview: 'Backend architecture and development for a cloud-native mental health platform, collaborating with cross-functional teams on technical design and delivery.', details: ['Built services for therapy booking, user management, payments, and clinical workflows.', 'Integrated payment gateways, email services, and third-party APIs.', 'Developed modular backend services and standardized APIs for maintainability.'], tags: ['FastAPI', 'React', 'AWS', 'Docker'], link: '/case-studies/divethru/', linkLabel: 'Explore the DiveThru case study' },
  { organization: 'DataSoft Systems Bangladesh Ltd.', role: 'IoT Trainee → Software Engineer', period: 'October 2017 — October 2021', location: 'Dhaka, Bangladesh', overview: 'Worked across fintech backend systems, frontend features, machine learning, and enterprise integrations, progressing from IoT training into software engineering.', details: ['Developed remittance processing APIs, reporting, and banking integrations for Remit365.', 'Built AML workflows with risk scoring, entity resolution, and record matching.', 'Delivered frontend and backend features with Django and JavaScript.'], tags: ['Django', 'Flask', 'PostgreSQL', 'Celery', 'Azure ML'], link: '/case-studies/remit365/', linkLabel: 'Explore the Remit365 case study' },
];

export const education = [
  { organization: 'American International University-Bangladesh', role: 'B.Sc. in Electrical and Electronic Engineering', period: '2012 — 2016', location: 'Dhaka, Bangladesh', overview: 'An engineering foundation in systems thinking, analytical problem solving, and applied research.', details: ['CGPA: 3.85 / 4.00.', 'Research interests included artificial neural networks and power management.'], tags: ['Engineering', 'Applied research', 'Artificial neural networks'] },
];
export const diagramUrl = 'https://www.tldraw.com/f/FbjvzNnLKMw5i5WpKUJnh?d=v-2092.-461.4621.2584.page';
export const linkedinActivityUrl = 'https://www.linkedin.com/in/joy-shaha-a9725a124/recent-activity/all/';
