import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ReadingSection } from './components/ReadingSection';
import { Ecosystem } from './components/Ecosystem';
import { Footer } from './components/Footer';
import { Tiko } from './components/Tiko';

const App: React.FC = () => {
  const [showTiko, setShowTiko] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar onTikoClick={() => setShowTiko(true)} />
      <Tiko isOpen={showTiko} onClose={() => setShowTiko(false)} />
      
      <main>
        <Hero />
        
        {/* Intro Continuation */}
        <ReadingSection id="intro-extended" title="Building Things" variant="darker">
          <p>
            Codenyl is about building things. It does not get caught up in what people think or arguing about things. When people do not agree on something Codenyl does not try to get everyone to agree. Instead Codenyl uses these disagreements as a way to make tools.
          </p>
          <p>
            People who use Codenyl do not have to vote, on which idea is the one. They can just pick the tool that works for them. Codenyl lets people choose what they like. Over time the things that are useful are what stick around. Codenyl is focused on building and making things that people find useful.
          </p>
          <p>
            Codenyl is not, like a network it is not a forum and it is not just a bunch of random projects. Codenyl is actually a place where tools are created because they are really needed and they are shaped by how people use them. The people who make Codenyl let these tools change and get better over time without trying to control them much or making them follow some kind of strict rules.
          </p>
        </ReadingSection>

        <ReadingSection id="philosophy" title="Philosophy: Why Codenyl Exists">
          <p>
            The internet these days is really crowded with lots of platforms. These platforms are about getting your attention making you feel good about yourself and helping you get noticed. Codenyl is different it does not want to be like that. Codenyl is going in the direction it is not trying to get your attention or make you feel special it just is what it is. The people, behind Codenyl are making a choice to do things differently. They do not care about all the attention and validation that other platforms are trying to get. Codenyl is unique. It is staying that way.
          </p>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">The philosophy behind Codenyl is simple but strict:</h3>
          <ul className="list-disc pl-6 space-y-4 marker:text-indigo-500">
            <li>
              <strong>Utility over Popularity:</strong> What is important to me is that something is useful. It does not matter if a lot of people like it or not. Utility matters more, than popularity. If a thing is useful that is all that matters, not how popular it is.
            </li>
            <li>
              <strong>Participation over Identity:</strong> What is really important is that people participate. It does not matter much who they are or what they are like. Participation is the thing. People taking part in things is what matters, not what makes them different from others.
            </li>
            <li>
              <strong>Use over Explanation:</strong> What really matters is the use of something, not the explanation, behind it. The use of things is what counts, not just talking about them. Use is what makes things useful, not the explanation.
            </li>
          </ul>
          <p className="mt-6">
            Codenyl does not care about how loud you're. What it cares about is how relevant Codenyl thinks you are. Codenyl is looking for people who have something to say, not just people who are shouting the loudest. So when you are using Codenyl try to be relevant because that is what Codenyl rewards.
          </p>
          <p>
            The system is made so that tools get better because people actually use them not just because someone thinks they should. New things are added to tools to make them easier to use not to show off. The system tries to be simple and easy to understand. It only gets complicated when it really needs to. The tools improve because people use them and that is what makes them better.
          </p>
          <p>
            Codenyl does not separate people into groups that do not really exist. There are no names like supporters or premium users or inner circles. Everyone who uses Codenyl is a user of Codenyl. Some users of Codenyl write code for Codenyl. Some users of Codenyl think of ideas, for Codenyl. Some users of Codenyl give their thoughts on how Codenyl can be better. Some users of Codenyl just use the tools that Codenyl provides. The way each user of Codenyl participates is okay.
          </p>
          <p>
             When people help with development they do it because they want to. Support for development is not required to be a part of Codenyl. You do not have to help with development to use Codenyl. Codenyl is made to stay open and fair. Codenyl is built to remain open. The people who make Codenyl want it to stay grounded and not become a place where some people're more important than others. Codenyl is resistant, to becoming a hierarchy.
          </p>
        </ReadingSection>

        <ReadingSection id="origin" title="The Creator and the Origin" variant="darker">
          <p>
            Codenyl was created and started by Aaradhy Mishra, a student in class 8th and a Vibe Coder.
          </p>
          <p>
            The term student developer is not meant to limit myself, but is to make myself remember from where I started and where I'm going. It is a time when people're curious and want to learn and try new things. A lot of users are, in this same place. Codenyl was made by someone who was going through the struggles not by someone who think they know it all.
          </p>
          <p>
            I'm like a lot of people. I often wants to build things. The tools that I find are not very good. These tools are either too hard to use or they are made for people who already know what they are doing. I thought that if I can't find what I want, then why not I build it myself. Codenyl was made with of this Idea or as my frustration, with the existing tools.
          </p>
          <p>
            From the day started I wanted to make things that can get bigger and better even after I am not around. My job is not to be the person but to take care of the system and make sure it is going in the right direction. I want to be like a helper who makes sure everything is okay and that the system is working properly. My role is to make sure the system keeps growing and getting better.
          </p>
          <p>
            I want Codenyl to be community-driven, be it only 50 people, but they see Codenyl as their own as well.
          </p>
          <p>
            <strong>One thing I want to accept is that everyone loves fame, <i>me too!</i></strong>
          </p>
       </ReadingSection>

        <Ecosystem />

        <ReadingSection id="community" title="Community as Infrastructure" variant="darker">
          <p>
            Codenyl is something that people work on together. It is not something that people say they do but they actually do it. Codenyl is really driven by the community it is the people who make it what it is.
          </p>
          <p>
            There are no counts of how many people're following you no contests to see who is the most popular and no fake reasons to get people to pay attention to you. The influence of the community is subtle and not out in the open. It comes from how people use things what they say about them and what they really need from the community itself the community has an influence, on people.
          </p>
          <p>
            People make Codenyl what it is by using the things they like. They do not make Codenyl by voting for things or arguing about things. Codenyl grows when people use tools that make things easier for them. These tools get better and better. Tools that are not helpful will just fade away on their own. This way Codenyl can. Adapt without someone being, in charge of it. Codenyl stays strong because people use the tools that work well.
          </p>
          <p>
             Codenyl is not something that you have to think about all the time. Codenyl is something that you use. You do not have to know everything, about Codenyl to use it. Codenyl is made to be useful so you can just use Codenyl and get things done.
          </p>
        </ReadingSection>

        <ReadingSection id="vision" title="Goals and Direction">
          <p className="text-xl font-medium text-indigo-200">
            Codenyl’s long-term goal is not dominance through control, but relevance through usefulness.
          </p>
          <p>
            We want to be a place that people come back to because our tools really help them with their problems. They should be better, than what other people're offering. We think we will get more people to use our tools slowly over time. This will happen naturally. It will be based on what is really going on not just because it is popular.
          </p>
          <p>
            Codenyl is on purpose early. Codenyl is on purpose not finished. This is not a thing. It is the way Codenyl was made. Things that are important, like Codenyl do not get finished one time. Then never changed. Codenyl and other systems that matter will change over time with the people who use Codenyl.
          </p>
          <p>
            If Codenyl succeeds, it will not be because it shouted the loudest. It will be because it quietly worked.
          </p>
        </ReadingSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;