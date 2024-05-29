import React from 'react';

import { Container } from '@/components/layouts';

export default function Loading() {
  return (
    <div className="relative min-h-[calc(100svh_-_64px)] bg-white xl:min-h-[calc(100svh_-_80px)] dark:bg-zinc-900">
      <Container className="h-full">
        <div className="grid h-full w-full items-center justify-center">
          <div className="grid gap-4 text-center">
            <div className="grid justify-center gap-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="gradient--indigo h-4 w-4 animate-bounce rounded-full [animation-delay:-0.3s]" />
                <div className="gradient--indigo h-4 w-4 animate-bounce rounded-full [animation-delay:-0.15s]" />
                <div className="gradient--indigo h-4 w-4 animate-bounce rounded-full" />
              </div>

              <h3 className="sr-only">Loading...</h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
