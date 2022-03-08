import { Box, Link, styled } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

const dataLinks = [
  { name: 'Home', href: '/' },
  { name: 'Whitepaper', href: '/' },
  { name: 'Pitch Deck', href: '/' },
  { name: 'Marketplace', href: '/' },
  { name: 'FAQs', href: '/' },
];
const dataSocialLinks = [
  { icon: '/assets/images/icon-telegram.png', href: '/', alt: 'Telegram' },
  { icon: '/assets/images/icon-discord.png', href: '/', alt: 'Discord' },
  { icon: '/assets/images/icon-twitter.png', href: '/', alt: 'Twitter' },
  { icon: '/assets/images/icon-facebook.png', href: '/', alt: 'Facebook' },
];

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <Box sx={{ maxWidth: 312, width: '100%' }}>
          <Image
            src="/assets/images/logo.png"
            width={512}
            height={512}
            layout="responsive"
            alt="logo"
            sizes="(min-width: 768px) 1024px, 100vw"
          />
        </Box>
        <Box>
          <StyledFooterTitle>QUICK LINKS</StyledFooterTitle>
          {dataLinks.map((item) => (
            <StyledFooterLink key={item.name}>
              <NextLink href={item.href} passHref>
                <Link
                  underline="none"
                  sx={{
                    color: 'colors.white',
                  }}
                >
                  {item.name}
                </Link>
              </NextLink>
            </StyledFooterLink>
          ))}
          <StyledFooterTitle sx={{ marginTop: 4 }}>Contact us:</StyledFooterTitle>
          <StyledFooterLink>
            <NextLink href="mailto:hello@lostdungeon.io" passHref>
              <Link
                underline="none"
                sx={{
                  color: 'colors.white',
                }}
              >
                hello@lostdungeon.io
              </Link>
            </NextLink>
          </StyledFooterLink>
        </Box>
        <Box>
          <StyledFooterTitle>Community & Social Channels</StyledFooterTitle>
          <Box sx={{ marginTop: 4 }}>
            {dataSocialLinks.map((item) => (
              <NextLink href={item.href} passHref key={item.icon}>
                <Link underline="none" sx={{ marginRight: 3 }}>
                  <Box sx={{ width: '52px', height: '52px' }}>
                    <Image
                      src={item.icon}
                      width={52}
                      height={52}
                      layout="responsive"
                      alt="logo"
                      sizes="(min-width: 768px) 1024px, 100vw"
                    />
                  </Box>
                </Link>
              </NextLink>
            ))}
          </Box>
          <StyledFooterTitle sx={{ marginTop: 9 }}>Join Newsletter</StyledFooterTitle>
          <Box sx={{ position: 'relative' }}>
            <StyledInput placeholder="Enter your email" />
            <StyledButton>
              <Image
                src="/assets/images/icon-send.png"
                width={26}
                height={22}
                layout="responsive"
                alt="send"
                sizes="(min-width: 768px) 1024px, 100vw"
              />
            </StyledButton>
          </Box>
        </Box>
      </StyledFooterContent>
      <StyledFooterBottom>Copyright @Lost Dungeon 2021</StyledFooterBottom>
    </StyledFooter>
  );
}

const StyledFooter = styled('div')(({ theme }) => ({
  background: 'url(/assets/images/pages/home/bg-stars.jpg)',
  backgroundRepeat: 'repeat',
  padding: theme.spacing(0, 10),
  fontFamily: `"Baloo 2"`,
}));

const StyledFooterContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  borderTop: `1px solid ${theme.palette.colors.white5}`,
  borderBottom: `1px solid ${theme.palette.colors.white5}`,
  maxWidth: 1240,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledFooterTitle = styled('h1')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(13),
  color: theme.palette.colors.secondary2,
  textTransform: 'uppercase',
}));

const StyledFooterLink = styled('h4')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(13),
  color: theme.palette.colors.white,
}));

const StyledFooterBottom = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(13),
  color: theme.palette.colors.white,
  padding: theme.spacing(5, 0),
  margin: 0,
  textAlign: 'center',
}));

const StyledInput = styled('input')(({ theme }) => ({
  height: theme.spacing(9),
  width: theme.spacing(50),
  padding: theme.spacing(0, 2),
  fontSize: theme.typography.pxToRem(13),
  background: 'transparent',
  boxShadow: 'none',
  borderRadius: 0,
  border: `1px solid ${theme.palette.colors.white5}`,
  color: theme.palette.colors.white,
  outline: 'none',
  fontFamily: `"Baloo 2"`,
}));

const StyledButton = styled('button')(({ theme }) => ({
  width: 26,
  height: 22,
  border: 'none',
  background: 'transparent',
  boxShadow: 'none',
  borderRadius: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: theme.spacing(2),
  cursor: 'pointer',
}));
