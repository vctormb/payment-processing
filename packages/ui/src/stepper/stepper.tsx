import { ReactNode, forwardRef } from 'react';
import { Check } from '@mui/icons-material';
import { Stepper as MuiStepper, Step, StepLabel, styled } from '@mui/material';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const StyledConnector = styled(StepConnector)(({ theme }) => ({
  marginLeft: 7,
  [`& .${stepConnectorClasses.line}`]: {
    borderWidth: 2,
    borderColor: theme.palette.neutral.main,
  },
}));

const StyledStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 16,
  width: 16,
  borderRadius: 9999,
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: theme.palette.neutral.main,
  ...(ownerState.active && {
    backgroundColor: theme.palette.white.main,
    borderColor: theme.palette.primary.main,
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  }),
  '& .StyledStepIcon-completedIcon': {
    color: 'white',
    zIndex: 1,
    fontSize: 12,
  },
}));

function StyledStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
  return (
    <StyledStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? (
        <Check className="StyledStepIcon-completedIcon" />
      ) : (
        <div className="StyledStepIcon-circle" />
      )}
    </StyledStepIconRoot>
  );
}

const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
  '&.MuiStepLabel-root': {
    padding: 0,
    '& .MuiStepLabel-label': {
      '& p, span, div': {
        lineHeight: 0
      },
      fontSize: 18,
      color: theme.palette.neutral.darker,
    },
    '&.Mui-disabled .MuiStepLabel-label': {
      color: theme.palette.neutral.light,
    },
  },
}));

type StepperRootProps = {
  children: ReactNode;
  activeStep?: number;
};

export function StepperRoot({ children, activeStep }: StepperRootProps) {
  return (
    <MuiStepper
      orientation="vertical"
      activeStep={activeStep}
      connector={<StyledConnector />}
    >
      {children}
    </MuiStepper>
  );
}

type StepperItemProps = {
  children: ReactNode;
};

export const StepperItem = forwardRef<HTMLDivElement, StepperItemProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Step {...rest} ref={ref}>
        <StyledStepLabel StepIconComponent={StyledStepIcon}>
          {children}
        </StyledStepLabel>
      </Step>
    );
  }
);

StepperItem.displayName = 'StepperItem';
