import { Button } from './button';
import { setup, screen } from '../test-utils';

describe('Button', () => {
  it('should render properly', () => {
    setup(<Button>Custom button</Button>);

    expect(screen.getByText('Custom button')).toBeInTheDocument();
  });
});
