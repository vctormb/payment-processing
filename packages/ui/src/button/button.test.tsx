import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('should render properly', () => {
    render(<Button>Custom button</Button>);

    expect(screen.getByText('Custom button')).toBeInTheDocument();
  });
});
