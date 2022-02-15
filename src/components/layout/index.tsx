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
