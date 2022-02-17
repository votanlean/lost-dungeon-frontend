import { useForm } from 'react-hook-form';
import { Box, styled } from '@mui/material';
import * as yup from 'yup';
import { useState } from 'react';

import { PlayFabClient } from 'playfab-sdk';
import { useWeb3React } from '@web3-react/core';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../InputField';

export default function RegisterForm() {
  const { account } = useWeb3React();
  const [notify, setNotify] = useState('');

  const schema = yup
    .object()
    .shape({
      email: yup.string().required().email(),
      userName: yup.string().min(3).max(20).required(),
      password: yup.string().min(6).max(100).required(),
      confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
    })
    .required();
  const form = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: any) => {
    const { email, userName, password } = data;
    const request = {
      TitleId: '2DC90',
      titleId: '2DC90',
      Email: email,
      Username: userName,
      Password: password,
      WalletAdress: account,
    };
    PlayFabClient.RegisterPlayFabUser(request, (errors, result) => {
      if (result?.code === 200) {
        setNotify('Register Success!');
      } else {
        const errorObj = errors.errorDetails;
        if (errorObj) {
          setNotify(Object.values(errorObj)[0][0]);
        }
      }
    });
  };

  return (
    <StyledForm onSubmit={form.handleSubmit(onSubmit)}>
      <InputField name="email" label="Email :" form={form} />
      <InputField name="userName" label="User name :" form={form} />
      <InputField name="password" type="password" label="Password :" form={form} />
      <InputField name="confirmPassword" type="password" label="Confirm password :" form={form} />
      <StyledSubmitInput type="submit" />
      {notify === 'Register Success!' ? (
        <Box sx={{ color: 'success.main' }}>{notify}</Box>
      ) : (
        <Box sx={{ color: 'error.main' }}>{notify}</Box>
      )}
    </StyledForm>
  );
}

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: theme.typography.pxToRem(700),
  maxWidth: theme.typography.pxToRem(700),
  justifyContent: 'center',
  border: '1px solid black',
  padding: theme.spacing(8),
  borderRadius: 8,
  marginBottom: theme.spacing(12),
  background: 'white',
}));

const StyledSubmitInput = styled('input')(({ theme }) => ({
  alignSelf: 'center',
  width: theme.typography.pxToRem(120),
  height: theme.typography.pxToRem(50),
  borderRadius: 8,
  marginTop: theme.spacing(4),
  background: 'white',
  '&:hover': {
    background: 'black',
    color: 'white',
    cursor: 'pointer',
  },
}));
