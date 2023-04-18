import { useState } from 'react';
import { TextField } from '..';
import { CpfTextField } from './cpf-text-field';
import { setup, screen, act } from '../test-utils';

describe('CpfTextField', () => {
  it('should render the masked value properly', async () => {
    function Component() {
      const [value, setValue] = useState('');
      return (
        <TextField
          label="CPF"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.maskedValue);
          }}
          InputProps={{
            inputComponent: CpfTextField as any,
          }}
        />
      );
    }

    const { user } = setup(<Component />);

    const fieldElement = screen.getByLabelText('CPF') as HTMLInputElement;

    await act(async () => {
      await user.type(fieldElement, '99999999999');
    });

    expect(fieldElement.value).toBe('999.999.999-99');
  });
});
