import { useState } from 'react';
import Image from 'next/image';
import { HiMenu } from 'react-icons/hi';
import useIsMobile from 'utils/hooks/useIsMobile';
const Header = () => {
  const isMobile = useIsMobile();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpenMenu((current) => !current);
  };

  const handleClickLink = () => {
    if (isMobile) {
      setIsOpenMenu(false);
    }
  };

  const showMenu = !isMobile || isOpenMenu;

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
            sizes="80px"
          />
        </div>
        <HiMenu className="md:hidden text-main2" onClick={toggleMenu} />
      </div>
      {showMenu && (
        <nav className="flex flex-col md:flex-row gap-4 md:gap-9 text-main2">
          <a className="hover:text-main1" href="#trailer" onClick={handleClickLink}>
            Trailer
          </a>
          <a className="hover:text-main1" href="#introduction" onClick={handleClickLink}>
            Introduction
          </a>
          <a className="hover:text-main1" href="#game-concept" onClick={handleClickLink}>
            Game Concept
          </a>
          <a className="hover:text-main1" href="#roadmap" onClick={handleClickLink}>
            Roadmap
          </a>
          <a className="hover:text-main1" href="#tokenomic" onClick={handleClickLink}>
            Tokenomic
          </a>
          <a className="hover:text-main1" href="#team" onClick={handleClickLink}>
            Team
          </a>
          <a className="hover:text-main1" href="#pitch-deck" onClick={handleClickLink}>
            Pitch Deck
          </a>
          <a className="hover:text-main1" href="#document" onClick={handleClickLink}>
            Document
          </a>
        </nav>
      )}
      {showMenu && (
        <button
          type="button"
          className="md:block bg-main2 hover:bg-main1 h-11 w-full md:w-48 text-white text-xl font-soup my-8 md:my-0"
        >
          MARKETPLACE
        </button>
      )}
    </div>
  );
};

export default Header;
