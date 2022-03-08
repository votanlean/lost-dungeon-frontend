import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  DialogProps,
} from '@mui/material';

export interface ConfirmDialogProps extends Omit<DialogProps, 'open'> {
  message: string;
  labelConfirm?: string;
  labelCancel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  hideCancel?: boolean;
  open?: boolean;
}

/**
 * A reusable confirmation dialog with customizable title, message, button labels
 * @param {object} props
 * @param {boolean} props.open if true, the dialog is open
 * @param {function} props.onClose Callback fired when the component requests to be closed.
 * @param {string} props.message The body message
 * @param {string} props.title The title
 * @param {string} props.labelConfirm Custom label for the Confirm button
 * @param {string} props.labelCancel Custom label for the Cancel button
 * @param {function} props.onConfirm Callback fired when the Confirm button is clicked
 * @param {function} props.onCancel Callabek fired when the Cancel button is clicked
 * @param {boolean} props.hideCancel whether display the Cancel button or not
 * @returns
 */
function ConfirmDialog({
  open = false,
  onClose,
  message,
  labelConfirm = 'Confirm',
  labelCancel = 'Cancel',
  title,
  onConfirm,
  onCancel,
  hideCancel,
  ...props
}: ConfirmDialogProps) {
  const handleClickCancel = () => {
    if (typeof onCancel === 'function') {
      onCancel();
    }
    if (typeof onClose === 'function') {
      onClose({}, 'backdropClick');
    }
  };
  const handleClickConfirm = () => {
    if (typeof onConfirm === 'function') {
      onConfirm();
    }
    if (typeof onClose === 'function') {
      onClose({}, 'backdropClick');
    }
  };
  return (
    <MuiDialog open={open} onClose={onClose} {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {!hideCancel && (
          <Button onClick={handleClickCancel} color="primary">
            {labelCancel}
          </Button>
        )}
        <Button onClick={handleClickConfirm} color="primary" variant="contained" autoFocus>
          {labelConfirm}
        </Button>
      </DialogActions>
    </MuiDialog>
  );
}

export default ConfirmDialog;
