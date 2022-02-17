import { useForm } from 'react-hook-form';
import { Box, styled } from '@mui/material';
import * as yup from 'yup';
import { PlayFabClient } from 'playfab-sdk';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../InputField';

export default function LoginForm() {
  const [notify, setNotify] = useState('');
  const schema = yup
    .object()
    .shape({
      userName: yup.string().min(3).max(20).required(),
      password: yup.string().min(6).max(100).required(),
    })
    .required();
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const onSubmit = async (data: any) => {
    const { userName, password } = data;
    const request = {
      TitleId: '2DC90',
      titleId: '2DC90',
      Username: userName,
      Password: password,
    };
    await PlayFabClient.LoginWithPlayFab(request, (errors, result) => {
      if (result?.code === 200) {
        setNotify('Login Success!');
      } else {
        setNotify(errors.errorMessage);
      }
    });
  };

  return (
    <StyledForm onSubmit={form.handleSubmit(onSubmit)}>
      <InputField name="userName" label="User name :" form={form} />
      <InputField name="password" type="password" label="Password :" form={form} />
      <StyledSubmitInput type="submit" />
      {notify === 'Login Success!' ? (
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
