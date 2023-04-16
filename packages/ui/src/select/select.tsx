import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  MenuItem as MuiMenuItem,
  InputLabel as MuiInputLabel,
  FormControl as MuiFormControl,
  styled,
} from '@mui/material';
import { useState } from 'react';

type Props = {
  options: Array<{ value: string; label: string }>;
  onChange: (val: string) => void;
} & Omit<MuiSelectProps, 'variant' | 'onChange' | 'value' | 'sx'>;

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  minWidth: 200,
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.neutral.main,
    borderRadius: 4,
    borderWidth: 2,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.neutral.dark,
    transition: `${theme.transitions.create(['border-color'], {
      duration: theme.transitions.duration.standard,
    })}`,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.neutral.dark,
  },
  '&.Mui-error:hover fieldset': {
    borderColor: theme.palette.error.light,
  },
  '&.Mui-focused.Mui-error fieldset': {
    borderColor: theme.palette.error.light,
  },
}));

export function Select({ options, onChange, label, labelId, ...props }: Props) {
  const [value, setValue] = useState('');

  function handleChange(selectedValue: string) {
    setValue(selectedValue);
    onChange(selectedValue);
  }

  return (
    <MuiFormControl>
      <MuiInputLabel
        id={labelId}
        sx={{
          '&.Mui-focused': {
            color: (t) => t.palette.neutral.darker,
          },
        }}
      >
        {label}
      </MuiInputLabel>
      <StyledSelect
        {...props}
        label={label}
        labelId={labelId}
        onChange={(e) => handleChange(e.target.value as string)}
        value={value}
      >
        {options.map((option) => (
          <MuiMenuItem key={option.value} value={option.value}>
            {option.label}
          </MuiMenuItem>
        ))}
      </StyledSelect>
    </MuiFormControl>
  );
}
