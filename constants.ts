import { Terminal, Github, Youtube, MessageCircle, Zap, Shield, Globe, Cpu, Code, Layout } from 'lucide-react';

export const PAGES = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'origin', label: 'Origin', path: '/origin' },
  { id: 'products', label: 'Products', path: '/products' },
  { id: 'faq', label: 'FAQs', path: '/faq' },
  { id: 'creator', label: 'Creator', path: '/creator' },
  { id: 'philosophy', label: 'Philosophy', path: '/philosophy' },
  { id: 'policies', label: 'Policies', path: '/policies' },
  { id: 'membership', label: 'Membership', path: '/membership' },
  { id: 'news', label: 'News', path: '/news' },
  { id: 'signup', label: 'Signup', path: '/auth/signup' },
  { id: 'login', label: 'Login', path: '/auth/login' },
];

export const SOCIAL_LINKS = [
  { name: 'Reddit', href: '#' },
  { name: 'YouTube', href: '#' },
  { name: 'GitHub', href: '#' },
];

export const PRODUCTS_CURRENT = [
  {
    id: 'sibo',
    name: 'SIBO',
    description: 'A structured AI-based system for controlled interaction and experimentation. The flagship intelligence module.',
    link: 'https://sibo-beta.netlify.app'
  },
  {
    id: 'mathbot',
    name: 'Mathbot',
    description: 'A math-focused tool for solving and understanding problems. Built for clarity, not just answers.',
    link: 'https://mathnova.netlify.app'
  },
  {
    id: 'foodhub',
    name: 'Foodhub',
    description: 'A platform dedicated to home chef mothers and new chefs cooking at home.',
    link: 'https://chefmother.netlify.app'
  },
  {
    id: 'games21',
    name: 'Games21',
    description: 'A game ecosystem with free and premium games. The only exception where free games can be played without an account.',
    link: '#'
  },
  {
    id: 'overthinker',
    name: 'OverThinker',
    description: 'A reflective tool that challenges overthinking by structuring chaotic thoughts.',
    link: '#'
  },
  {
    id: 'caliver',
    name: 'Caliver',
    description: 'A simplified system derived from SIBO for lighter, faster use cases.',
    link: '#'
  },
  {
    id: 'toolsmith',
    name: 'Toolsmith',
    description: 'A premium tool for building, automating, and creating workflows.',
    link: '#'
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    description: 'A structured career-choosing tool that asks questions and suggests realistic paths.',
    link: '#'
  },
  {
    id: 'ragebaiter',
    name: 'RageBaiter',
    description: 'A deliberately provocative AI that never helps directly, but challenges users to think harder.',
    link: '#'
  }
];

export const PRODUCTS_UPCOMING = [
  { id: 'dev_suite', name: 'DevSuite', description: 'Integrated development environment for Codenyl apps.' },
  { id: 'net_zero', name: 'NetZero', description: 'Carbon footprint tracker for digital assets.' }
];

export const MEMBERSHIP_PLANS = [
  { name: 'Monthly', price: '₹50', features: ['Access to all tools', 'Basic Support', 'Limited Ads'] },
  { name: 'Yearly', price: '₹100', features: ['Access to all tools', 'Save 50%', 'Priority Access'] },
  { name: 'Lifetime', price: '₹200', features: ['One-time payment', 'Forever access', 'Badge on Profile'] },
  { name: 'Supportership', price: '₹400', features: ['Direct creator access', 'Early access', 'Insider updates', 'Name listed'] },
];

export const NEWS_UPDATES = [
  { date: '2024-05-20', title: 'System Architecture Upgrade', content: 'Backend latency reduced by 40%. Kill switch protocols updated.' },
  { date: '2024-05-15', title: 'SIBO Beta Launch', content: 'The structured interaction browser is now live for testing.' },
  { date: '2024-05-01', title: 'Identity Refinement', content: 'Transitioned from Code4ever to Codenyl.' },
];

