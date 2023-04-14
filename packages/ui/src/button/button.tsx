import MuiButton from '@mui/material/Button';

export const Button = () => {
  return (
    <MuiButton
      variant="contained"
      color="secondary"
      sx={{ fontWeight: 600, borderRadius: 4, textTransform: 'none' }}
    >
      Custom button
    </MuiButton>
  );
};
