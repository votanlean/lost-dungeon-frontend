import React from 'react';
import { styled } from '@mui/material';

export const StyledHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  height: 80,
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: theme.spacing(4),
  width: '100%',
  padding: theme.spacing(0, 6),
}));

export const StyledTitle = styled('h1')(({ theme }) => ({
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
