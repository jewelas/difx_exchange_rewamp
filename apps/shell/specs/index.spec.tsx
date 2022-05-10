import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { renderHook } from "@testing-library/react-hooks";

import Index from "../pages/index.page";

export function useCustomHook() {
  return useQuery("customHook", () => "Hello");
}

describe("Index", () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <Index>
        <div>test</div>
      </Index>
    </QueryClientProvider>
  );
  it("should render successfully", () => {
    renderHook(() => useCustomHook(), { wrapper });
    // const { result, waitFor } = renderHook(() => useCustomHook(), { wrapper });

    // expect(result.current.data).toEqual("Hello");
    // expect(baseElement).toBeTruthy();
  });
});
