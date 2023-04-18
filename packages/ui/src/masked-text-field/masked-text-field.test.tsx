import { useState } from 'react';
import { TextField } from '..';
import { CreditCardDueDateTextField } from '../credit-card-due-date-text-field';
import { setup, screen, act } from '../test-utils';

describe('MaskedTextField', () => {
  it('should render the unmasked value properly', async () => {
    function Component() {
      const [value, setValue] = useState('');
      return (
        <TextField
          label="Due Date"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.value);
          }}
          InputProps={{
            inputComponent: CreditCardDueDateTextField as any,
          }}
        />
      );
    }

    const { user } = setup(<Component />);

    const fieldElement = screen.getByLabelText('Due Date') as HTMLInputElement;

    await act(async () => {
      await user.type(fieldElement, '1121');
    });

    expect(fieldElement.value).toBe('1121');
  });
});
