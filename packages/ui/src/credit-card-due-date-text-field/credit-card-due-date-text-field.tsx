import { forwardRef } from 'react';
import { MaskedTextField, MaskedTextFieldProps } from '../masked-text-field';

type Props = Pick<MaskedTextFieldProps, 'onChange' | 'name'>;

export const CreditCardDueDateTextField = forwardRef<HTMLElement, Props>(
  function Field(props, ref) {
    return <MaskedTextField {...props} ref={ref} mask="00/00" />;
  }
);
