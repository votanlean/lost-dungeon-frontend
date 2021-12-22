import Image from 'next/image';
import { ROADMAP_DATA } from './RoadmapSection';

interface IProps {
  id: string;
  className?: string;
}

const MobileRoadmapSection = ({ id, className }: IProps) => {
  return (
    <section id={id} className={className}>
      <div className="w-full px-8 flex flex-col items-center">
        <h2 className="home-heading mx-auto mb-14">ROADMAP</h2>

        <div>
          <div className="flex flex-col items-center gap-10">
            <Milestone milestone={ROADMAP_DATA[0]} icon={ICONS[0]} />
            <Milestone milestone={ROADMAP_DATA[1]} icon={ICONS[1]} />
            <Milestone milestone={ROADMAP_DATA[2]} icon={ICONS[2]} />
            <Milestone milestone={ROADMAP_DATA[3]} icon={ICONS[3]} />
            <Milestone milestone={ROADMAP_DATA[4]} icon={ICONS[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface IMilestoneProps {
  milestone: { name: string; time?: string; items: Array<string> };
  icon: { src: string; width: number; height: number };
}

const Milestone = ({ icon, milestone }: IMilestoneProps) => {
  const { src, width, height } = icon;
  const { name, items, time } = milestone;

  return (
    <div className="w-60 flex flex-col items-center">
      <div className="w-32">
        <Image src={src} width={width} height={height} alt={milestone.name} />
      </div>
      <div className="home-roadmap-phase mb-4">{name}</div>
      <div className="text-lg mb-2 font-medium">{time}</div>
      <ul className="text-center">
        {items.map((item) => (
          <li key={item} className="text-base whitespace-pre-wrap">
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ICONS = [
  {
    src: '/assets/images/pages/home/roadmap-icon-1.png',
    width: 2000,
    height: 1495,
  },
  {
    src: '/assets/images/pages/home/roadmap-icon-2.png',
    width: 1000,
    height: 745,
  },
  {
    src: '/assets/images/pages/home/roadmap-icon-3.png',
    width: 1000,
    height: 1149,
  },
  {
    src: '/assets/images/pages/home/roadmap-icon-4.png',
    width: 1000,
    height: 845,
  },
  {
    src: '/assets/images/pages/home/roadmap-icon-5.png',
    width: 2000,
    height: 1563,
  },
];

export default MobileRoadmapSection;
