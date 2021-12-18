import Head from 'next/head';
import Headroom from 'react-headroom';
import Header from './components/Header';
import TrailerSection from './components/TrailerSection';
import IntroSection from './components/IntroSection';
import GameConceptSection from './components/GameConceptSection';
import RoadmapSection from './components/RoadmapSection';
import TokenomicSection from './components/TokenomicSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
export default function Home() {
  return (
    <>
      <Head>
        <title>Lost Dungeon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headroom>
        <Header />
      </Headroom>
      <div className="home">
        <TrailerSection id="trailer" className="mb-48" />
        <IntroSection id="introduction" className="mb-36" />
        <GameConceptSection id="game-concept" className="mb-44" />
        <RoadmapSection id="roadmap" className="mb-36" />
        <TokenomicSection id="tokenomic" className="mb-48" />
        <TeamSection id="team" className="mb-24" />
        <Footer />
      </div>
    </>
  );
}
