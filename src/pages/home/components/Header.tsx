import { useState } from 'react';

import clsx from 'clsx';
import { Box, Theme, useTheme, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import Image from 'next/image';
import { HiMenu } from 'react-icons/hi';
import useIsMobile from 'utils/hooks/useIsMobile';
import { mobileMediaQuery } from 'utils/common/mediaQueries';

const Header = () => {
  const theme = useTheme();
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
    <Box
      className="bg-secondary1"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { md: 'space-between' },
        alignItems: { md: 'center' },
        height: { xs: 'auto', md: 96 },
        width: '100%',
        px: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: { xs: '100%', md: 'auto' },
          py: { xs: 2, md: 0 },
        }}
      >
        <Box sx={{ width: { xs: 56, md: 80 } }}>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={3189}
            height={2592}
            layout="responsive"
            sizes="80px"
          />
        </Box>
        <Box
          component={HiMenu}
          sx={{ display: { md: 'none' }, color: 'primary.main' }}
          onClick={toggleMenu}
        />
      </Box>
      {showMenu && (
        <Box
          component="nav"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2, md: 4.5 },
          }}
        >
          <HeaderLink href="#trailer" onClick={handleClickLink}>
            Trailer
          </HeaderLink>
          <HeaderLink href="#introduction" onClick={handleClickLink}>
            Introduction
          </HeaderLink>
          <HeaderLink href="#game-concept" onClick={handleClickLink}>
            Game Concept
          </HeaderLink>
          <HeaderLink href="#roadmap" onClick={handleClickLink}>
            Roadmap
          </HeaderLink>
          <HeaderLink href="#tokenomic" onClick={handleClickLink}>
            Tokenomic
          </HeaderLink>
          <HeaderLink href="#team" onClick={handleClickLink}>
            Team
          </HeaderLink>
          <HeaderLink href="#pitch-deck" onClick={handleClickLink}>
            Pitch Deck
          </HeaderLink>
          <HeaderLink href="#document" onClick={handleClickLink}>
            Document
          </HeaderLink>
        </Box>
      )}
      {showMenu && <MarketplaceButton>Marketplace</MarketplaceButton>}
    </Box>
  );
};

const HeaderLink = styled(Link)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
  &:hover {
    color: ${theme.palette.primary.light};
  }
`
);

const MarketplaceButton = styled('button')(
  ({ theme }) => `
  display: block;
  height: 44px;
  width: 192px;
  font-size: 1.25rem;
  margin: 0;
  text-transform: uppercase;
  background-color: ${theme.palette.primary.main};
  &:hover {
    background-color: ${theme.palette.primary.light};
  }
  ${theme.breakpoints.down('md')} {
    display: inline;
    width: 100%;
    margin: ${theme.spacing(2, 0)};
  }
`
);

export default Header;
