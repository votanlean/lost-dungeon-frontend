import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Box, styled } from '@mui/material';

import Characters from './components/characters';
import Items from './components/items';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lost Dungeon</title>
      </Head>
      <StyledHome>
        <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Image
            src="/assets/images/pages/home/banner-final.png"
            layout="fill"
            alt="banner"
            sizes="(min-width: 768px) 1024px, 100vw"
            objectFit="cover"
            priority
          />
        </Box>
        <Box sx={{ width: '100%', height: '400px', position: 'relative', marginTop: '-200px' }}>
          <Image
            src="/assets/images/pages/home/banner-bottom.png"
            layout="fill"
            alt="banner"
            sizes="(min-width: 768px) 1024px, 100vw"
            objectFit="cover"
            priority
          />
          <StyledPlayDemoTitle>Play demo</StyledPlayDemoTitle>
        </Box>
        <StyledBg>
          <Box sx={{ display: 'flex', maxWidth: '1100px', mx: 'auto' }}>
            <StyledLostDungeon>
              <b style={{ color: '#EBDCB2' }}>Lost Dungeon</b> is a fully decentralized auto-battle
              RPG. Players can play-to-earn, mine, and own the game.
            </StyledLostDungeon>
            <StyledVideoMask sx={{ mx: 'auto' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dbbX-gKv4bA"
                title="Lost Dungeon Official Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </StyledVideoMask>
          </Box>
          <Box
            sx={{
              maxWidth: 1100,
              mt: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mx: 'auto',
            }}
          >
            <StyledTitle sx={{ mb: 8 }}>Nfts</StyledTitle>
            <StyledNftBox>
              <StyledNft sx={{ position: 'relative' }}>
                <StyledNftTitle>Items</StyledNftTitle>
                <Items />
              </StyledNft>
              <StyledNft sx={{ position: 'relative' }}>
                <StyledNftTitle>Adventurers</StyledNftTitle>
                <Characters />
              </StyledNft>
            </StyledNftBox>
            <StyledDesc sx={{ marginTop: 8 }}>
              Players can farm NFTs from dungeons to trade on the marketplace
            </StyledDesc>
          </Box>
        </StyledBg>
        <Box sx={{ mt: -23.75, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StyledTitle sx={{ mb: 8 }}>gameplay</StyledTitle>
          <Box
            sx={{
              width: '100%',
              maxWidth: 1100,
              mx: 'auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridColumnGap: '100px',
            }}
          >
            <Box sx={{ maxWidth: 685, width: '100%' }}>
              <Image
                src="/assets/images/pages/home/battleui.png"
                width={685}
                height={386}
                layout="responsive"
                alt="intro"
                sizes="(min-width: 768px) 1024px, 100vw"
              />
            </Box>
            <Box sx={{ maxWidth: 685, width: '100%' }}>
              <Image
                src="/assets/images/pages/home/battleui.png"
                width={685}
                height={386}
                layout="responsive"
                alt="intro"
                sizes="(min-width: 768px) 1024px, 100vw"
              />
            </Box>
          </Box>
          <StyledDesc sx={{ marginTop: 8 }}>
            Overcome undead enemies and traps to earn random rewards. Fight the boss battle to earn
            enormous tokens and exclusive NFT items.
          </StyledDesc>
        </Box>
        <Box sx={{ mt: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StyledTitle sx={{ mb: 8 }}>team</StyledTitle>
          <Box sx={{ position: 'relative', maxWidth: '1100px', width: '100%', height: '376px' }}>
            <Image
              src="/assets/images/pages/home/team.png"
              layout="fill"
              alt="team"
              sizes="(min-width: 768px) 1024px, 100vw"
              objectFit="contain"
              objectPosition="top"
            />
          </Box>
          <StyledVision>Our Vision</StyledVision>
          <StyledDesc>
            Build the long-term community that owns the game and has the freedom to play and trade
            assets across games in the open-world metaverse using VR and Blockchain technologies
          </StyledDesc>
        </Box>
        <Box
          sx={{
            mt: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '1100px',
            mx: 'auto',
          }}
        >
          <StyledTitle sx={{ mb: 8 }}>roadmap</StyledTitle>
          <Box sx={{ position: 'relative', width: '100%', height: '470px' }}>
            <Image
              src="/assets/images/pages/home/roadmap.png"
              layout="fill"
              alt="roadmap"
              sizes="(min-width: 768px) 1024px, 100vw"
            />
          </Box>
        </Box>
      </StyledHome>
    </>
  );
}

const StyledTitle = styled('h1')(({ theme }) => ({
  fontFamily: 'soup of justice',
  textAlign: 'center',
  display: 'inline-block',
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(36),
  width: 400,
  height: 120,
  lineHeight: '100px',
  padding: theme.spacing(0, 8),
  background: 'url(/assets/images/pages/home/nft-button.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  color: theme.palette.colors.secondary1,
  margin: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.pxToRem(32),
    height: 80,
    lineHeight: '80px',
    padding: theme.spacing(0, 5),
  },
}));

const StyledHome = styled('div')(({ theme }) => ({
  background: 'url(/assets/images/pages/home/bg-stars.jpg)',
  backgroundRepeat: 'repeat',
  paddingBottom: theme.spacing(13),
  fontFamily: `"Baloo 2"`,
}));

const StyledVideoMask = styled('div')({
  width: '100%',
  WebkitMaskImage: 'url(/assets/images/pages/home/trailer-video-mask.png)',
  maskImage: 'url(/assets/images/pages/home/trailer-video-mask.png)',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
});

const StyledPlayDemoTitle = styled('h1')(({ theme }) => ({
  fontFamily: 'soup of justice',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(48),
  position: 'relative',
  zIndex: 1,
  lineHeight: '320px',
  color: theme.palette.colors.secondary1,
}));

const StyledLostDungeon = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(53),
  color: theme.palette.colors.white,
  maxWidth: '428px',
  margin: '0 50px 0 0',
}));

const StyledNft = styled('div')({
  background: 'url(/assets/images/pages/home/nft-frame.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  maxWidth: 615,
  width: '100%',
  aspectRatio: '5 / 4',
});

const StyledNftBox = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: '100px',
  width: '100%',
  maxWidth: '1400px',
});

const StyledDesc = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(24),
  color: theme.palette.colors.secondary1,
  margin: 0,
  maxWidth: 1000,
  textAlign: 'center',
}));

const StyledVision = styled('h1')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(23),
  color: theme.palette.colors.secondary1,
  marginTop: theme.spacing(4),
  marginBottom: 0,
}));

const StyledBg = styled('div')(({ theme }) => ({
  background: 'url(/assets/images/pages/home/bg-bellow-banner.png)',
  marginTop: -200,
  paddingTop: 240,
  paddingBottom: theme.spacing(43.75),
}));

const StyledNftTitle = styled('h1')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  margin: 0,
  color: theme.palette.colors.secondary1,
  position: 'absolute',
  bottom: theme.spacing(3),
  left: '50%',
  transform: 'translateX(-50%)',
}));
