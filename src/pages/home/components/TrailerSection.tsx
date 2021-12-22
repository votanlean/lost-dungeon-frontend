import Image from 'next/image';
import clsx from 'clsx';
interface IProps {
  id: string;
  className?: string;
}

const TrailerSection = ({ id, className }: IProps) => (
  <section id={id} className={clsx('pt-8', className)}>
    <div className="w-full flex flex-col items-center px-4">
      <div className="w-full max-w-5xl mb-12 md:mb-24">
        <h2 className="mb-5 font-soup text-2xl">GAME TRAILER</h2>
        <div className="aspect-w-16 aspect-h-9 w-full home-video-mask">
          <iframe
            src="https://www.youtube.com/embed/v924Wam83Dk"
            title="Lost Dungeon"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="max-w-6xl">
        <Image
          src="/assets/images/pages/home/intro.png"
          width={2314}
          height={1846}
          layout="intrinsic"
          alt="intro"
          sizes="1024px"
        />
      </div>
    </div>
  </section>
);

export default TrailerSection;
