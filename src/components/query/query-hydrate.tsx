'use client';

import {
  HydrationBoundary,
  type HydrationBoundaryProps,
} from '@tanstack/react-query';

export const ReactQueryHydrate = (props: HydrationBoundaryProps) => {
  return <HydrationBoundary {...props} />;
};
