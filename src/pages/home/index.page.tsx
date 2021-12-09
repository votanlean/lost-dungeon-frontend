import Head from 'next/head';
import HeroSection from './components/IntroSection';
import Section2 from './components/Section2';
import TokenAllocationSection from './components/TokenAllocationSection';
import RoadmapSection from './components/RoadmapSection';
import TeamSection from './components/TeamSection';
import PartnerSection from './components/PartnersSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lost Dungeon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Section2 />
      <TokenAllocationSection />
      <RoadmapSection />
      <TeamSection />
      <PartnerSection />

      <footer className="bg-black text-secondary1 text-center p-4">
        Copyright 2021 © Lost Dungeon
      </footer>
    </div>
  );
}
