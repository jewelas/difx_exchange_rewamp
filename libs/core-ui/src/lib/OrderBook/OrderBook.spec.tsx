import { render } from '@testing-library/react';

import {OrderBook} from '.';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderBook />);
    expect(baseElement).toBeTruthy();
  });
});
