import { ReactNode } from 'react';
import {
  Box,
  Typography,
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
  useRadioGroup,
  styled,
} from '@mui/material';
import { CheckIcon } from '../icons';

type RadioGroupSectionProps = {
  children: ReactNode;
  title: string;
};

export function RadioGroupSection({ children, title }: RadioGroupSectionProps) {
  return (
    <Box position="relative" marginTop={17}>
      <Box
        position="absolute"
        zIndex={2}
        top={-16}
        left={16}
        display="inline-block"
        bgcolor={(t) => t.palette.neutral.main}
        borderRadius={9999}
        px={10}
      >
        <Typography
          component="span"
          fontSize={18}
          fontWeight={800}
          color={(t) => t.palette.neutral.darker}
        >
          {title}
        </Typography>
      </Box>
      <div>{children}</div>
    </Box>
  );
}

const RadioIcon = styled('span')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50%',
  width: 26,
  height: 26,
  backgroundColor: theme.palette.white.main,
  border: `2px solid ${theme.palette.neutral.main}`,
}));

const RadioCheckedIcon = styled(RadioIcon)(({ theme }) => ({
  position: 'relative',
  borderRadius: '50%',
  width: 26,
  height: 26,
  backgroundColor: theme.palette.primary.main,
  border: '2px solid transparent',
}));

type RadioGroupOption = {
  label: ReactNode;
  'aria-label': string;
} & Pick<MuiRadioProps, 'value' | 'checked'>;

export function RadioGroupOption({
  label,
  value,
  'aria-label': ariaLabel,
}: RadioGroupOption) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === value;
  }

  return (
    <Box
      position="relative"
      border={(t) =>
        `2px solid ${checked ? t.palette.primary.main : t.palette.neutral.main}`
      }
      marginBottom={-1}
      bgcolor={(t) =>
        checked ? `${t.palette.primary.lighter}` : `${t.palette.white}`
      }
      zIndex={checked ? 1 : 0}
      px={11}
      py={11}
      sx={{
        '&:nth-of-type(1)': {
          borderTopLeftRadius: (t) => t.shape.borderRadius * 5,
          borderTopRightRadius: (t) => t.shape.borderRadius * 5,
        },
        '&:last-child': {
          borderBottomLeftRadius: (t) => t.shape.borderRadius * 5,
          borderBottomRightRadius: (t) => t.shape.borderRadius * 5,
        },
        transition: (t) =>
          `${t.transitions.create(['border-color'], {
            duration: t.transitions.duration.standard,
          })}`,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography component="span" fontSize={24}>
          {label}
        </Typography>
        <MuiRadio
          icon={<RadioIcon />}
          checkedIcon={
            <RadioCheckedIcon>
              <Box
                position="absolute"
                component="span"
                top="50%"
                right="50%"
                sx={{
                  transform: 'translate(50%,-50%)',
                }}
              >
                <CheckIcon />
              </Box>
            </RadioCheckedIcon>
          }
          value={value}
          inputProps={{
            'aria-label': ariaLabel,
          }}
        />
      </Box>
    </Box>
  );
}

export function RadioGroupRoot(props: MuiRadioGroupProps) {
  return <MuiRadioGroup {...props} />;
}
