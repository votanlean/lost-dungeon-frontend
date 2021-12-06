import Head from 'next/head';
import HeroSection from './components/IntroSection';
import Section2 from './components/Section2';
import TokenAllocationSection from './components/TokenAllocationSection';
import RoadmapSection from './components/RoadmapSection';
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
    </div>
  );
}
