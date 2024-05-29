import { useCallback, useTransition } from 'react';

import { useRouter } from '@/navigation';

export default function useBack() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClose = useCallback(() => {
    startTransition(() => {
      return void router.back();
    });
  }, [router]);

  return { isPending, handleClose };
}
