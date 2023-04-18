import type { Meta, StoryObj } from '@storybook/react';

import { Button, FileCopyIcon } from 'ui';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  argTypes: {
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
  },
  args: {
    children: 'Click me',
    size: 'large',
  },
};

export const EndIcon: Story = {
  args: {
    children: 'Click me',
    size: 'large',
    endIcon: <FileCopyIcon />,
  },
};
