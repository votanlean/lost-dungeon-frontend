import { Box, Button, styled } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import Image from 'next/image';
import { connect } from 'components/wallet/action';
import { StyledHeader, StyledTitle } from 'components/layout';
import LoginForm from './components/loginForm';

export default function LoginPlayfab() {
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
      <StyledTitle>Login</StyledTitle>
      <LoginForm />
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
