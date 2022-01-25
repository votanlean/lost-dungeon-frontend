import { Theme } from '@mui/material';

export const mobileMediaQuery = (theme: Theme) => theme.breakpoints.down('sm');
export const desktopMediaQuery = (theme: Theme) => theme.breakpoints.up('md');
