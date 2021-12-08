import Image from 'next/image';

const TeamSection = () => (
  <section className="p-4 py-8 sm:py-20 min-h-screen home-bg-1 home-section-bg">
    <div className="max-w-5xl mx-auto">
      <h2 className="pb-20 text-center">
        <p className="home-heading">TEAM</p>
      </h2>
      <div className="frame-stone p-8 px-12 pb-16 -mx-24 mb-24">
        <div className="frame-paper p-16 text-main2 grid grid-cols-4 gap-8 justify-between w-full">
          {[...TEAM_DATA, ...TEAM_DATA, ...TEAM_DATA, ...TEAM_DATA].map(
            ({ avatar, name, title, experiences }, index) => (
              <Member
                avatar={avatar}
                name={name}
                title={title}
                experiences={experiences}
                key={index}
              />
            )
          )}
        </div>
      </div>
      <h2 className="pb-20 text-center">
        <p className="home-heading">ADVISORS</p>
      </h2>
      <div className="frame-stone p-8 px-12 pb-16 -mx-24">
        <div className="frame-paper p-16 text-main2 grid grid-cols-4 gap-8 justify-between w-full">
          {[...TEAM_DATA, ...TEAM_DATA, ...TEAM_DATA, ...TEAM_DATA].map(
            ({ avatar, name, title, experiences }, index) => (
              <Member
                avatar={avatar}
                name={name}
                title={title}
                experiences={experiences}
                key={index}
              />
            )
          )}
        </div>
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
    <div>
      <Image
        src={avatar}
        alt="logo"
        layout="intrinsic"
        width={250}
        height={250}
        objectFit="cover"
      />
      <p className="text-3xl">{name}</p>
      <p className="text-2xl">{title}</p>
      <ul className="list-disc">
        {experiences.map((experience) => (
          <li key={experience}>{experience}</li>
        ))}
      </ul>
    </div>
  );
};

const TEAM_DATA: IMember[] = [
  {
    avatar: '/assets/images/members/avatar.jpg',
    name: 'Edison Mai',
    title: 'CEO',
    experiences: [
      'Serial Entrepreneur',
      '15 years of experience in operating and investing',
      'Founder of LPDI',
      'Founder of Citi Golf',
      'Founder of Chef Station',
      'Chairman of Chewy Chewy',
      'Chairman of Otoke Chicken',
    ],
  },
];

export default TeamSection;
