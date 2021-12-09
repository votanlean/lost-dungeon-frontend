import Image from 'next/image';

const IntroSection = () => (
  <section className="p-4 min-h-screen pb-20 home-bg-1 home-section-bg">
    <div className="flex flex-col items-center max-w-5xl mx-auto">
      <Image
        src="/assets/images/logo-large.png"
        alt="logo"
        layout="intrinsic"
        width={250}
        height={250}
      />
      <div className="aspect-w-16 aspect-h-9 w-full mb-8">
        <iframe
          src="https://www.youtube.com/embed/f2_NrupILeQ"
          title="Lost Dungeon"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full ">
        <h2 className="flex-1">
          <p className="home-heading">
            BACKGROUND
            <br />
            STORY
          </p>
        </h2>
        <div className="frame-stone p-4 flex-1">
          <div className="frame-paper p-8 text-main2">
            <p className="text-xl font-medium mb-2">Day 24 Moneth 12 Year 2099</p>
            <p className="text-lg">
              Four big technology corporations at that time plot to overthrow the global government.
              For many years, they have been silently researching and monopolizing the most advanced
              technologies: Gene Technology, Quantum Technology, Space-time Technology, Artificial
              Intelligence Technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
