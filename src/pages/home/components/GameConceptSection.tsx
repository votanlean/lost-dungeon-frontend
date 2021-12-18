import Image from 'next/image';

interface IProps {
  id: string;
  className?: string;
}

const GameConceptSection = ({ id, className }: IProps) => (
  <section id={id} className={className}>
    <div className="w-full px-8 flex flex-col items-center">
      <h2 className="home-heading mx-auto mb-28">GAME CONCEPT</h2>
      <div className="grid grid-cols-2 gap-32">
        <Image
          src="/assets/images/pages/home/game-concept-1.jpg"
          alt="Game Concept"
          layout="intrinsic"
          width={671}
          height={424}
        />
        <Image
          src="/assets/images/pages/home/game-concept-2.jpg"
          alt="Game Concept"
          layout="intrinsic"
          width={671}
          height={424}
        />
        <Image
          src="/assets/images/pages/home/game-concept-3.jpg"
          alt="Game Concept"
          layout="intrinsic"
          width={671}
          height={424}
        />
        <Image
          src="/assets/images/pages/home/game-concept-4.jpg"
          alt="Game Concept"
          layout="intrinsic"
          width={671}
          height={424}
        />
      </div>
    </div>
  </section>
);

export default GameConceptSection;
