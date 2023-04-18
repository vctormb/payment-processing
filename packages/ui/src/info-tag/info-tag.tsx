import { ReactNode } from 'react';
import { Box } from '@mui/material';

type Props = {
  children: ReactNode;
};

export function InfoTag({ children }: Props) {
  return (
    <Box
      position="relative"
      bgcolor={(t) => t.palette.secondary.main}
      pl={4}
      pr={8}
      py={2}
      borderRadius={2}
      color={(t) => t.palette.white.main}
      fontSize={16}
      sx={{
        clipPath: 'polygon(100% 0%, 98% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)',
      }}
    >
      {children}
    </Box>
  );
}
