import Head from 'next/head';
import { Box, Button, styled, NoSsr } from '@mui/material';
import { addDays } from 'date-fns';
import Image from 'next/image';
import Countdown from 'react-countdown';
import { useWeb3React } from '@web3-react/core';
import { injected } from 'components/wallet/connectors';
import OnGoingCountdown from './components/OnGoingCountdown';
import { getCountdownString } from './helpers';
import {
  StyledCountdownTime,
  StyledCountdownTitle,
  StyledButton,
} from './components/styledComponents';

const START_DATE = new Date('2022/3/8');
const DURATION_IN_DAYS = 2;

export default function WhiteList() {
  const { active, account, activate, deactivate } = useWeb3React();
  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      // TODO: handle error properly
      console.error('Error while calling activate()', error);
    }
  };

  return (
    <>
      <Head>
        <title>White list register</title>
      </Head>
      <StyledWhiteList>
        <StyledHeader>
          <Box position="relative">
            <Image
              src="/assets/images/logo.png"
              layout="intrinsic"
              width={96}
              height={78}
              alt="logo"
            />
          </Box>

          {active ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <StyledButton disabled>
                {`${account?.substring(0, 6)}...${account?.substring(account.length - 4)}`}
              </StyledButton>
              <Button onClick={deactivate} variant="text" size="small" sx={{ color: 'white' }}>
                Disconnect
              </Button>
            </Box>
          ) : (
            <StyledButton onClick={connect}>Connect</StyledButton>
          )}
        </StyledHeader>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <StyledTitle sx={{ mb: 3 }}>Register for IDO</StyledTitle>
          <NoSsr>
            <Countdown date={START_DATE} renderer={renderStart} />
          </NoSsr>
        </Box>
      </StyledWhiteList>
    </>
  );
}

const renderStart = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    const endDate = addDays(START_DATE, DURATION_IN_DAYS);
    return <Countdown date={endDate} renderer={renderOnGoing} />;
  }
  return (
    <Box sx={{ textAlign: 'center' }}>
      <StyledCountdownTitle>Starting in:</StyledCountdownTitle>
      <StyledCountdownTime>
        {getCountdownString({ days, hours, minutes, seconds })}
      </StyledCountdownTime>
    </Box>
  );
};

const renderOnGoing = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return (
      <Box
        component="p"
        sx={{
          fontFamily: '"Baloo 2"',
          color: 'white',
          fontSize: (theme) => theme.typography.pxToRem(40),
        }}
      >
        Whitelisting has ended
      </Box>
    );
  }
  return <OnGoingCountdown days={days} hours={hours} minutes={minutes} seconds={seconds} />;
};

const StyledWhiteList = styled('div')(({ theme }) => ({
  background: 'url(/assets/images/pages/home/bg-stars.jpg)',
  backgroundRepeat: 'repeat',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(0, 0),
}));

const StyledHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: theme.spacing(4),
  width: '100%',
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
