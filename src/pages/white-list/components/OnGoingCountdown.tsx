import { Box } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { injected } from 'components/wallet/connectors';
import { useModalsContext } from 'utils/contexts/modalsContext';
import { register, useCheckIsRegistered, getCountdownString } from '../helpers';
import { StyledCountdownTime, StyledCountdownTitle, StyledButton } from './styledComponents';

interface IProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function OnGoingCountdown({ days, hours, minutes, seconds }: IProps) {
  const { showConfirm, showSnackbar } = useModalsContext();
  const { active, account, activate } = useWeb3React();
  const { isRegistered, mutate: mutateCheckIsRegistered } = useCheckIsRegistered(account);
  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      // TODO: handle error properly
      console.error('Error while calling activate()', error);
    }
  };

  const handleClickRegister = () => {
    if (!account) {
      return;
    }
    register(account)
      .then(() => {
        showSnackbar('Registered Successfully');
        mutateCheckIsRegistered();
      })
      .catch((error) => {
        if (error.status === 409) {
          showConfirm({
            message: 'This wallet has been register already',
            hideCancel: true,
            labelConfirm: 'OK',
          });
        } else {
          console.error('error', error);
        }
      });
  };
  return (
    <Box sx={{ textAlign: 'center' }}>
      <StyledCountdownTitle>Ending in:</StyledCountdownTitle>
      <StyledCountdownTime sx={{ mb: 10 }}>
        {getCountdownString({ days, hours, minutes, seconds })}
      </StyledCountdownTime>
      {!active && <StyledButton onClick={connect}>Connect</StyledButton>}
      {isRegistered === false && (
        <StyledButton onClick={handleClickRegister}>Register</StyledButton>
      )}
      {isRegistered === true && (
        <Box
          component="p"
          sx={{
            color: 'white',
            fontSize: (theme) => theme.typography.pxToRem(32),
            fontFamily: '"Baloo 2"',
          }}
        >
          You are whitelisted.
        </Box>
      )}
    </Box>
  );
}

export default OnGoingCountdown;
