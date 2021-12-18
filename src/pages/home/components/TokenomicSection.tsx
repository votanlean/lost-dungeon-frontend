import Image from 'next/image';

interface IProps {
  id: string;
  className?: string;
}

const GameConceptSection = ({ id, className }: IProps) => (
  <section id={id} className={className}>
    <div className="w-full px-8 flex flex-col items-center">
      <h2 className="home-heading mx-auto mb-32">TOKENOMIC</h2>
      <Image
        src="/assets/images/pages/home/tokenomic.png"
        alt="Game Concept"
        layout="intrinsic"
        width={1245}
        height={637}
      />
    </div>
  </section>
);

export default GameConceptSection;
