const RoadmapSection = () => (
  <section className="p-4 py-8 sm:py-20 h-screen home-bg-2 home-section-bg">
    <div className="flex flex-col items-center max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 w-full mb-20">
        <div className="flex-1">
          <h2 className="home-heading">ROADMAP</h2>
        </div>
        <div className="flex-1">
          <div className="frame-stone p-4">
            <p className="frame-paper p-8 text-3xl uppercase text-main2">
              Check out our tentative milestone in order not to miss the chance of owning your
              precious assets in DeFiHorse.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 justify-between w-full">
        {ROADMAP_DATA.map(({ time, items, phase }) => (
          <Milestone time={time} items={items} phase={phase} key={phase} />
        ))}
      </div>
    </div>
  </section>
);

interface IProps {
  time: string;
  items: Array<string>;
  phase: number;
}

const Milestone = (props: IProps) => {
  const { time, items, phase } = props;
  return (
    <div className="flex flex-col flex-1 items-center -skew-x-6">
      <div className="rounded-full p-2 border-main1 border-4 skew-x-6 mb-12">
        <div className="rounded-full bg-white flex justify-center items-center h-12 w-12 text-3xl text-main1 font-bold">
          {phase}
        </div>
      </div>
      <div className="frame-paper text-main2 p-8  rounded flex-1">
        <div className="text-2xl mb-4 skew-x-6">{time}</div>
        <ul className="list-disc">
          {items.map((item) => (
            <li key={item} className="text-base  skew-x-6">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ROADMAP_DATA = [
  {
    phase: 1,
    time: 'Dec 2021',
    items: ['Lite paper & Pitch deck', 'Tokenomic', 'Lite Website', 'Smart contract'],
  },
  {
    phase: 2,
    time: 'Dec 2021',
    items: [
      'token audit',
      'Full website & our team',
      'Private sales',
      'NFT giveaway',
      'Airdrop',
      'Pre Public sales',
    ],
  },
  {
    phase: 3,
    time: 'Jan 2022',
    items: [
      'Public sales',
      'NFT Collectibles (Shop)',
      'Satking feature',
      'Marketplace',
      'Trailer release',
      'White paper release',
    ],
  },
  {
    phase: 4,
    time: 'Quater 1 2022',
    items: ['Alpha Test', 'PvE (Public game)', 'PvP'],
  },
];

export default RoadmapSection;
