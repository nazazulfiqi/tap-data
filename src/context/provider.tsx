'use client';

import React, { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilEnv, RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { LoadingSpinner } from '../components/loading/spinner';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function Provider({ children }: { children: React.ReactNode }) {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <RecoilRoot>
          <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        </RecoilRoot>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default Provider;
