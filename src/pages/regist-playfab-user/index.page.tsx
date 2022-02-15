import { Button } from '@mui/material';
import { useState } from 'react';
import { PlayFabClient } from 'playfab-sdk';
// import { StyledHeader } from 'components/layout/index';

export default function RegisterPlayfabUser() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const HandleClickRegister = () => {
    const request = {
      TitleId: '2DC90',
      titleId: '2DC90',
      Email: userName,
      Password: password,
      RequireBothUsernameAndEmail: false,
    };
    PlayFabClient.RegisterPlayFabUser(request, () => {});
  };
  return (
    <div>
      <h1>Register playfab user</h1>
      <input
        type="text"
        placeholder="user"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={HandleClickRegister}>register</Button>
    </div>
  );
}
