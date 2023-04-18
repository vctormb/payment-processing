import { RadioGroup } from '.';
import { setup, screen, act, within } from '../test-utils';
import { colors } from '../utils/theme';

describe('RadioGroup', () => {
  it('should render properly', () => {
    setup(
      <RadioGroup.Root onChange={(e) => console.log(e.target.value)}>
        <RadioGroup.Section title="Pix">
          <>
            <RadioGroup.Option
              label="1x R$ 30.500,00"
              aria-label="1x R$ 30.500,00"
              value="1"
            >
              Earn 3% Cashback
            </RadioGroup.Option>
          </>
        </RadioGroup.Section>
        <RadioGroup.Section title="Pix Parcelado">
          <RadioGroup.Option
            label="2x R$ 10.500,00"
            aria-label="2x R$ 10.500,00"
            value="2"
          />
          <RadioGroup.Option
            label="3x R$ 5.500,00"
            aria-label="3x R$ 5.500,00"
            value="3"
          />
        </RadioGroup.Section>
      </RadioGroup.Root>
    );

    expect(screen.getByText('Pix')).toBeInTheDocument();
    expect(screen.getByText('1x R$ 30.500,00')).toBeInTheDocument();
    expect(screen.getByText('Earn 3% Cashback')).toBeInTheDocument();

    expect(screen.getByText('Pix Parcelado')).toBeInTheDocument();
    expect(screen.getByText('2x R$ 10.500,00')).toBeInTheDocument();
    expect(screen.getByText('3x R$ 5.500,00')).toBeInTheDocument();
  });

  it('should select an option', async () => {
    const { user } = setup(
      <RadioGroup.Root>
        <RadioGroup.Section title="Title">
          <RadioGroup.Option
            data-testid="buy-car-option"
            label="Buy car"
            aria-label="Buy car"
            value="1"
          />
          <RadioGroup.Option
            label="Buy house"
            aria-label="Buy house"
            value="2"
          />
        </RadioGroup.Section>
      </RadioGroup.Root>
    );

    const optionEl = screen.getByLabelText('Buy car') as HTMLInputElement;

    await act(async () => {
      await user.click(optionEl);
    });

    const buyCarOptionEl = within(screen.getByTestId('buy-car-option'));

    expect(optionEl.checked).toBeTruthy();
    expect(screen.getByTestId('buy-car-option')).toHaveStyle(
      `background-color: ${colors.green.$100}`
    );
    expect(screen.getByTestId('buy-car-option')).toHaveStyle(
      `border: 2px solid ${colors.green.$300}`
    );
    expect(buyCarOptionEl.getByTestId('radio-checked-option')).toHaveStyle(
      `background-color: ${colors.green.$300}`
    );
    expect(buyCarOptionEl.getByTestId('CheckIcon')).toBeInTheDocument()
  });
});
