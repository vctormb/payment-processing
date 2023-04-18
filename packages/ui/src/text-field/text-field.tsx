import {
  TextField as MuiTextField,
  OutlinedTextFieldProps as MuiOutlinedTextFieldProps,
  styled,
} from '@mui/material';

type Props = Omit<MuiOutlinedTextFieldProps, 'variant' | 'sx'>;

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.palette.neutral.darker,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.neutral.main,
      borderRadius: 4,
      borderWidth: 2,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.neutral.dark,
      transition: `${theme.transitions.create(['border-color'], {
        duration: theme.transitions.duration.standard,
      })}`,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.neutral.dark,
    },
    '&.Mui-error:hover fieldset': {
      borderColor: theme.palette.error.light,
    },
    '&.Mui-focused.Mui-error fieldset': {
      borderColor: theme.palette.error.light,
    },
  },
}));

export function TextField(props: Props) {
  return <StyledTextField {...props} variant="outlined" />;
}
