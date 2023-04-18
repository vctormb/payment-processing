import { styled } from '@mui/material/styles';
import MuiButton, { ButtonProps } from '@mui/material/Button';

const StyledButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  '&.MuiButton-root': {
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: theme.shape.borderRadius * 4,
  },
  '&.MuiButton-sizeLarge': {
    padding: theme.spacing(2, 10),
    fontSize: 18,
  },
}));

type Props = Pick<ButtonProps, 'children' | 'endIcon' | 'size' | 'onClick'>;

export function Button({ children, endIcon, size, onClick }: Props) {
  return (
    <StyledButton
      onClick={onClick}
      size={size}
      endIcon={endIcon}
      variant="contained"
      color="secondary"
    >
      {children}
    </StyledButton>
  );
}
