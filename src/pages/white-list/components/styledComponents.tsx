import { styled } from '@mui/material';

export const StyledCountdownTitle = styled('p')(({ theme }) => ({
  color: 'white',
  fontSize: theme.typography.pxToRem(40),
  fontFamily: 'soup of justice',
  margin: 0,
}));

export const StyledCountdownTime = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(64),
  fontFamily: 'soup of justice',
  margin: 0,
  color: '#Ebdcb2',
}));

export const StyledButton = styled('button')(({ theme }) => ({
  backgroundColor: '#662e1c',
  '&:not(:disabled):hover': {
    backgroundColor: '#Af4425',
  },
  color: 'white',
  height: 44,
  fontSize: theme.typography.pxToRem(20),
  fontFamily: 'soup of justice',
  padding: theme.spacing(0, 4, 1),
  border: 'none',
  '&:not(:disabled)': {
    cursor: 'pointer',
  },
}));
