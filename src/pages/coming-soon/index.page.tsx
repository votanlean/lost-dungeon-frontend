import Head from 'next/head';
import Image from 'next/image';
import Headroom from 'react-headroom';
import { Box, Theme, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

import useIsMobile from 'utils/hooks/useIsMobile';

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <>
      <Head>
        <title>Lost Dungeon</title>
        <link rel="icon" href="/favicon.ico" />
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
          <StyledTitle sx={{ mb: 3 }}>COMING SOON</StyledTitle>
          <Link
            underline="always"
            sx={{
              color: 'primary.light',
              '&:hover': { color: 'primary.main' },
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

const StyledTitle = styled('h1')(`
  font-family: 'soup of justice';
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  font-size: 2.5rem;
  height: 120px;
  line-height: 110px;
  padding: 0 60px;
  background: url(/assets/images/button-frame.png) no-repeat;
  background-size: 100% 100%;
  @media (max-width: 768px) {
    font-size: 2rem;
    height: 80px;
    line-height: 70px;
    padding: 0 40px;
  }
`);

const StyledHome = styled('div')(`
  padding: 40px 40px 80px;
  background: url(/assets/images/pages/home/bg-stars.jpg) repeat;
`);

const StyledVideoMask = styled('div')(`
  -webkit-mask-image: url(/assets/images/pages/home/trailer-video-mask.png);
  mask-image: url(/assets/images/pages/home/trailer-video-mask.png);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat; 
  aspect-ratio: 16 / 9;
  max-width: 768px;
  width: 100%;
`);
