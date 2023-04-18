import { useState } from 'react';
import { TextField } from '..';
import { CreditCardCvvTextField } from './credit-card-cvv-text-field';
import { setup, screen, act } from '../test-utils';

describe('CreditCardCvvTextField', () => {
  it('should render the masked value properly', async () => {
    function Component() {
      const [value, setValue] = useState('');
      return (
        <TextField
          label="CVV"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.maskedValue);
          }}
          InputProps={{
            inputComponent: CreditCardCvvTextField as any,
          }}
        />
      );
    }

    const { user } = setup(<Component />);

    const fieldElement = screen.getByLabelText('CVV') as HTMLInputElement;

    await act(async () => {
      await user.type(fieldElement, '1234');
    });

    expect(fieldElement.value).toBe('123');
  });
});
