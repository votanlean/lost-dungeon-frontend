import React from 'react';
import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnapbarProps, Alert } from '@mui/material';

export interface SnackbarProps extends Omit<MuiSnapbarProps, 'open'> {
  severity?: 'success' | 'error' | 'warning' | 'info';
  open?: boolean;
}

function Snackbar({
  message,
  severity = 'success',
  anchorOrigin,
  ...muiSnackbarProps
}: SnackbarProps) {
  return (
    <MuiSnackbar
      autoHideDuration={6000}
      {...muiSnackbarProps}
      anchorOrigin={
        anchorOrigin || {
          vertical: 'bottom',
          horizontal: 'center',
        }
      }
    >
      <Alert elevation={6} variant="filled" severity={severity}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
}

export default Snackbar;
