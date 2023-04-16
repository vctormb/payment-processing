import type { Meta, StoryObj } from '@storybook/react';

import { Select } from 'ui';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    label: 'Country',
    labelId: 'country-select',
    onChange: (val) => console.log(val),
    options: [
      { label: 'Brazil', value: 'brazil' },
      { label: 'United States', value: 'us' },
      { label: 'Australia', value: 'australia' },
    ],
  },
};
