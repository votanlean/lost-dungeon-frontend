import React from 'react';
import { Box, styled } from '@mui/material';
import { keyframes } from '@emotion/react';
import Image from 'next/image';

export default function Items() {
  return (
    <>
      <ItemsImage
        styleBox={{
          width: '170px',
          height: '130px',
          position: 'absolute',
          top: '-8%',
          left: '8%',
          zIndex: 1,
        }}
        image="/assets/images/items/Pants_25.png"
        style={{ '--i': '5s' }}
      />
      <ItemsImage
        styleBox={{
          width: '140px',
          height: '46px',
          position: 'absolute',
          top: '23%',
          left: '18%',
          zIndex: 1,
        }}
        image="/assets/images/items/Sword_v2_28.png"
        style={{ '--i': '5s' }}
      />
      <ItemsImage
        styleBox={{
          width: '90px',
          height: '148px',
          position: 'absolute',
          top: '25%',
          left: '18%',
          zIndex: 1,
        }}
        image="/assets/images/items/Untitled-1_0002_ao_.png"
        style={{ '--i': '6s' }}
      />
      <ItemsImage
        styleBox={{
          width: '115px',
          height: '163px',
          position: 'absolute',
          bottom: '18%',
          right: '6%',
          zIndex: 1,
        }}
        image="/assets/images/items/Untitled-1_0003_ao2.png"
        style={{ '--i': '5.4s' }}
      />
      <ItemsImage
        styleBox={{
          width: '76px',
          height: '70px',
          position: 'absolute',
          bottom: '19%',
          left: '26%',
          zIndex: 1,
        }}
        image="/assets/images/items/Boots_01.png"
        style={{ '--i': '5s' }}
      />
      <ItemsImage
        styleBox={{
          width: '80px',
          height: '80px',
          position: 'absolute',
          bottom: '19%',
          left: '44%',
          zIndex: 1,
        }}
        image="/assets/images/items/Shield_v2_28.png"
        style={{ '--i': '5.9s' }}
      />
      <ItemsImage
        styleBox={{
          width: '200px',
          height: '108px',
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          zIndex: 1,
        }}
        image="/assets/images/items/Untitled-1_0000_Group-4.png"
        style={{ '--i': '4.6s' }}
      />
      <ItemsImage
        styleBox={{
          width: '206px',
          height: '97px',
          position: 'absolute',
          top: '10%',
          right: '-10%',
          zIndex: 1,
        }}
        image="/assets/images/items/Sword_v2_30.png"
        style={{ '--i': '5s' }}
      />
      <ItemsImage
        styleBox={{
          width: '90px',
          height: '108px',
          position: 'absolute',
          top: '20%',
          right: '20%',
          zIndex: 1,
        }}
        image="/assets/images/items/Chest_22.png"
        style={{ '--i': '6.3s' }}
      />
      <ItemsImage
        styleBox={{
          width: '59px',
          height: '84px',
          position: 'absolute',
          top: '35%',
          right: '37%',
          zIndex: 1,
        }}
        image="/assets/images/items/Chest_68.png"
        style={{ '--i': '6.8s' }}
      />
      <ItemsImage
        styleBox={{
          width: '56px',
          height: '126px',
          position: 'absolute',
          top: '15%',
          left: '40%',
          zIndex: 1,
        }}
        image="/assets/images/items/Sword_07.png"
        style={{ '--i': '4.7s' }}
      />
      <ItemsImage
        styleBox={{
          width: '96px',
          height: '127px',
          position: 'absolute',
          top: '5%',
          left: '50%',
          zIndex: 1,
        }}
        image="/assets/images/items/Untitled-1_0001_cung.png"
        style={{ '--i': '5.1s' }}
      />
      <ItemsImage
        styleBox={{
          width: '40px',
          height: '47px',
          position: 'absolute',
          top: '5%',
          left: '45%',
          zIndex: 1,
        }}
        image="/assets/images/items/Bracer_03.png"
        style={{ '--i': '5.8s' }}
      />
    </>
  );
}

// eslint-disable-next-line prefer-arrow-callback
const ItemsImage = React.memo(function ItemsImage({
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
      <StyledItemsAnim style={style}>
        <Image
          src={image}
          layout="fill"
          alt="banner"
          sizes="(min-width: 768px) 1024px, 100vw"
          objectFit="contain"
          priority
        />
      </StyledItemsAnim>
    </Box>
  );
});

const floatingItems = keyframes`
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }

  50% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px)
  }

  to {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
`;

const StyledItemsAnim = styled('div')({
  width: '100%',
  height: '100%',
  animation: `${floatingItems} var(--i) ease-in-out infinite`,
});
