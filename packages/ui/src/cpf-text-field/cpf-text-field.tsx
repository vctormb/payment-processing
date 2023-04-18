import { forwardRef } from 'react';
import { MaskedTextField, MaskedTextFieldProps } from '../masked-text-field';

type Props = Pick<MaskedTextFieldProps, 'onChange' | 'name'>;

export const CpfTextField = forwardRef<HTMLElement, Props>(function Field(
  props,
  ref
) {
  return <MaskedTextField {...props} ref={ref} mask="000.000.000-00" />;
});
