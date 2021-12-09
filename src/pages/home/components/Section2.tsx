import Image from 'next/image';

const Section2 = () => (
  <section className="p-4 py-20 min-h-screen home-bg-2 home-section-bg">
    <div className="home-content text-center">
      <h2 className="home-heading mb-12">Heroes</h2>
      <div className=" grid grid-cols-2 gap-12 ">
        <HeroItem name="Chaos" description="Every Stride is A Galaxy" />
        <HeroItem name="Titan" description="Every Breath Moves Mountain To Fill The Sea" />
        <HeroItem name="Poseidon" description="Every Move Shakes The Terrain" />
        <HeroItem name="Heroic" description="Every Muscle Fiber Hides Incomparable Power" />
      </div>
    </div>
  </section>
);

interface IHero {
  name: string;
  description: string;
}

const HeroItem = ({ name, description }: IHero) => (
  <div className="frame-stone p-8 flex flex-col items-center gap-4">
    <Image
      src="/assets/images/pages/home/hero1.jpg"
      alt="hero"
      layout="intrinsic"
      width={250}
      height={250}
      className="mx-auto"
    />
    <div className="frame-paper px-8 py-4 self-stretch">
      <p className="font-soup text-3xl text-main1">{name}</p>
      <p className="text-main2 font-bold">{description}</p>
    </div>
  </div>
);

export default Section2;
