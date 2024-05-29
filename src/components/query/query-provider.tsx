'use client';

import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { queryClientOptions } from '@/utils/query-client';

import { type IChildren } from '@/types';

type IProps = IChildren;

const QueryProvider = ({ children }: IProps) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
