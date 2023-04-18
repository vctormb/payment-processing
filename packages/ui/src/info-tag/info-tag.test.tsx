import { InfoTag } from './info-tag';
import { setup, screen } from '../test-utils';

describe('InfoTag', () => {
  it('should render the masked value properly', async () => {
    setup(<InfoTag>Hello there</InfoTag>);

    expect(screen.getByText('Hello there')).toBeInTheDocument();
  });
});
