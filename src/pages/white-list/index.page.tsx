import Head from 'next/head';
import { Box, Button, styled } from '@mui/material';
import Image from 'next/image';
import Countdown from 'react-countdown';
import { injected } from 'components/wallet/connectors';
import { useWeb3React } from '@web3-react/core';

export default function WhiteList() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnect = async () => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };

  const register = async () => {
    alert('register');
  };
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => {
                if (active) {
                  disconnect();
                } else {
                  connect();
                }
              }}
              variant="contained"
              sx={{
                minWidth: '200px',
              }}
            >
              {active
                ? `${account?.substring(0, 6)}...${account?.substring(account.length - 4)}`
                : 'Connect metamask'}
            </Button>
          </Box>
        </StyledHeader>
        <Box sx={{ color: 'white', fontSize: '64px', fontFamily: 'soup of justice' }}>
          Count down for end register:
        </Box>
        <Box sx={{ color: 'white', fontSize: '64px', fontFamily: 'soup of justice' }}>
          <Countdown date={Date.now() + 100000000} />
        </Box>
        <Button
          onClick={() => {
            if (active) {
              register();
            } else {
              connect();
            }
          }}
          variant="contained"
        >
          {active ? 'Register' : 'Connect metamask'}
        </Button>
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
