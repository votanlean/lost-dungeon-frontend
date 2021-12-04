import Head from 'next/head';
import HeroSection from './components/IntroSection';
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Lost Dungeon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
    </div>
  );
}
