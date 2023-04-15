import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from 'ui';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    label: 'Nome completo',
  },
};
