import { Box, Link, styled, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import theme from 'themes/detaultTheme';

export default function Footer() {
  return (
    <Box
      sx={{
        background: 'url(/assets/images/footer-bg.png) no-repeat',
        position: 'relative',
        width: '100%',
        height: 866,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.spacing(8),
        justifyContent: 'space-evenly',
        fontFamily: 'Baloo 2',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          background: 'url(/assets/images/footer-bg-shadow.png)',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
      <Box
        sx={{
          zIndex: 1,
          width: 371,
          height: 332,
          background: 'url(/assets/images/footer-logo.png)',
        }}
      />
      <Typography
        sx={{
          zIndex: 1,
          color: '#F0B83D',
          fontSize: 32,
          fontFamily: 'Baloo 2',
        }}
      >
        QUICK LINKS
      </Typography>
      <Box
        sx={{
          width: '400px',
          zIndex: 1,
          display: 'flex',
          color: '#FFFFFF',
          justifyContent: 'space-between',
          fontSize: 22,
          fontWeight: 400,
        }}
      >
        <Typography sx={{}}>Home</Typography>
        <Typography>Whitepaper</Typography>
        <Typography>Pitch Deck</Typography>
        <Typography>Marketplace</Typography>
      </Box>

      <Typography
        sx={{
          zIndex: 1,
          color: '#F0B83D',
          fontSize: 32,
          fontFamily: 'Baloo 2',
        }}
      >
        CONTACT US
      </Typography>

      <Typography
        sx={{
          zIndex: 1,
          fontFamily: 'Baloo 2',
          color: '#ffffff',
        }}
      >
        hello@lostdungeon.io
      </Typography>
      <Typography
        sx={{
          zIndex: 1,
          color: '#F0B83D',
          fontSize: 32,
          textTransform: 'uppercase',
          fontFamily: 'Baloo 2',
        }}
      >
        Community & Social Channels
      </Typography>
      <Box
        sx={{
          zIndex: 1,
          display: 'flex',
          width: 600,
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              background: 'url(/assets/images/comunicate-1.png)',
            }}
          />
          <Typography sx={{ color: '#ffffff', marginTop: theme.spacing(2), fontFamily: 'Baloo 2' }}>
            telegram
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              background: 'url(/assets/images/comunicate-1.png)',
            }}
          />
          <Typography sx={{ color: '#ffffff', marginTop: theme.spacing(2), fontFamily: 'Baloo 2' }}>
            Discord
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              background: 'url(/assets/images/comunicate-1.png)',
            }}
          />
          <Typography sx={{ color: '#ffffff', marginTop: theme.spacing(2), fontFamily: 'Baloo 2' }}>
            Facebook
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              background: 'url(/assets/images/comunicate-1.png)',
            }}
          />
          <Typography sx={{ color: '#ffffff', marginTop: theme.spacing(2), fontFamily: 'Baloo 2' }}>
            Twitter
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              background: 'url(/assets/images/comunicate-1.png)',
            }}
          />
          <Typography sx={{ color: '#ffffff', marginTop: theme.spacing(2) }}>Youtube</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              background: 'url(/assets/images/comunicate-1.png)',
            }}
          />
          <Typography sx={{ color: '#ffffff', marginTop: theme.spacing(2) }}>Medium</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              background: 'url(/assets/images/comunicate-1.png)',
            }}
          />
          <Typography sx={{ color: '#ffffff', marginTop: theme.spacing(2) }}>Reddit</Typography>
        </Box>
      </Box>
    </Box>
  );
}
