import { Box, styled } from '@mui/material';

export default function Gameplay() {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          width: '100%',
          maxWidth: '1000px',
          mx: 'auto',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <StyledGameBg>
          <StyledIframe src="https://i.simmer.io/@KiZi/lost-dungeon-demo" />
        </StyledGameBg>
      </Box>
    </Box>
  );
}

const StyledGameBg = styled('div')({
  background: 'url(/assets/images/pages/game/game-bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center top',
  margin: '0 auto',
  width: '100%',
  position: 'relative',
  paddingTop: '56.25%',
  overflow: 'hidden',
});

const StyledIframe = styled('iframe')({
  border: '0',
  position: 'absolute',
  top: '3%',
  left: '2%',
  bottom: '0',
  right: '0',
  width: '96%',
  height: '94%',
});