export const PAGE_TEXT = {
  origin: {
    title: 'The Origin: Code-Nil',
    content: [
      "Codenyl started as an idea by Aaradhy Mishra, originally called Code4ever — a parent space for everything I build and everything I will build in the future. When I searched the name, I realized it was already common. That led to the name Codenyl.",
      "Codenyl comes from 'Code' and 'Nil'. Nil comes from Hindi and means zero.",
      "Zero does not mean nothing here. It means the user does not need to do complex things. The system does the work. The user uses the result. That’s why Codenyl can also be read as 'Code-Nil' or pronounced 'Code-Nile'.",
      "The idea is similar to how Alphabet is the parent of Google, YouTube, etc. Codenyl is the parent of its own products."
    ]
  },
  creator: {
    title: 'The Builder',
    content: [
      "Codenyl is built by a student developer named Aaradhy Mishra, but the system is intentionally designed to not feel like a 'student project'.",
      "The goal is not to impress, but to work. The creator is visible for trust, but the system should survive without personal branding.",
      "Codenyl is intentionally built slowly. Finishing things matters more than redesigning. Ugly but working is better than beautiful and unfinished. If something breaks trust, it does not ship.",
      "Success for Codenyl is not defined as virality or money. Success is defined as a signal that someone cared enough to use a tool or even give ₹1 in support."
    ]
  },
  philosophy: {
    title: 'System Philosophy',
    content: [
      "Codenyl is not built for hype, virality, or social media trends. It is built for usefulness, experimentation, and long-term systems.",
      "The core belief of Codenyl is: People have problems. People solve problems. Where? Codenyl.",
      "Codenyl is community-driven but not community-obsessed. There is no idea of 'fans', 'followers', or 'supporters' in public language. Everyone is a user. Even people who give money are still called users. The system respects usage more than praise.",
      "This does not mean Codenyl is a forum or a discussion place. Codenyl does not host endless discussions. It provides tools. The outcome is always a tool, an app, or a system — not a thread."
    ]
  },
  policies: {
    title: 'Working & Security',
    content: [
      "Codenyl works on a single account system. Users create a Codenyl account once. After that, the identity is a Codenyl identity. All tools, apps, and products connect to this single account.",
      "There is no login inside individual apps. Login happens only in the Codenyl Store. The Store acts as the identity gate. Apps trust the Store. Apps never ask for passwords.",
      "Users cannot even download or install apps without connecting to their Codenyl account. If they try, the Store shows a 'Connect to Codenyl' prompt.",
      "Security philosophy is simple: apps are never trusted, the client is never trusted, the server decides access. There is always a kill switch to disable access, payments, or features if something breaks.",
      "Payments, when introduced, will be irreversible. Ads are not the core but are accepted as reality. Ads will be limited and non-intrusive."
    ]
  }
};

