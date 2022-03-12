import React, { createContext, FC, useRef, useContext, useCallback } from 'react';
import { SnackbarCloseReason } from '@mui/material';
import useModalState from 'utils/hooks/useModalState';
import ConfirmDialog, { ConfirmDialogProps } from './ConfirmDialog';
import Snackbar, { SnackbarProps } from './Snackbar';

interface ContextValue {
  showConfirm: (props: ConfirmDialogProps) => Promise<boolean>;
  showSnackbar: (message: string, props?: SnackbarProps) => void;
}

const defaultContextValue = {
  showConfirm: () => Promise.resolve(false),
  showSnackbar: () => {},
};

const ModalsContext = createContext<ContextValue>(defaultContextValue);

/**
 * The provider to provide nested components the ability to open a confirm dialog on demand
 */
export const ModalsProvider: FC = function ModalsProvider({ children }) {
  const confirmDialog = useConfirmDialog();
  const snackbar = useSnackbar();

  const contextValue = useRef({
    showSnackbar: snackbar.showSnackbar,
    showConfirm: confirmDialog.showConfirm,
  });

  return (
    <ModalsContext.Provider value={contextValue.current}>
      {children}
      {confirmDialog.render}
      {snackbar.render}
    </ModalsContext.Provider>
  );
};

const useConfirmDialog = () => {
  const { isOpen, data, open, close } = useModalState<ConfirmDialogProps>();
  const showConfirm = useCallback(
    async (props: ConfirmDialogProps) =>
      new Promise<boolean>((resolve) => {
        const { onClose, onConfirm, onCancel, ...rest } = props;
        const handleConfirm = () => {
          if (typeof onConfirm === 'function') {
            onConfirm();
          }
          resolve(true);
        };
        const handleCancel = () => {
          if (typeof onCancel === 'function') {
            onCancel();
          }
          resolve(false);
        };
        const handleOnClose = () => {
          if (typeof onClose === 'function') {
            onClose({}, 'backdropClick');
          }
          close(false);
        };
        open({
          onClose: handleOnClose,
          onConfirm: handleConfirm,
          onCancel: handleCancel,
          ...rest,
        });
      }),
    [close, open]
  );
  const render = data && <ConfirmDialog open={isOpen} {...data} />;
  return { showConfirm, render };
};

const useSnackbar = () => {
  const { isOpen, data, open, close } = useModalState<SnackbarProps>();
  const showSnackbar = useCallback(
    (message: string, props: SnackbarProps = {}) => {
      const { onClose, ...rest } = props;
      const handleOnClose = (
        event: Event | React.SyntheticEvent<any, Event>,
        reason: SnackbarCloseReason
      ) => {
        if (typeof onClose === 'function') {
          onClose(event, reason);
        }
        close(false);
      };
      open({
        onClose: handleOnClose,
        ...rest,
        message,
      });
    },
    [open, close]
  );
  const dataCy = data?.severity === 'error' ? 'snackbar-error' : 'snackbar-success';
  const render = <Snackbar open={isOpen} {...data} data-cy={dataCy} />;
  return { showSnackbar, render };
};

export const useModalsContext = () => useContext(ModalsContext);
