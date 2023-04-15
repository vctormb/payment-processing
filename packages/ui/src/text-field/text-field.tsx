import {
  TextField as MuiTextField,
  OutlinedTextFieldProps as MuiOutlinedTextFieldProps,
} from '@mui/material';

type Props = Omit<MuiOutlinedTextFieldProps, 'variant' | 'sx'>;

export function TextField(props: Props) {
  return (
    <MuiTextField
      {...props}
      variant="outlined"
      sx={{
        '& label.Mui-focused': {
          color: (t) => t.palette.neutral.darker,
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: (t) => t.palette.neutral.main,
            borderRadius: 4,
            borderWidth: 2,
          },
          '&:hover fieldset': {
            borderColor: (t) => t.palette.secondary.main,
            transition: (t) =>
              `${t.transitions.create(['border-color'], {
                duration: t.transitions.duration.standard,
              })}`,
          },
          '&.Mui-focused fieldset': {
            borderColor: (t) => t.palette.secondary.main,
          },
          '&.Mui-error:hover fieldset': {
            borderColor: (t) => t.palette.error.light,
          },
          '&.Mui-focused.Mui-error fieldset': {
            borderColor: (t) => t.palette.error.light,
          },
        },
      }}
    />
  );
}
