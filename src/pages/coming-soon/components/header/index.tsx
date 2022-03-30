import { Box, Typography } from '@mui/material';
import theme from 'themes/detaultTheme';

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        bgcolor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          fontSize: 14,
          fontWeight: 400,
          color: '#ffffff',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          height: 40,
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0, 40),
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              width: 14,
              height: 16,
              background: 'url(/assets/images/header/certik.png)',
              marginRight: theme.spacing(1),
            }}
          />
          <Typography>Certik</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              width: 16,
              height: 16,
              background: 'url(/assets/images/header/coinmarketcap.png)',
              marginRight: theme.spacing(1),
            }}
          />
          <Typography>Coinmarketcap</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              width: 16,
              height: 16,
              background: 'url(/assets/images/header/pancake.png)',
              marginRight: theme.spacing(1),
            }}
          />
          <Typography>Pancakeswap</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 14,
              background: 'url(/assets/images/header/local.png)',
              marginRight: theme.spacing(1),
            }}
          />
          <Typography>Contract Address</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: theme.spacing(0, 10),
          height: 100,
          fontSize: 16,
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Box
          sx={{
            width: 114,
            height: 76,
            background: 'url(/assets/images/header/logo.png)',
            cursor: 'pointer',
          }}
        />
        <Typography
          sx={{
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          Trailer
        </Typography>
        <Typography
          sx={{
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          Introduction
        </Typography>
        <Typography
          sx={{
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          Game Concept
        </Typography>
        <Typography
          sx={{
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          NFT
        </Typography>
        <Typography
          sx={{
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          Vision
        </Typography>
        <Typography
          sx={{
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          Roadmap
        </Typography>
        <Typography
          sx={{
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          Tokenomic
        </Typography>
        <Typography
          sx={{
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          Team
        </Typography>
        <Typography
          sx={{
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          Advisor
        </Typography>
        <Typography
          sx={{
            marginRight: theme.spacing(3.5),
            cursor: 'pointer',
          }}
        >
          Partner
        </Typography>
        <Box
          sx={{
            cursor: 'pointer',
            width: 196,
            height: 48,
            background: 'url(/assets/images/header/market-place-btn.png)',
          }}
        />
      </Box>
    </Box>
  );
}
