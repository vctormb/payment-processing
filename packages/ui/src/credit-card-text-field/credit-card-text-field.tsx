import { forwardRef } from 'react';
import { MaskedTextField, MaskedTextFieldProps } from '../masked-text-field';

type Props = Pick<MaskedTextFieldProps, 'onChange' | 'name'>;

export const CreditCardTextField = forwardRef<HTMLElement, Props>(function Field(
  props,
  ref
) {
  return <MaskedTextField {...props} ref={ref} mask="0000 0000 0000 0000" />;
});
