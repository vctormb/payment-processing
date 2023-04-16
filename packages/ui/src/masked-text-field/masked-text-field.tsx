import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

export type MaskedTextFieldProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  mask: string;
};

export const MaskedTextField = forwardRef<HTMLElement, MaskedTextFieldProps>(function Field(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      onChange={() => {}} // to avoid warnings
      inputRef={ref as any}
      onAccept={(_value: any, mask) => {
        onChange({ target: { name: props.name, value: mask.unmaskedValue } });
      }}
      overwrite
    />
  );
});
