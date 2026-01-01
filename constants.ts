import { Terminal, Github, Twitter, Linkedin, Dribbble, Zap, Shield, Globe, Cpu, Code, Layout } from 'lucide-react';

export interface KnowledgeItem {
  keywords: string[];
  text: string;
  link?: {
    label: string;
    url: string;
    color: string;
  };
}

export const NAV_LINKS = [
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Origin', href: '#origin' },
  { name: 'Ecosystem', href: '#ecosystem' },
  { name: 'Vision', href: '#vision' },
];

export const SOCIAL_LINKS = [
  { name: 'Twitter', href: '#' },
  { name: 'GitHub', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Dribbble', href: '#' },
];

export const FEATURES = [
  {
    title: 'High Performance',
    description: 'Optimized for speed and efficiency, ensuring your applications run smoothly under any load.',
    icon: Zap,
  },
  {
    title: 'Secure by Design',
    description: 'Built with security best practices from the ground up to protect your data and users.',
    icon: Shield,
  },
  {
    title: 'Global Scale',
    description: 'Deploy anywhere with our distributed infrastructure designed for global reach.',
    icon: Globe,
  },
  {
    title: 'Modern Tech Stack',
    description: 'Leveraging the latest technologies to provide a future-proof foundation for your projects.',
    icon: Cpu,
  },
  {
    title: 'Clean Code',
    description: 'Maintainable and readable codebases that make collaboration and scaling easier.',
    icon: Code,
  },
  {
    title: 'Responsive Layouts',
    description: 'Beautiful interfaces that adapt perfectly to any device or screen size.',
    icon: Layout,
  },
];

export const TESTIMONIALS = [
  {
    quote: "Codenyl transformed how we approach software development. The tools are intuitive and powerful.",
    author: "Sarah Chen",
    role: "CTO, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    quote: "The community support is unmatched. Whenever we hit a roadblock, the ecosystem had a solution ready.",
    author: "Michael Ross",
    role: "Lead Developer, Matrix Systems",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    quote: "Finally, a platform that focuses on utility and actual problem solving rather than just hype.",
    author: "Elena Rodriguez",
    role: "Product Manager, Innovate Labs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export const TIKO_KNOWLEDGE: KnowledgeItem[] = [
  {
    keywords: ['philosophy', 'believe', 'values', 'stance', 'why', 'mission'],
    text: "Philosophy? It's simple: Utility over Popularity. I care about what's useful, not what's loud. We value participation over identity—it doesn't matter who you are, but what you build.",
  },
  {
    keywords: ['origin', 'creator', 'founder', 'made', 'who', 'aaradhy'],
    text: "I was brought to life by Aaradhy Mishra, a visionary student in class 8th. He built Codenyl because existing tools were too complex or frustrating.",
  },
  {
    keywords: ['codenyl', 'what is', 'brand', 'about', 'company'],
    text: "Codenyl is a community where we build tools to solve real problems. We focus on getting things done without the noise of social validation.",
  },
  {
    keywords: ['ecosystem', 'products', 'tools', 'apps'],
    text: "Our ecosystem is diverse! We have MathBot for learning, Games21 for gaming, FoodHub for home chefs, and our beautiful search interface, Sibo.",
  },
  {
    keywords: ['mathbot', 'math', 'calculator', 'algebra', 'solve'],
    text: "MathBot isn't just a calculator. It explains the logic and steps so you actually understand the problem. It's about learning, not just cheating!",
    link: { label: "Visit MathBot", url: "https://mathnova.netlify.app", color: "cyan" }
  },
  {
    keywords: ['games21', 'game', 'play', 'gaming'],
    text: "Games21 explores games as systems. It's for players who want to see the mechanics behind the fun. The color of play is Neon Green!",
    link: { label: "Explore Games21", url: "#", color: "green" }
  },
  {
    keywords: ['foodhub', 'food', 'chef', 'cooking', 'recipe', 'kitchen'],
    text: "FoodHub celebrates home cooking. It's for the 'Chef Mothers' and beginners who cook with love. We use a spicy Vermilion color for this one.",
    link: { label: "Open FoodHub", url: "https://chefmother.netlify.app", color: "red" }
  },
  {
    keywords: ['sibo', 'search', 'engine', 'browser', 'rainbow'],
    text: "Sibo is our flagship search interface. It's designed to be calm and clutter-free, unlike the noisy web you're used to. Plus, it has that cool rainbow text!",
    link: { label: "Try Sibo Beta", url: "https://sibo-beta.netlify.app", color: "purple" }
  },
  {
    keywords: ['tiko', 'assistant', 'you', 'bot', 'character'],
    text: "I am Tiko! I'm the friendly assistant floating right here. Think of Sibo as the tool you use to search, and me as the friend you ask for help!",
  },
  {
    keywords: ['vision', 'future', 'goal', 'roadmap'],
    text: "We don't want to rule the world. We just want to be relevant. If we're useful, you'll come back. That's the vision.",
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    text: "Hello there! I'm Tiko. I live floating here at Codenyl. Ask me anything about our world!",
  },
  {
    keywords: ['community', 'people', 'users', 'join'],
    text: "Our community is our infrastructure. No popularity contests, just people building and using tools that work. You're already part of it just by being here.",
  },
  {
    keywords: ['contact', 'email', 'support', 'reach'],
    text: "We prefer to communicate through our work, but you can always find us on the social channels listed in the footer.",
  }
];

// Sibo knowledge kept for backward compatibility if needed, though Tiko is primary.
export const SIBO_KNOWLEDGE = TIKO_KNOWLEDGE;