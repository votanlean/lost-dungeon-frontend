import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex justify-between items-center h-24 bg-secondary1 fixed w-full px-8 top-0">
      <Image
        src="/assets/images/logo-large.png"
        alt="logo"
        layout="intrinsic"
        width={96}
        height={96}
      />
      <nav className="flex gap-9 text-main2">
        <a className="hover:text-main1" href="#trailer">
          Trailer
        </a>
        <a className="hover:text-main1" href="#introduction">
          Introduction
        </a>
        <a className="hover:text-main1" href="#game-concept">
          Game Concept
        </a>
        <a className="hover:text-main1" href="#roadmap">
          Roadmap
        </a>
        <a className="hover:text-main1" href="#tokenomic">
          Tokenomic
        </a>
        <a className="hover:text-main1" href="#team">
          Team
        </a>
        <a className="hover:text-main1" href="#pitch-deck">
          Pitch Deck
        </a>
        <a className="hover:text-main1" href="#document">
          Document
        </a>
      </nav>
      <button
        type="button"
        className="bg-main2 hover:bg-main1 h-11 w-48 text-white font-bold text-xl"
      >
        Connect
      </button>
    </div>
  );
};

export default Header;
