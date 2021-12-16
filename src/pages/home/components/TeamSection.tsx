import Image from 'next/image';

interface IProps {
  id: string;
  className?: string;
}

const TeamSection = ({ id, className }: IProps) => (
  <section id={id} className={className}>
    <div className="w-full px-8 flex flex-col items-center">
      <h2 className="home-heading mx-auto mb-36">TEAM</h2>
      <div className="w-full max-w-7xl flex flex-row justify-between">
        {TEAM_DATA.map(({ avatar, name, title, experiences }, index) => (
          <Member avatar={avatar} name={name} title={title} experiences={experiences} key={index} />
        ))}
      </div>
    </div>
  </section>
);

interface IMember {
  avatar: string;
  name: string;
  title: string;
  experiences: string[];
}

const Member = (props: IMember) => {
  const { avatar, name, title, experiences } = props;
  return (
    <div className="w-40">
      <Image src={avatar} alt="logo" layout="intrinsic" width={168} height={189} />
      <div className="relative" style={{ marginTop: -38 }}>
        <p className="text-center font-bold mb-7" style={{ fontSize: '13px' }}>
          {title}
        </p>
        <p className="text-lg text-center font-bold mb-2">{name}</p>
        <ul className="list-disc">
          {experiences.map((experience) => (
            <li key={experience} className="whitespace-pre-wrap">
              {experience}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TEAM_DATA: IMember[] = [
  {
    avatar: '/assets/images/members/ceo.png',
    name: 'Alex Vo',
    title: 'C.E.O',
    experiences: [
      'Blockchain team leader at Asia Focus Group.',
      'VBI lab NFT group’s leader.',
      '9 years  of experience in several fields: Finance, Web and Mobile development, DeFi, NFT.',
    ],
  },
  {
    avatar: '/assets/images/members/cmo.png',
    name: 'Lucas Vo',
    title: 'C.M.O',
    experiences: [
      'Blockchain team leader of AWBC - Second prize Team Google Developer Group Hackathon 2021.',
      '5 years of experience in marketing at LEGO, Lazada.',
    ],
  },
  {
    avatar: '/assets/images/members/game-director.png',
    name: 'Bruce Nguyen',
    title: 'Game Producer',
    experiences: ['5 years of experence in Game Design, Game Production (2D, 3D, VR platform).'],
  },
  {
    avatar: '/assets/images/members/game-leader.png',
    name: 'Barry Hoang',
    title: 'Tech Leader',
    experiences: ['5 years of experence in Game Development  (2D, 3D, VR platform).'],
  },
  {
    avatar: '/assets/images/members/art-director.png',
    name: 'Luna Le',
    title: 'Art Director',
    experiences: ['5 years of experience in Design, Digital Art.'],
  },
];

export default TeamSection;
