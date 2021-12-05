import Image from 'next/image';
const IntroSection = () => (
  <section className="p-4 h-screen bg-home-intro section-bg">
    <div className="flex flex-col items-center max-w-3xl mx-auto">
      <Image src="/images/logo-large.png" alt="logo" layout="intrinsic" width={250} height={250} />
      <div className="aspect-w-16 aspect-h-9 w-full mb-8">
        <iframe
          src="https://www.youtube.com/embed/Ma3NRsq4nzE"
          title="Lost Dungeon"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full ">
        <h2 className="flex-1 font-creepster">
          <span className="text-6xl text-gradient">BACKGROUND</span>
          <br />
          <span className="text-8xl text-gradient">STORY</span>
        </h2>
        <div className="flex-1">
          <p className="text-lg font-medium mb-2">Day 24 Moneth 12 Year 2099</p>
          <p>
            Four big technology corporations at that time plot to overthrow the global government.
            For many years, they have been silently researching and monopolizing the most advanced
            technologies: Gene Technology, Quantum Technology, Space-time Technology, Artificial
            Intelligence Technology.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
