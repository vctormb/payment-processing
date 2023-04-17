import type { Meta, StoryObj } from '@storybook/react';

import { Box, Stepper, Typography } from 'ui';

const meta = {
  title: 'Components/Stepper',
  component: Stepper.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

function RenderComponent() {
  return (
    <Stepper.Root activeStep={1}>
      <Stepper.Item>
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize="inherit">Select campaign price</Typography>
          <Typography fontSize="inherit" fontWeight={800}>
            R$ 15.300,00
          </Typography>
        </Box>
      </Stepper.Item>
      <Stepper.Item>
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize="inherit">Select product price</Typography>
          <Typography fontSize="inherit" fontWeight={800}>
            R$ 8.300,00
          </Typography>
        </Box>
      </Stepper.Item>
      <Stepper.Item>
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize="inherit">Select brand price</Typography>
          <Typography fontSize="inherit" fontWeight={800}>
            R$ 300,00
          </Typography>
        </Box>
      </Stepper.Item>
    </Stepper.Root>
  );
}

export const Standard: Story = {
  render: RenderComponent,
  args: {
    children: null,
  },
};
