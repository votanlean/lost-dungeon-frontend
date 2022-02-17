import { Box, Button } from '@mui/material';
import Image from 'next/image';
import { useWeb3React } from '@web3-react/core';
import { styled } from '@mui/styles';
import { StyledHeader, StyledTitle } from 'components/layout';
import { connect } from 'components/wallet/action';
import RegisterForm from './components/registerForm';

export default function RegisterPlayfabUser() {
  const { active, account, activate, deactivate } = useWeb3React();
  return (
    <StyledBody>
      <StyledHeader>
        <Box sx={{}}>
          <Image src="/assets/images/pages/home/intro.png" width="100%" height="100%" alt="intro" />
        </Box>

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
                deactivate();
              } else {
                connect(activate);
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
      <StyledTitle>Register</StyledTitle>
      <RegisterForm />
    </StyledBody>
  );
}

const StyledBody = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'url(/assets/images/pages/home/bg-stars.jpg)',
}));
