import { QueryClient } from "@tanstack/react-query";

// Simplified QueryClient with minimal configuration for static site
// No API requests are being made, but we keep this for future extensibility
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
