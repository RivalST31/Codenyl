import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Calculator, Gamepad2, Utensils, Sparkles } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'mathbot',
    title: 'MathBot',
    subtitle: 'Understanding Before Answers',
    icon: Calculator,
    content: [
      "MathBot is an important tool in the Codenyl ecosystem. It helps people like you and me when we are working on math problems. MathBot makes sure we understand the problems clearly. It gives our work a good structure. It also helps us think about the problems in a way.",
      "MathBot does not just give you the answer. It shows you the steps and the logic behind it. This way you can understand how to get the answer. MathBot is here to help students and people who want to learn. It is not meant to do the thinking for you. MathBot is meant to help you think for yourself.",
      "MathBot is an example of how Codenyl thinks about making things. It gets better the more people use it. When people talk to MathBot it becomes clear what kind of explanations are really helpful what ways of showing information are easy to understand."
    ]
  },
  {
    id: 'games21',
    title: 'Games21',
    subtitle: 'Play as a System',
    icon: Gamepad2,
    content: [
      "Games21 is a place where people play games. It is part of Codenyl. The people who made Games21 think that games are not just fun they are like worlds with their own rules. Games21 is the gaming platform under Codenyl built with the belief that games are more than something to pass the time.",
      "Games21 is about making games figuring out what makes them work and designing things that people can interact with. They have a bunch of games that you can actually play and these games are at all levels so you can start with something simple and then move on to something more complicated.",
      "Games21 is really about showing you what is going on behind the scenes. It is about letting players and builders see the systems at work. You can see how the different parts of the game work how you get ahead and how the people who made the game decided to do things."
    ]
  },
  {
    id: 'foodhub',
    title: 'FoodHub',
    subtitle: 'For Mothers and New Chefs',
    icon: Utensils,
    content: [
      "FoodHub is really important to the people at Codenyl. FoodHub is for chef mothers the mothers who make food every day at home and for chefs who are just starting out trying new things and figuring out what kind of food they like to make.",
      "FoodHub wants to say that some of the cooking ideas do not come from big restaurants or special cooking schools but from the kitchens of homes where food is made with love because it has to be made.",
      "FoodHub is made to respect the knowledge that people get from doing things. It does not try to make famous people or experts look good. FoodHub is, about sharing ways of doing things, ideas and solutions that really work in kitchens where FoodHub users cook every day."
    ]
  },
  {
    id: 'sibo',
    title: 'Sibo',
    subtitle: 'The Web, Reimagined',
    icon: Sparkles,
    content: [
      "Sibo is our answer to the noise of the modern web. It is a search interface built on the belief that finding information should be calm, private, and beautiful.",
      "Unlike traditional search engines that prioritize advertisers, Sibo prioritizes you. It strips away the clutter and presents results in a clean, readable format that respects your attention span.",
      "Sibo features the signature 'Prism' interface—a fluid, colorful design that adapts to your mood while keeping the focus strictly on utility. It is not just a tool; it is a statement about how the internet should feel."
    ]
  }
];

export const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              The Codenyl Ecosystem
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Tools created because they are really needed, shaped by how people use them.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-16">
          {PRODUCTS.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 100} threshold={0.1}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start bg-slate-900/40 p-8 rounded-2xl border border-slate-800/50 hover:border-indigo-500/30 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-900/50 to-slate-800 flex items-center justify-center border border-slate-700">
                    <product.icon className={`w-8 h-8 ${product.id === 'sibo' ? 'text-purple-400' : 'text-indigo-400'}`} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${product.id === 'sibo' ? 'sibo-text' : 'text-white'}`}>{product.title}</h3>
                  <h4 className="text-lg text-indigo-400 mb-6 font-medium">{product.subtitle}</h4>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    {product.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};