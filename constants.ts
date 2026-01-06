import { Terminal, Github, Youtube, MessageCircle, Zap, Shield, Globe, Cpu, Code, Layout } from 'lucide-react';

export const PAGES = [
  { id: 'home', label: 'Home' },
  { id: 'origin', label: 'Origin' },
  { id: 'products', label: 'Products' },
  { id: 'creator', label: 'Creator' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'policies', label: 'Policies' },
  { id: 'membership', label: 'Membership' },
  { id: 'news', label: 'News' },
  { id: 'signup', label: 'Signup' },
  { id: 'login', label: 'Login' },
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