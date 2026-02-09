// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'CosmicPredator', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['CosmicPredator/gogoanimeapi'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AniMoe for AniList',
          description: 'An Unofficial Windows 10 & 11 app for AniList.co',
          imageUrl:
            'https://raw.githubusercontent.com/CosmicPredator/AniMoe/refs/heads/develop/AniMoe.App/Assets/AniMoeLogo.png',
          link: 'https://github.com/CosmicPredator/AniMoe',
        },
        {
          title: 'Chibi for AniList',
          description:
            'A lightweight anime & manga tracker CLI app powered by AniList.',
          imageUrl:
            'https://camo.githubusercontent.com/f02e3801531869c6cb071bf3890cfc48ccae24338f618b32d21ae28bc969cff4/68747470733a2f2f692e696d6775722e636f6d2f715136517330762e706e672f',
          link: 'https://chibi-cli.pages.dev',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Cosmic Predator',
    description: 'Go, .NET/C# and Rust Dev',
    imageURL: 'https://files.catbox.moe/42v44s.jpeg',
  },
  social: {
    linkedin: 'baranikumar-srinivasan-b7374b1ba',
    x: 'cosmic_predator',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'cosmic_predator',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: 'cosmic_predator',
    telegram: '',
    website: 'https://cosmicpredator.github.io',
    phone: '+91 63834 73562',
    email: 'baranikumars2003@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/13bWO2LbGxvK6ZYrL-227Ts3iLOBxM8lj/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Go',
    'Rust',
    '.NET/C#',
    'Python3',
    'Bash',
    'Powershell',
    'NATS',
    'Apache Kafka',
    'Event Driven Systems',
    'GPUI-rs',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'ChromaDB',
    'Git',
    'Docker',
    'ChatBots',
    'LLM/RAG',
    'Microsoft Azure AI Foundry',
    'Google Cloud Platform',
    'Linux/Systemd',
    'OpenShift',
    'Win32/WinRT',
    'BunJS',
    'Vite',
    'ReactJS',
    'GitHub Actions'
  ],
  experiences: [
    {
      company: 'UPS',
      position: 'Associate Applications Developer',
      from: 'Jan 2024',
      to: 'Present',
      companyLink: 'https://www.ups.com',
    },
    {
      company: 'Cognizant',
      position: 'Project Intern',
      from: 'Oct 2022',
      to: 'Jan 2023',
      companyLink: 'https://www.cognizant.com',
    },
  ],
  certifications: [
    {
      name: 'AI-102 | Microsoft Certified Azure AI Engineer Associate',
      body: 'Issued by Microsoft Corporation',
      year: 'Dec 2025',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/BaranikumarSrinivasan-6203/BC908C8D5A171ADB',
    },
    {
      name: 'GitHub Foundations',
      body: 'Issued by GitHub Inc.,',
      year: 'Mar 2025',
      link: 'https://www.credly.com/badges/9029d8ee-bac2-49fc-98f9-7b42558cb561/linked_in_profile',
    },
  ],
  educations: [
    {
      institution: 'Chennai Institute of Technology',
      degree: 'B.E. Mechatronics Engineering',
      from: '2020',
      to: '2024',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'cosmic_predator', // to hide blog section, keep it empty
    limit: 10, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-E191XCD6XV', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      // 'sunset',
      // 'caramellatte',
      // 'abyss',
      // 'silk',
      // 'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Copyright ©️ 2026-present Baranikumar Srinivasan | Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
