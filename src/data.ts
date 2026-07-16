export const profile = {
  name: 'Baranikumar Srinivasan',
  role: 'Systems Engineer',
  location: 'Chennai, India',
  email: 'baranikumars2003@gmail.com',
  phone: '+91 6383473562',
  website: 'https://cosmicpredator.github.io/',
  summary:
    "A Systems Engineer, who's passionate about cutting-edge technologies and software development. Creating efficient and innovative solutions.",
  tagline: 'Building scalable, low-latency distributed systems.',
};

export const socials = [
  { label: 'GitHub', handle: 'CosmicPredator', url: 'https://github.com/CosmicPredator' },
  { label: 'LinkedIn', handle: 'Baranikumar Srinivasan', url: 'https://www.linkedin.com/' },
  { label: 'Dev', handle: 'cosmic_predator', url: 'https://dev.to/' },
];

export const skillGroups = [
  {
    id: 'distributed',
    title: 'Distributed Systems',
    items: ['Go', 'Systemd', 'Bash', 'NATS', 'Grafana', 'Docker', 'Linux'],
  },
  {
    id: 'cli',
    title: 'Command Line Programs',
    items: ['Go', 'Rust', '.NET', 'Python 3'],
  },
  {
    id: 'desktop',
    title: 'Desktop Development',
    items: ['.NET Avalonia UI', 'Slint UI (Rust)', 'GPUI (Rust)', 'GTK3'],
  },
  {
    id: 'ai',
    title: 'AI Engineering',
    items: [
      'Agentic AI',
      'Semantic Kernel',
      'LangChain',
      'LangSmith',
      'ChromaDB',
      'Azure AI',
      'Google Vertex AI',
    ],
  },
];

export const experience = [
  {
    company: 'United Parcel Service (UPS)',
    title: 'Associate Software Developer',
    period: 'Jan 2024 - Present',
    location: 'Chennai, India',
    current: true,
    points: [
      'Engineered and tuned high-throughput distributed systems leveraging Go-based microservices, event-driven architecture, and NATS to ensure scalable, low-latency communication.',
      'Successfully ported an internal mission critical application from Pascal to Go within one week.',
      'Implemented advanced AI workflows including RAG, fine-tuning, and conversational bot training with platforms like Azure AI Foundry, Azure ML, and Google Vertex AI.',
      'Produced several internal whitepapers detailing GenAI-driven code generation pipelines, document-processing frameworks, and vector database architecture best practices.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions India Pvt. Ltd',
    title: 'Internship / Project Partner',
    period: 'Oct 2022 - Jan 2023',
    location: 'Chennai, India',
    current: false,
    points: [
      "Directed a student engineering team in building an IoT-driven solution for Cognizant's P&R vertical.",
      'Integrated AGVs and industrial 6-DOF robotic systems into consumer-facing environments to fully automate warehouse operations.',
    ],
  },
];

export const projects = [
  {
    name: 'Chibi for AniList',
    stack: 'Go / CLI',
    description: 'A lightweight Go-based anime & manga tracker CLI app powered by AniList.',
    url: 'https://github.com/CosmicPredator/chibi-cli',
  },
  {
    name: 'AniMoe for AniList',
    stack: '.NET / WinUI',
    description: 'An unofficial .NET based Windows 10 & 11 app for AniList.co.',
    url: 'https://github.com/CosmicPredator/AniMoe',
  },
  {
    name: 'Nyaabox Backend',
    stack: 'Go / Self-hosted',
    description: 'A Go-based self-hosted temporary file storage server for personal home server usage.',
    url: 'https://github.com/CosmicPredator/nyaabox_backend',
  },
  {
    name: 'Mpv Discord',
    stack: 'Go / Cross-platform',
    description: 'A Go-based cross-platform Discord Rich Presence integration for mpv with no external dependencies.',
    url: 'https://github.com/CosmicPredator/mpv-discord',
  },
];

export const openSource = [
  {
    repo: 'zed-industries/gpui',
    description:
      'Switched to the official DWM backdrop API and added Mica/Mica Alt support for modern Windows 11 window effects.',
  },
  {
    repo: 'rockorager/libvaxis',
    description:
      'Added inline BorderLabels to the Border widget with configurable top/bottom left, center, and right alignments.',
  },
  {
    repo: 'diamondburned/arikawa',
    description: 'Added fields to pre-populate role, channel, mention, and user select components.',
  },
  {
    repo: 'microsoft/azure-docs',
    description: 'Fixed the printing of job status from response.id to response.status.',
  },
];

export const education = [
  {
    school: 'Chennai Institute of Technology',
    degree: 'Bachelors in Engineering',
    field: 'Mechatronics, Robotics & Automation',
    score: '9.1 CGPA',
    period: 'Mar 2020 - Apr 2024',
  },
  {
    school: 'Nazareth Matric Hr Sec School',
    degree: 'H.S.C',
    field: 'Biology & Mathematics Stream',
    score: '81%',
    period: 'Mar 2019 - Apr 2020',
  },
];

export const certifications = [
  {
    name: 'AI-102: Microsoft Certified Azure AI Engineering Associate',
    issuer: 'Microsoft Corporation',
    date: 'Dec 2025',
  },
  { name: 'NPTEL', issuer: 'Indian Institute of Technology, Bombay', date: 'Apr 2025' },
  { name: 'GitHub Foundations', issuer: 'GitHub Inc.', date: 'Mar 2025' },
];

export const awards = [
  { name: 'Rising Star - Q1 2025', issuer: 'United Parcel Service', date: 'Jul 2025' },
];

export const languages = [
  { name: 'English', level: 'Native', value: 100 },
  { name: 'Tamil', level: 'Native', value: 100 },
  { name: 'Kannada', level: 'Conversational', value: 65 },
  { name: 'Japanese', level: 'Conversational', value: 60 },
];

export const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'OSS Contributions', value: '4+' },
  { label: 'Shipped Projects', value: '4' },
  { label: 'Certifications', value: '3' },
];
