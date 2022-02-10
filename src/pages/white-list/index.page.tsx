import Head from 'next/head';
import { Box, Button, styled } from '@mui/material';
import Image from 'next/image';
import Countdown from 'react-countdown';

export default function WhiteList() {
  return (
    <>
      <Head>
        <title>White list register</title>
      </Head>
      <StyledWhiteList>
        <StyledHeader>
          <Box sx={{}}>
            <Image
              src="/assets/images/pages/home/intro.png"
              width="100%"
              height="100%"
              alt="intro"
            />
          </Box>
          <StyledTitle sx={{ mb: 3 }}>White list register</StyledTitle>
          <Button variant="contained">Connect metamask</Button>
        </StyledHeader>
        <Box sx={{ color: 'white', fontSize: '64px', fontFamily: 'soup of justice' }}>
          Count down for end register:
        </Box>
        <Box sx={{ color: 'white', fontSize: '64px', fontFamily: 'soup of justice' }}>
          <Countdown date={Date.now() + 100000000} />
        </Box>
        <Button variant="contained">Register</Button>
      </StyledWhiteList>
    </>
  );
}

const StyledWhiteList = styled('div')(({ theme }) => ({
  background: 'url(/assets/images/pages/home/bg-stars.jpg)',
  backgroundRepeat: 'repeat',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '50px 0px',
}));

const StyledHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '80px',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '30px',
  width: '100%',
  padding: '0px 50px',
}));

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
  color: theme.palette.colors.secondary1,
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.pxToRem(32),
    height: 80,
    lineHeight: '80px',
    padding: theme.spacing(0, 5),
  },
}));
