import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Provider } from 'jotai';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'

import Index from '../pages/index';

export function useCustomHook() {
  return useQuery('customHook', () => 'Hello');
}

describe('Index', () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <Index />
    </QueryClientProvider>
  );
  it('should render successfully', () => {
    const { result, waitFor } = renderHook(() => useCustomHook(), { wrapper });

    // expect(result.current.data).toEqual("Hello");
    // expect(baseElement).toBeTruthy();
  });
});