export const FAQ_SECTIONS = [
  {
    title: "About Codenyl",
    items: [
      {
        q: "What exactly is Codenyl?",
        a: "Codenyl is a system that connects multiple tools, apps, and experiments under one account. It is not a single app and not a social platform. Each tool does one specific thing, but all of them live under one system."
      },
      {
        q: "Is Codenyl a company or a project?",
        a: "Codenyl is a project-based system built and maintained by a student developer. It focuses on building tools that work rather than building hype."
      },
      {
        q: "Why does Codenyl have so many different tools?",
        a: "Because problems are different. Some tools are serious, some are playful, and some exist to experiment with ideas. Codenyl does not force everything into one app."
      }
    ]
  },
  {
    title: "Accounts & Store",
    items: [
      {
        q: "What is the Codenyl Store?",
        a: "The Codenyl Store is the central place where all Codenyl apps live. It is where users browse, install, and manage tools."
      },
      {
        q: "Can I browse the Store without an account?",
        a: "Yes. You can browse apps, read descriptions, and explore without logging in."
      },
      {
        q: "Why do I need an account to install apps?",
        a: "Installing and using apps changes state. An account ensures consistency, security, and a shared system across tools."
      },
      {
        q: "Do individual apps have their own login?",
        a: "No. Login happens only once through Codenyl. Apps never ask for passwords or Google login."
      },
      {
        q: "Why does Codenyl work this way?",
        a: "This avoids multiple logins, broken sessions, and scattered identities. Everything stays under one system."
      }
    ]
  },
  {
    title: "Apps & Usage",
    items: [
      {
        q: "Can I use any app without connecting to Codenyl?",
        a: "No. Browsing is free. Using apps requires connection. The only exception is free games on the Games21 website."
      },
      {
        q: "Can I download apps and share them?",
        a: "Apps are tied to the Codenyl system. Sharing downloaded apps without access will not work."
      },
      {
        q: "Are apps web-based or real apps?",
        a: "Some tools are web-based. Some are real Android or Windows apps. Not everything will have a web version."
      }
    ]
  },
  {
    title: "Free vs Premium",
    items: [
      {
        q: "Is everything on Codenyl free?",
        a: "No. Some tools are free. Some tools are premium. Premium tools are fully locked and do not offer freemium access."
      },
      {
        q: "What does free access usually include?",
        a: "Free access allows exploration, limited usage, or specific tools. It may include ads in allowed places later."
      },
      {
        q: "What does premium access mean?",
        a: "Premium access unlocks full functionality of specific tools or the entire system, depending on the type of access."
      }
    ]
  },
  {
    title: "GS21 & G21",
    items: [
      {
        q: "What is G21?",
        a: "G21 is related only to Games21. It is used inside Games21 to unlock premium games or features."
      },
      {
        q: "What is GS21?",
        a: "GS21 is a system-wide access code system. GS21 can unlock things across Codenyl, not just Games21."
      },
      {
        q: "What is the difference between G21 and GS21?",
        a: "G21 works only inside Games21. GS21 works across the Codenyl ecosystem."
      },
      {
        q: "What are GS21 codes?",
        a: "GS21 codes are controlled access keys. They can unlock time-based membership, specific apps, or system-wide access."
      },
      {
        q: "Are GS21 codes random coupons?",
        a: "No. They are part of the access system. They are intentional, limited, and backend-controlled."
      },
      {
        q: "How can someone get GS21 codes?",
        a: "GS21 codes may be obtained through gameplay achievements, special events, direct grants, support or membership-related access, or internal distribution. Not all users will get them."
      },
      {
        q: "Are GS21 codes mandatory?",
        a: "No. They are optional. Many users will never use a GS21 code."
      }
    ]
  },
  {
    title: "Membership & Support",
    items: [
      {
        q: "What is Codenyl Membership?",
        a: "Membership unlocks access to all Codenyl tools and apps."
      },
      {
        q: "What is Supportership?",
        a: "Supportership is a way to directly support development. It includes closer access, early updates, recognition, and special tools."
      },
      {
        q: "Is support required to use Codenyl?",
        a: "No. Support is optional."
      },
      {
        q: "Are payments reversible?",
        a: "No. All payments are irreversible. This is clearly stated before any payment."
      }
    ]
  },
  {
    title: "Data, Trust & Limits",
    items: [
      {
        q: "What data does Codenyl collect?",
        a: "Basic account and preference data. This helps improve recommendations and experience."
      },
      {
        q: "Does Codenyl sell data?",
        a: "No. Data is not sold."
      },
      {
        q: "Is Codenyl using AI to spy on users?",
        a: "No. AI tools exist only where explicitly stated. No hidden tracking."
      },
      {
        q: "Can things change over time?",
        a: "Yes. Codenyl is evolving. Some tools may change, improve, or be replaced."
      },
      {
        q: "What should users NOT assume?",
        a: "Users should not assume: everything is free forever, all tools will exist forever, numbers are inflated, or features are promised on a timeline. Codenyl values honesty over promises."
      }
    ]
  }
];

export interface KnowledgeItem {
  keywords: string[];
  text: string;
  link?: {
    label: string;
    url: string;
    color?: string;
  };
}

export const TIKO_KNOWLEDGE: KnowledgeItem[] = [
  {
    keywords: ['codenyl', 'what is'],
    text: "Codenyl is a parent system under which multiple tools, apps, experiments, and products exist. It is not a single app. It is a container where different tools live under one identity."
  },
  {
    keywords: ['meaning', 'name', 'nil'],
    text: "Codenyl comes from 'Code' and 'Nil'. Nil means zero in Hindi. It means the user does zero complex work; the system handles it."
  },
  {
    keywords: ['sibo', 'search'],
    text: "SIBO is a system built for structured interaction, experimentation, and controlled AI use.",
    link: { label: 'Open SIBO', url: 'https://sibo-beta.netlify.app', color: 'indigo' }
  },
  {
    keywords: ['hello', 'hi', 'tiko'],
    text: "Hello. I am Tiko. I exist to help you navigate the Codenyl system. I am not a person, but I am here to help."
  },
  {
    keywords: ['philosophy', 'why'],
    text: "People have problems. People solve problems. Where? Codenyl. That is our core belief."
  }
];

export const SIBO_KNOWLEDGE: KnowledgeItem[] = [
  {
    keywords: ['hello', 'hi', 'sibo'],
    text: "Hello. I am SIBO, an entity within the Codenyl system designed for structured interactions."
  },
  {
    keywords: ['what is', 'sibo'],
    text: "SIBO is a system built for structured interaction, experimentation, and controlled AI use."
  }
];