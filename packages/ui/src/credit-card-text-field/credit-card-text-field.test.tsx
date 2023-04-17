import { useState } from 'react';
import { TextField } from '..';
import { CreditCardTextField } from './credit-card-text-field';
import { setup, screen, act } from '../test-utils';

describe('CreditCardTextField', () => {
  it('should render the masked value properly', async () => {
    function Component() {
      const [value, setValue] = useState('');
      return (
        <TextField
          label="Credit Card"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.maskedValue);
          }}
          InputProps={{
            inputComponent: CreditCardTextField as any,
          }}
        />
      );
    }

    const { user } = setup(<Component />);

    const fieldElement = screen.getByLabelText('Credit Card') as HTMLInputElement;

    await act(async () => {
      await user.type(fieldElement, '1111111111111111');
    });

    expect(fieldElement.value).toBe('1111 1111 1111 1111');
  });
});
