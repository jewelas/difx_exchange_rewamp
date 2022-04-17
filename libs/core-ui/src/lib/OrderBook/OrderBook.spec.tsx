import { render } from '@testing-library/react';

import {OrderBook} from '.';

describe('OrderBook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderBook />);
    expect(baseElement).toBeTruthy();
  });
});
