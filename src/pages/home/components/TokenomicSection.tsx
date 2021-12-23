import Image from 'next/image';

interface IProps {
  id: string;
  className?: string;
}

const GameConceptSection = ({ id, className }: IProps) => (
  <section id={id} className={className}>
    <div className="w-full px-8 flex flex-col items-center">
      <h2 className="home-heading mx-auto mb-16 md:mb-32">TOKENOMIC</h2>
      <div className="flex flex-col md:flex-row items-center gap-11 md:gap-28">
        <div className="w-full flex-1">
          <Image
            src="/assets/images/pages/home/tokenomic-chart.png"
            alt="Tokenomic chart"
            layout="intrinsic"
            width={810}
            height={556}
          />
        </div>
        <div className="w-44 md:w-auto">
          <Image
            src="/assets/images/pages/home/tokenomic-legend.png"
            alt="Tokenomic chart legend"
            layout="intrinsic"
            width={351}
            height={637}
          />
        </div>
      </div>
    </div>
  </section>
);

export default GameConceptSection;
