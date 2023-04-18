import type { Meta, StoryObj } from '@storybook/react';
import { InfoTag } from 'ui';

const meta = {
  title: 'Components/InfoTag',
  component: InfoTag,
  tags: ['autodocs'],
} satisfies Meta<typeof InfoTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: '🤑 R$ 300,00 de volta no seu Pix na hora',
  },
};
