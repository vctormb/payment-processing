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
  BoxProps,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

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

type RadioGroupOptionProps = {
  children?: ReactNode;
  label: ReactNode;
  'aria-label': string;
} & Pick<MuiRadioProps, 'value' | 'checked'>;

const StyledRadioGroupOption = styled(Box)<BoxProps>(({ theme }) => ({
  '&:nth-of-type(1)': {
    borderTopLeftRadius: theme.shape.borderRadius * 5,
    borderTopRightRadius: theme.shape.borderRadius * 5,
  },
  '&:last-child': {
    borderBottomLeftRadius: theme.shape.borderRadius * 5,
    borderBottomRightRadius: theme.shape.borderRadius * 5,
  },
  transition: `${theme.transitions.create(['border-color'], {
    duration: theme.transitions.duration.standard,
  })}`,
}));

export function RadioGroupOption({
  children,
  label,
  value,
  'aria-label': ariaLabel,
}: RadioGroupOptionProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === value;
  }

  return (
    <StyledRadioGroupOption
      position="relative"
      px={11}
      py={11}
      marginBottom={-1}
      zIndex={checked ? 1 : 0}
      border={(t) =>
        `2px solid ${checked ? t.palette.primary.main : t.palette.neutral.main}`
      }
      bgcolor={(t) =>
        checked ? `${t.palette.primary.lighter}` : `${t.palette.white}`
      }
    >
      <Box>
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
                  display="flex"
                  alignItems="center"
                  top="50%"
                  right="50%"
                  color={t => t.palette.white.main}
                  fontSize={16}
                  sx={{
                    transform: 'translate(50%,-50%)',
                  }}
                >
                  <CheckIcon fontSize="inherit" />
                </Box>
              </RadioCheckedIcon>
            }
            value={value}
            inputProps={{
              'aria-label': ariaLabel,
            }}
          />
        </Box>
        {children}
      </Box>
    </StyledRadioGroupOption>
  );
}

export function RadioGroupRoot(props: MuiRadioGroupProps) {
  return <MuiRadioGroup {...props} />;
}
