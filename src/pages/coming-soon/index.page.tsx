import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Link, styled, Typography } from '@mui/material';
import NextLink from 'next/link';

import Footer from 'components/footer';
import theme from 'themes/detaultTheme';
import Characters from './components/characters';
import Items from './components/items';
import Header from './components/header';

const StyledPlayDemoTitle = styled('h1')(() => ({
  fontFamily: 'soup of justice',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(48),
  zIndex: 1,
  color: theme.palette.colors.secondary1,
}));

const StyledVideoMask = styled('div')({
  WebkitMaskImage: 'url(/assets/images/pages/home/trailer-video-mask.png)',
  maskImage: 'url(/assets/images/pages/home/trailer-video-mask.png)',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
});

const StyledBody = styled('div')(() => ({
  background: '#000000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export default function Home() {
  return (
    <>
      <Head>
        <title>Lost Dungeon</title>
      </Head>
      <Header />
      <StyledBody>
        <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Image
            src="/assets/images/pages/home/banner-final.png"
            layout="fill"
            alt="banner"
            sizes="(min-width: 768px) 1024px, 100vw"
            objectFit="cover"
            priority
          />
        </Box>
        <StyledPlayDemoTitle>Game trailer</StyledPlayDemoTitle>
        <Box
          sx={{
            width: 192,
            height: 41,
            background: 'url(assets/images/header/game-trailer-border-bottom.png)',
          }}
        />
        <StyledVideoMask sx={{ marginTop: theme.spacing(10), height: 552 }}>
          <iframe
            width="1000"
            height="100%"
            src="https://www.youtube.com/embed/dbbX-gKv4bA"
            title="Lost Dungeon Official Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </StyledVideoMask>
        <Box
          sx={{
            margin: theme.spacing(10),

            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            background: 'url(/assets/images/header/introduction_bg.png) no-repeat center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              background: 'url(/assets/images/header/introduction-bg-2.png) no-repeat center',
            }}
          />
          <Box
            sx={{
              zIndex: 2,
              height: 695,
              width: 695,
              position: 'absolute',
              top: -800,
              right: 0,
              background: 'url(/assets/images/header/shadow-1.png) no-repeat',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              left: 50,
              height: 200,
              width: 200,
              background: 'url(/assets/images/header/l-coin.png)',
            }}
          />
          <StyledPlayDemoTitle>Introduction</StyledPlayDemoTitle>
          <Box
            sx={{
              zIndex: 1,
              width: 192,
              height: 41,
              background: 'url(assets/images/header/game-trailer-border-bottom.png)',
            }}
          />
          <Box
            component="ul"
            sx={{
              zIndex: 1,
              width: 1000,
              color: '#ffffff',
              fontSize: 20,
              lineHeight: 2,
            }}
          >
            <Box component="li">
              Welcome to Lost Dungeon
              <br />
              Lost Dungeon (LDC) is a Play-to-Earn NFT RPG game developed on the Binance Smart Chain
              platform. Players may participate in combat using their assets to earn $LDC tokens.
              Assets are player-owned NFTs minted in the ERC-721 standard which may be traded on the
              proprietary marketplace.
            </Box>
            <Box component="li">
              Vision and mission statement
              <br />
              Our vision is for everyone, of any age, to enjoy their time playing our games and get
              the experience they deserve, while gaining a decent income doing it.Our mission is to
              create Fun to Play and Play to Earn games that bring joys and wealthiness into players
              lives. We want players to enjoy their in-game as well as real-life activities, which
              is why our blockchain gaming ecosystem is designed to provides just that.
            </Box>
            <Box component="li">
              Play to Earn
              <br />
              Lost Dungeon utilizes a Play-to-Earn model by distributing $LDC through mining and
              game activities, giving value to player NFTs by increasing their use through future
              features.NFTs may be freely traded on the marketplace for $LDC tokens, which can then
              be traded on exchanges or converted to fiat currency.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingTop: theme.spacing(10),
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            background: 'url(/assets/images/header/game-concept-bg.jpg) no-repeat center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 700,
              left: 0,
              height: 1000,
              width: 871,
              background: 'url(/assets/images/header/shadow-2.png) no-repeat center',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 1000,
              left: 0,
              height: 149,
              width: 149,
              background: 'url(/assets/images/header/stone.png) no-repeat',
            }}
          />
          <StyledPlayDemoTitle>Game concept</StyledPlayDemoTitle>
          <Box
            sx={{
              zIndex: 1,
              width: 192,
              height: 41,
              background: 'url(assets/images/header/game-trailer-border-bottom.png)',
            }}
          />
          <Box
            sx={{
              background: 'url(/assets/images/header/game-concept-img.png)',
              width: 994,
              height: 566,
            }}
          />

          <Box
            sx={{
              display: 'flex',
              marginTop: theme.spacing(10),
            }}
          >
            <Box
              sx={{
                marginRight: theme.spacing(6),
                width: 156,
                height: 88,
                background: 'url(/assets/images/header/game-concept-1.png)',
              }}
            />

            <Box
              sx={{
                marginRight: theme.spacing(6),
                width: 156,
                height: 88,
                background: 'url(/assets/images/header/game-concept-2.png)',
              }}
            />

            <Box
              sx={{
                width: 156,
                height: 88,
                background: 'url(/assets/images/header/game-concept-3.png)',
              }}
            />
          </Box>
          <StyledPlayDemoTitle>NFT Hero</StyledPlayDemoTitle>
          <Box
            sx={{
              zIndex: 1,
              width: 192,
              height: 41,
              background: 'url(assets/images/header/game-trailer-border-bottom.png)',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              marginTop: theme.spacing(10),
            }}
          >
            <Box
              sx={{
                zIndex: 1,
                width: 600,
                height: 800,
                marginRight: theme.spacing(10),
                background: 'url(/assets/images/header/hero-1-bg.png)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: theme.spacing(10, 7),
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 376,
                  height: 376,
                  background: 'url(/assets/images/hero-img-1.png)',
                }}
              />
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  color: '#ffffff',
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: theme.spacing(2),
                }}
              >
                Skill
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'url(/assets/images/hero1-skill-1.png)',
                  }}
                />

                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'url(/assets/images/hero1-skill-2.png)',
                  }}
                />

                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'url(/assets/images/hero1-skill-3.png)',
                  }}
                />

                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'url(/assets/images/hero1-skill-4.png)',
                  }}
                />
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'url(/assets/images/hero1-skill-5.png)',
                  }}
                />
              </Box>
              <Box
                sx={{
                  justifySelf: 'flex-end',
                  width: 196,
                  height: 48,
                  background: 'url(/assets/images/play-game-btn.png)',
                }}
              />
            </Box>
            <Box
              sx={{
                zIndex: 1,
                width: 600,
                height: 800,
                marginRight: theme.spacing(10),
                background: 'url(/assets/images/header/hero-2-bg.png)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: theme.spacing(10, 7),
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 376,
                  height: 376,
                  background: 'url(/assets/images/hero-img-2.png)',
                }}
              />
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  color: '#ffffff',
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: theme.spacing(2),
                }}
              >
                Skill
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'url(/assets/images/hero2-skill-1.png)',
                  }}
                />

                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'url(/assets/images/hero2-skill-2.png)',
                  }}
                />

                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'url(/assets/images/hero2-skill-3.png)',
                  }}
                />

                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'url(/assets/images/hero2-skill-4.png)',
                  }}
                />
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'url(/assets/images/hero2-skill-5.png)',
                  }}
                />
              </Box>
              <Box
                sx={{
                  justifySelf: 'flex-end',
                  width: 196,
                  height: 48,
                  background: 'url(/assets/images/play-game-btn.png)',
                }}
              />
            </Box>
          </Box>

          <StyledPlayDemoTitle>NFT Items</StyledPlayDemoTitle>
          <Box
            sx={{
              zIndex: 1,
              width: 192,
              height: 41,
              background: 'url(assets/images/header/game-trailer-border-bottom.png)',
            }}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: theme.spacing(10) }}>
            <Box
              sx={{
                marginRight: theme.spacing(1),

                width: 44,
                height: 42,
                background: 'url(/assets/images/header/arrow-left.png)',
              }}
            />
            <Box
              sx={{
                width: 192,
                marginRight: theme.spacing(1),
                height: 192,
                background: 'url(/assets/images/header/item-img.png)',
              }}
            />
            <Box
              sx={{
                width: 192,
                marginRight: theme.spacing(1),
                height: 192,
                background: 'url(/assets/images/header/item-img.png)',
              }}
            />
            <Box
              sx={{
                width: 192,
                marginRight: theme.spacing(1),
                height: 192,
                background: 'url(/assets/images/header/item-img.png)',
              }}
            />
            <Box
              sx={{
                width: 192,
                marginRight: theme.spacing(1),
                height: 192,
                background: 'url(/assets/images/header/item-img.png)',
              }}
            />
            <Box
              sx={{
                width: 192,
                marginRight: theme.spacing(1),
                height: 192,
                background: 'url(/assets/images/header/item-img.png)',
              }}
            />
            <Box
              sx={{
                width: 192,
                marginRight: theme.spacing(1),
                height: 192,
                background: 'url(/assets/images/header/item-img.png)',
              }}
            />
            <Box
              sx={{
                width: 44,
                height: 42,
                background: 'url(/assets/images/header/arrow-right.png)',
              }}
            />
          </Box>

          <StyledPlayDemoTitle>Vision</StyledPlayDemoTitle>
          <Box
            sx={{
              zIndex: 1,
              width: 192,
              height: 41,
              background: 'url(assets/images/header/game-trailer-border-bottom.png)',
            }}
          />

          <Typography
            sx={{ width: 808, textAlign: 'center', color: '#EBDCB2', marginTop: theme.spacing(5) }}
          >
            Build the long-term community that owns the game and has the freedom to play and trade
            assets across games in the open-world metaverse using VR and Blockchain technologies
          </Typography>

          <StyledPlayDemoTitle>road map</StyledPlayDemoTitle>
          <Box
            sx={{
              zIndex: 1,
              width: 192,
              height: 41,
              background: 'url(assets/images/header/game-trailer-border-bottom.png)',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              marginTop: theme.spacing(5),
            }}
          >
            <Box
              sx={{
                marginRight: theme.spacing(4),
                width: 394,
                height: 548,
                padding: theme.spacing(5, 5),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#ffffff',
                fontWeight: 400,
                background: 'url(/assets/images/roadmap-border.png)',
              }}
            >
              <StyledPlayDemoTitle
                sx={{
                  fontSize: 28,
                }}
              >
                Team setup
              </StyledPlayDemoTitle>
              <Box
                sx={{
                  width: 174,
                  height: 131,
                  background: 'url(/assets/images/roadmap-img-1.png)',
                }}
              />
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                  marginTop: 2,
                }}
              >
                Build Game Concept
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Design Characters
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Tokenomics
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Pitch Deck
              </Typography>
            </Box>

            <Box
              sx={{
                marginRight: theme.spacing(4),

                width: 394,
                height: 548,
                padding: theme.spacing(5, 5),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#ffffff',
                fontWeight: 400,
                background: 'url(/assets/images/roadmap-border.png)',
              }}
            >
              <StyledPlayDemoTitle
                sx={{
                  fontSize: 28,
                }}
              >
                phase 1
              </StyledPlayDemoTitle>
              <Box
                sx={{
                  width: 174,
                  height: 131,
                  background: 'url(/assets/images/phase1-img.png)',
                }}
              />
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                  marginTop: 2,
                }}
              >
                Trailer Release
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Landing Page
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Private Sales
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                White Paper Release
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Genesis NFT
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Early Bird
              </Typography>
            </Box>

            <Box
              sx={{
                width: 394,
                height: 548,
                padding: theme.spacing(5, 5),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#ffffff',
                fontWeight: 400,
                background: 'url(/assets/images/roadmap-border.png)',
              }}
            >
              <StyledPlayDemoTitle
                sx={{
                  fontSize: 28,
                }}
              >
                phase 2
              </StyledPlayDemoTitle>
              <Box
                sx={{
                  width: 115,
                  height: 131,
                  background: 'url(/assets/images/roadmap-img-2.png)',
                }}
              />
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                  marginTop: 2,
                }}
              >
                IDO
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Liquidity
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Marketplace
              </Typography>

              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Staking
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Alpha Teaser Release
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  marginBottom: 2,
                }}
              >
                Public Game (PvE)
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingTop: theme.spacing(10),
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            background: 'url(/assets/images/background-2.png) no-repeat center',
          }}
        >
          <StyledPlayDemoTitle>tokenomic</StyledPlayDemoTitle>
          <Box
            sx={{
              zIndex: 1,
              width: 192,
              height: 41,
              background: 'url(assets/images/header/game-trailer-border-bottom.png)',
            }}
          />

          <Box
            sx={{
              marginBottom: theme.spacing(10),

              width: 1262,
              height: 675,
              marginTop: theme.spacing(8),
              background: 'url(/assets/images/tokenomic-img.png)',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              width: 1064,
              height: 504,
              padding: theme.spacing(5, 15),
              background: 'url(/assets/images/tokenomic-border.png)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: -6,
                left: -6,
                width: 28,
                height: 28,
                background: 'url(/assets/images/border-corner.png)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: -6,
                right: -6,
                width: 28,
                height: 28,
                background: 'url(/assets/images/border-corner-2.png)',
              }}
            />

            <Box sx={{ width: '100%', height: 250, fontWeight: 400, display: 'flex' }}>
              <Box
                sx={{
                  flex: 1,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        background: 'url(/assets/images/tokenomic-1.png)',
                        marginRight: theme.spacing(0.5),
                      }}
                    />
                    <Typography>Seed Sales</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#EBDCB2',
                    }}
                  >
                    15.000.000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        background: 'url(/assets/images/tokenomic-2.png)',
                        marginRight: theme.spacing(0.5),
                      }}
                    />
                    <Typography>Ecosystem</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#EBDCB2',
                    }}
                  >
                    31.000.000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        background: 'url(/assets/images/tokenomic-3.png)',
                        marginRight: theme.spacing(0.5),
                      }}
                    />
                    <Typography>Liquidity</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#EBDCB2',
                    }}
                  >
                    15.000.000
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        background: 'url(/assets/images/tokenomic-4.png)',
                        marginRight: theme.spacing(0.5),
                      }}
                    />
                    <Typography>Play to Earn</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#EBDCB2',
                    }}
                  >
                    126.000.000
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        background: 'url(/assets/images/tokenomic-5.png)',
                        marginRight: theme.spacing(0.5),
                      }}
                    />
                    <Typography>Marketing</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#EBDCB2',
                    }}
                  >
                    30.000.000
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '100%',
                  width: '1px',
                  background: '#ffffff',
                  margin: theme.spacing(0, 10),
                }}
              />
              <Box
                sx={{
                  flex: 1,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        background: 'url(/assets/images/tokenomic-6.png)',
                        marginRight: theme.spacing(0.5),
                      }}
                    />
                    <Typography>Private Sales</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#EBDCB2',
                    }}
                  >
                    39.000.000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        background: 'url(/assets/images/tokenomic-7.png)',
                        marginRight: theme.spacing(0.5),
                      }}
                    />
                    <Typography>Early Bird</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#EBDCB2',
                    }}
                  >
                    6.000.000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        background: 'url(/assets/images/tokenomic-8.png)',
                        marginRight: theme.spacing(0.5),
                      }}
                    />
                    <Typography>IDO</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#EBDCB2',
                    }}
                  >
                    3.000.000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        background: 'url(/assets/images/tokenomic-10.png)',
                        marginRight: theme.spacing(0.5),
                      }}
                    />
                    <Typography>Adviser & Partner</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#EBDCB2',
                    }}
                  >
                    9.000.000
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        background: 'url(/assets/images/tokenomic-1.png)',
                        marginRight: theme.spacing(0.5),
                      }}
                    />
                    <Typography>Seed Sales</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#EBDCB2',
                    }}
                  >
                    15.000.000
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                height: '1px',
                width: '100%',
                background: '#ffffff',
                marginTop: theme.spacing(4),
              }}
            />

            <StyledPlayDemoTitle
              sx={{
                fontSize: 48,
              }}
            >
              Total: 300.000.000
            </StyledPlayDemoTitle>

            <Typography sx={{ fontWeight: 400, fontSize: 18, color: '#EBDCB2' }}>
              Token name: Lost Dungeon Coin
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 18, color: '#EBDCB2' }}>
              Token Symbol: LDC
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 18, color: '#EBDCB2' }}>
              Chain: BSC
            </Typography>
          </Box>
          <StyledPlayDemoTitle>team</StyledPlayDemoTitle>
          <Box
            sx={{
              zIndex: 1,
              width: 192,
              height: 41,
              background: 'url(assets/images/header/game-trailer-border-bottom.png)',
            }}
          />

          <Box
            sx={{
              width: 1300,
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: theme.spacing(10),
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: 394,
                height: 543,
                background: 'url(/assets/images/team-border.png)',
                padding: theme.spacing(8, 6),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',

                color: '#ffffff',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -6,
                  left: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner.png)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner-2.png)',
                }}
              />
              <Box
                sx={{
                  alignSelf: 'center',
                  width: 184,
                  height: 184,
                  background: 'url(/assets/images/member-1.png)',
                }}
              />
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontSize: 20,
                  marginTop: theme.spacing(2),
                }}
              >
                C.E.O
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontWeight: 400,
                  fontSize: 24,
                }}
              >
                Alex Vo
              </Typography>
              <Typography>-Product Manager at Uniqlo.</Typography>
              <Typography>- Blockchain team leader at Asia Focus Group.</Typography>
              <Typography>
                - 6 years of experience in several fields: Finance, Software development, DeFi, NFT.
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: 394,
                height: 543,
                background: 'url(/assets/images/team-border.png)',
                padding: theme.spacing(8, 6),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                color: '#ffffff',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -6,
                  left: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner.png)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner-2.png)',
                }}
              />
              <Box
                sx={{
                  alignSelf: 'center',
                  width: 184,
                  height: 184,
                  background: 'url(/assets/images/member-2.png)',
                }}
              />
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontSize: 20,
                  marginTop: theme.spacing(2),
                }}
              >
                Game Producer
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontWeight: 400,
                  fontSize: 24,
                }}
              >
                Bruce Nguyen
              </Typography>
              <Typography>
                - 5 years of experience in Game Design, Game Production (2D, 3D, VR platform).
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: 394,
                height: 543,
                background: 'url(/assets/images/team-border.png)',
                padding: theme.spacing(8, 6),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                color: '#ffffff',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -6,
                  left: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner.png)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner-2.png)',
                }}
              />
              <Box
                sx={{
                  alignSelf: 'center',
                  width: 184,
                  height: 184,
                  background: 'url(/assets/images/member-3.png)',
                }}
              />
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontSize: 20,
                  marginTop: theme.spacing(2),
                }}
              >
                Tech Leader
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontWeight: 400,
                  fontSize: 24,
                }}
              >
                Barry Hoang
              </Typography>
              <Typography>
                - 5 years of experience in Game Development (2D, 3D, VR platform).
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: 1300,
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: theme.spacing(10),
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: 394,
                height: 543,
                background: 'url(/assets/images/team-border.png)',
                padding: theme.spacing(8, 6),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',

                color: '#ffffff',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -6,
                  left: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner.png)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner-2.png)',
                }}
              />
              <Box
                sx={{
                  alignSelf: 'center',
                  width: 184,
                  height: 184,
                  background: 'url(/assets/images/member-4.png)',
                }}
              />
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontSize: 20,
                  marginTop: theme.spacing(2),
                }}
              >
                C.M.O
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontWeight: 400,
                  fontSize: 24,
                }}
              >
                Kenny Nguyen
              </Typography>
              <Typography>- 4 years of experience in crypto market research.</Typography>
              <Typography>- 6 years of experience as a back-end developer</Typography>
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: 394,
                height: 543,
                background: 'url(/assets/images/team-border.png)',
                padding: theme.spacing(8, 6),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                color: '#ffffff',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -6,
                  left: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner.png)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner-2.png)',
                }}
              />
              <Box
                sx={{
                  alignSelf: 'center',
                  width: 184,
                  height: 184,
                  background: 'url(/assets/images/member-2.png)',
                }}
              />
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontSize: 20,
                  marginTop: theme.spacing(2),
                }}
              >
                Design Director
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontWeight: 400,
                  fontSize: 24,
                }}
              >
                Lucas Vo
              </Typography>
              <Typography>- 5 years of experience in graphic design, UI/UX design</Typography>
              <Typography>- Packaging Design at LEGO</Typography>
              <Typography>- Graphic Design at Lazada</Typography>
              <Typography>- Graphic Design at DefiHorse</Typography>
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: 394,
                height: 543,
                background: 'url(/assets/images/team-border.png)',
                padding: theme.spacing(8, 6),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                color: '#ffffff',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -6,
                  left: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner.png)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  width: 28,
                  height: 28,
                  background: 'url(/assets/images/border-corner-2.png)',
                }}
              />
              <Box
                sx={{
                  alignSelf: 'center',
                  width: 184,
                  height: 184,
                  background: 'url(/assets/images/member-6.png)',
                }}
              />
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontSize: 20,
                  marginTop: theme.spacing(2),
                }}
              >
                Art Director
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'center',
                  color: '#FFDB4E',
                  fontWeight: 400,
                  fontSize: 24,
                }}
              >
                Luna Le
              </Typography>
              <Typography>- 5 years of experience in Design, Digital Art.</Typography>
            </Box>
          </Box>

          <StyledPlayDemoTitle>Advisor</StyledPlayDemoTitle>
          <Box
            sx={{
              zIndex: 1,
              width: 192,
              height: 41,
              background: 'url(assets/images/header/game-trailer-border-bottom.png)',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              marginTop: theme.spacing(5),
            }}
          >
            <Box
              sx={{
                width: 408,
                height: 502,
                marginRight: theme.spacing(2),
                background: 'url(/assets/images/advision-1.png)',
              }}
            />
            <Box
              sx={{
                width: 408,
                height: 502,
                background: 'url(/assets/images/advision-1.png)',
              }}
            />
          </Box>

          <Box
            sx={{
              paddingBottom: theme.spacing(30),
              marginTop: theme.spacing(10),
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              background: 'url(/assets/images/header/introduction_bg.png) no-repeat center',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                background: 'url(/assets/images/header/introduction-bg-2.png) no-repeat center',
              }}
            />
            <Box
              sx={{
                zIndex: 2,
                height: 695,
                width: 695,
                position: 'absolute',
                top: -800,
                right: 0,
                background: 'url(/assets/images/header/shadow-1.png) no-repeat',
              }}
            />
            <StyledPlayDemoTitle>Partner</StyledPlayDemoTitle>
            <Box
              sx={{
                zIndex: 1,
                width: 192,
                height: 41,
                background: 'url(assets/images/header/game-trailer-border-bottom.png)',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                marginTop: theme.spacing(5),
              }}
            >
              <Box
                sx={{
                  width: 342,
                  height: 128,
                  background: 'url(/assets/images/partner-1.png)',
                  marginRight: theme.spacing(5),
                }}
              />
              <Box
                sx={{
                  width: 342,
                  height: 128,
                  background: 'url(/assets/images/partner-2.png)',
                  marginRight: theme.spacing(5),
                }}
              />
              <Box
                sx={{
                  width: 342,
                  height: 128,
                  background: 'url(/assets/images/partner-3.png)',
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                marginTop: theme.spacing(5),
              }}
            >
              <Box
                sx={{
                  width: 342,
                  height: 128,
                  background: 'url(/assets/images/partner-4.png)',
                  marginRight: theme.spacing(5),
                }}
              />
              <Box
                sx={{
                  width: 342,
                  height: 128,
                  background: 'url(/assets/images/partner-5.png)',
                  marginRight: theme.spacing(5),
                }}
              />
              <Box
                sx={{
                  width: 342,
                  height: 128,
                  background: 'url(/assets/images/partner-6.png)',
                }}
              />
            </Box>
          </Box>
        </Box>
      </StyledBody>
      <Footer />
    </>
  );
}
