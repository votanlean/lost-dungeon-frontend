import Image from 'next/image';
import { classnames, TArg } from 'tailwindcss-classnames';
interface IProps {
  id: string;
  className?: string;
}

const RoadmapSection = ({ id, className }: IProps) => (
  <section id={id} className={className}>
    <div className="w-full px-8 flex flex-col items-center">
      <h2 className="home-heading mx-auto mb-14">ROADMAP</h2>

      <div>
        <Image
          src="/assets/images/pages/home/road-map.png"
          alt="Game Concept"
          layout="intrinsic"
          width={1544}
          height={452}
        />
        <div className="flex flex-row justify-between">
          <Milestone milestone={ROADMAP_DATA[0]} />
          <Milestone milestone={ROADMAP_DATA[1]} style={{ marginTop: '-3%' }} />
          <Milestone milestone={ROADMAP_DATA[2]} style={{ marginTop: '-7.5%' }} />
          <Milestone milestone={ROADMAP_DATA[3]} style={{ marginTop: '-12.5%' }} />
          <Milestone milestone={ROADMAP_DATA[4]} style={{ marginTop: '-17.5%' }} />
        </div>
      </div>
    </div>
  </section>
);

interface IMilestone {
  milestone: { time?: string; items: Array<string> };
  className?: TArg;
  style?: React.CSSProperties;
}

const Milestone = ({ milestone, className, style }: IMilestone) => {
  const { time, items } = milestone;
  return (
    <div className={classnames('text-center', className)} style={{ ...style, width: '14%' }}>
      <div className="text-lg mb-2 font-medium">{time}</div>
      <ul>
        {items.map((item) => (
          <li key={item} className="text-base whitespace-pre-wrap">
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ROADMAP_DATA = [
  {
    name: 'Team setup',
    items: ['Build Game Concept', 'Design Characters', 'Build Marketing Campaign & Community'],
  },
  {
    name: 'Phase 1',
    time: '11/2021',
    items: ['Lite Paper & Pitch Deck', 'Tokenomic', 'Lite Website', 'Smart Contract'],
  },
  {
    name: 'Phase 2',
    time: '12/2021',
    items: [
      'Token Audit',
      'Landing Page',
      'Private Sales',
      'NFT Giveaway',
      'Airdrop',
      'Early Bird',
      'Trailer Release',
    ],
  },
  {
    name: 'Phase 3',
    time: '01/2022',
    items: [
      'IDO',
      'Liquidity',
      'Genesis NFTs',
      'Marketplace',
      'White Paper Release',
      'Alpha Tester Release',
      'PvE (Public Game)',
    ],
  },
  {
    name: 'Phase 4',
    time: 'Q1/2022',
    items: ['Staking', 'Craft Items', 'Rune Equipment', 'PvP'],
  },
];

export default RoadmapSection;
