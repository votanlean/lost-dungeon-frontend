import Head from 'next/head';
import Image from 'next/image';
import Headroom from 'react-headroom';
import { Box, Link, styled } from '@mui/material';

import useIsMobile from 'utils/hooks/useIsMobile';

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <>
      <Head>
        <title>Lost Dungeon</title>
      </Head>
      <StyledHome>
        <StyledVideoMask sx={{ mx: 'auto', mb: 5 }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dbbX-gKv4bA"
            title="Lost Dungeon Official Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </StyledVideoMask>
        <Box sx={{ mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StyledTitle sx={{ mb: 3 }}>Coming Soon</StyledTitle>
          <Link
            underline="always"
            sx={{
              color: 'colors.main2',
              '&:hover': { color: 'colors.main1' },
              fontSize: '1.5rem',
            }}
            href="https://docsend.com/view/v7uf3ihc9yqagiyg"
            target="__blank"
          >
            Check out the pitch deck
          </Link>
        </Box>
        <Box sx={{ width: '100%', maxWidth: 768, mx: 'auto' }}>
          <Image
            src="/assets/images/pages/home/intro.png"
            width={2314}
            height={1846}
            layout="responsive"
            alt="intro"
            sizes="(min-width: 768px) 1024px, 100vw"
          />
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
  fontSize: theme.typography.pxToRem(40),
  height: 120,
  lineHeight: '110px',
  padding: theme.spacing(0, 8),
  background: 'url(/assets/images/button-frame.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.pxToRem(32),
    height: 80,
    lineHeight: '80px',
    padding: theme.spacing(0, 5),
  },
}));

const StyledHome = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 5, 10),
  background: 'url(/assets/images/pages/home/bg-stars.jpg)',
  backgroundRepeat: 'repeat',
}));

const StyledVideoMask = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 768,
  aspectRatio: '16 / 9',
  WebkitMaskImage: 'url(/assets/images/pages/home/trailer-video-mask.png)',
  maskImage: 'url(/assets/images/pages/home/trailer-video-mask.png)',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
}));
