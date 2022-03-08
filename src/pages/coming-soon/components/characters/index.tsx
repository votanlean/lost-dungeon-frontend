import React from 'react';
import { keyframes } from '@emotion/react';
import { Box, styled } from '@mui/material';
import Image from 'next/image';

export default function Characters() {
  return (
    <>
      <CharsImage
        styleBox={{
          width: '320px',
          height: '320px',
          position: 'absolute',
          left: '10%',
          transform: 'translateX(-10%)',
          zIndex: 1,
        }}
        image="/assets/images/chars/3_5.png"
        style={{ '--i': '5s' }}
      />
      <CharsImage
        styleBox={{
          width: '200px',
          height: '200px',
          position: 'absolute',
          top: 60,
          left: 0,
        }}
        image="/assets/images/chars/4_3.png"
        style={{ '--i': '6s' }}
      />
      <CharsImage
        styleBox={{
          width: '200px',
          height: '200px',
          position: 'absolute',
          top: 60,
          right: 60,
        }}
        image="/assets/images/chars/2_2.png"
        style={{ '--i': '6s' }}
      />
    </>
  );
}

// eslint-disable-next-line prefer-arrow-callback
const CharsImage = React.memo(function CharsImage({
  styleBox,
  style,
  image,
}: {
  styleBox: any;
  style?: any;
  image: string;
}) {
  return (
    <Box {...styleBox}>
      <StyledCharsAnim style={style}>
        <Image
          src={image}
          layout="fill"
          alt="banner"
          sizes="(min-width: 768px) 1024px, 100vw"
          objectFit="contain"
          priority
        />
      </StyledCharsAnim>
    </Box>
  );
});

const floatingChars = keyframes`
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }

  50% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px)
  }

  to {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
`;

const StyledCharsAnim = styled('div')({
  width: '100%',
  height: '100%',
  animation: `${floatingChars} var(--i) ease-in-out infinite`,
});
