import { useState } from 'react';
import Image from 'next/image';
import { HiMenu } from 'react-icons/hi';
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpenMenu((current) => !current);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center md:h-24 bg-secondary1 w-full px-8">
      <div className="flex flex-row justify-between items-center w-full md:w-auto py-4 md:py-0">
        <div className="w-14 md:w-20">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={3189}
            height={2592}
            layout="responsive"
          />
        </div>
        <HiMenu className="md:hidden text-main2" onClick={toggleMenu} />
      </div>
      {isOpenMenu && (
        <nav className="flex flex-col md:flex-row gap-4 md:gap-9 text-main2">
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
      )}
      <button
        type="button"
        className="hidden md:block bg-main2 hover:bg-main1 h-11 w-48 text-white text-xl font-soup"
      >
        MARKETPLACE
      </button>
    </div>
  );
};

export default Header;
