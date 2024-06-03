'use client';

import { useMastheadStore } from '@/store/useMastheadStore';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

export default function AuthModal() {
  const { isAuthOpen, handleAuthClose } = useMastheadStore();

  return (
    <Dialog open={isAuthOpen} onOpenChange={handleAuthClose}>
      <DialogContent className="max-h-[80svh] w-[calc(100%_-_32px)] overflow-y-auto !rounded-[2px] sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose onClick={handleAuthClose} asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
