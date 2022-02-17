import { TextField, styled } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function InputField(props: any) {
  const { name, form, label, type } = props;
  const {
    formState: { errors },
  } = form;
  return (
    <StyledInputRow>
      <StyledLabel>{label}</StyledLabel>
      <Controller
        control={form.control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <TextField
            sx={{ flex: '1' }}
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched
            type={type ? type.toString() : 'text'}
            value={value} // return updated value
            ref={ref} // set ref for focus management
            error={!!errors[name]}
            helperText={errors[name]?.message}
          />
        )}
      />
    </StyledInputRow>
  );
}

const StyledLabel = styled('p')(({ theme }) => ({
  minWidth: theme.typography.pxToRem(180),
}));
const StyledInputRow = styled('div')(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(4),
}));
