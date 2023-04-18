import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, Typography } from 'ui';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: (
      <div style={{ maxWidth: '400px' }}>
        <RadioGroup.Root onChange={(e) => console.log(e.target.value)}>
          <RadioGroup.Section title="Title">
            <>
              <RadioGroup.Option
              data-testid="buy-house-option"
                label="1x R$ 30.500,00"
                aria-label="1x R$ 30.500,00"
                value="1"
              >
                <Typography color={(t) => t.palette.primary.main}>
                  Earn 3% Cashback
                </Typography>
              </RadioGroup.Option>
            </>
          </RadioGroup.Section>
          <RadioGroup.Section title="Title">
            <RadioGroup.Option
              label="2x R$ 30.500,00"
              aria-label="2x R$ 30.500,00"
              value="2"
            />
            <RadioGroup.Option
              label="3x R$ 30.500,00"
              aria-label="3x R$ 30.500,00"
              value="3"
            />
          </RadioGroup.Section>
        </RadioGroup.Root>
      </div>
    ),
  },
};
