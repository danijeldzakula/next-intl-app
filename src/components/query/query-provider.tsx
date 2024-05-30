'use client';

import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { queryClientOptions } from '@/utils/query-client';

import { type TChildren } from '@/types';

type TProps = TChildren;

const QueryProvider = ({ children }: TProps) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
