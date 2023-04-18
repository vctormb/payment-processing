import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import {
  CpfTextField,
  CreditCardCvvTextField,
  CreditCardDueDateTextField,
  CreditCardTextField,
  TextField,
} from 'ui';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: 'Name',
  },
};

function RenderCpfTextField() {
  const [value, setValue] = useState('');
  return (
    <TextField
      label="CPF"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      InputProps={{
        inputComponent: CpfTextField as any,
      }}
    />
  );
}

export const CPFMask: Story = {
  render: RenderCpfTextField,
};

function RenderCreditCardTextField() {
  const [value, setValue] = useState('');
  return (
    <TextField
      label="Credit Card"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      InputProps={{
        inputComponent: CreditCardTextField as any,
      }}
    />
  );
}

export const CreditCardMask: Story = {
  render: RenderCreditCardTextField,
};

function RenderCreditCardDueDateTextField() {
  const [value, setValue] = useState('');
  return (
    <TextField
      label="Due Date"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      InputProps={{
        inputComponent: CreditCardDueDateTextField as any,
      }}
    />
  );
}

export const CreditCardDueDateMask: Story = {
  render: RenderCreditCardDueDateTextField,
};

function RenderCreditCardCvvTextField() {
  const [value, setValue] = useState('');
  return (
    <TextField
      label="CVV"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      InputProps={{
        inputComponent: CreditCardCvvTextField as any,
      }}
    />
  );
}

export const CreditCardCVVMask: Story = {
  render: RenderCreditCardCvvTextField,
};
