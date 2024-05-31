'use client';

import { useCallback, useEffect, useState } from 'react';

import clsx from 'clsx';

import useWindowDimensions from '@/hooks/useWindowDimensions';

import Header from './header';
import NavBar from './navbar';

const HAS_WINDOW: boolean = typeof window !== 'undefined';

export default function MastHead() {
  const [isVisible, setIsVisible] = useState(false);
  const { width } = useWindowDimensions();

  const handleToggle = useCallback(() => {
    setIsVisible((p) => !p);
  }, []);

  const handleClose = useCallback(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 400);
  }, []);

  useEffect(() => {
    if (!width) return;

    if (width && width >= 1072) {
      setIsVisible(false);
    }
  }, [width]);

  useEffect(() => {
    if (!width && HAS_WINDOW) return;

    if (isVisible) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }

    return () => {
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [isVisible, width]);

  return (
    <div className="relative left-0 right-0 top-0 z-[52] h-16 w-full lg:h-20">
      <Header open={isVisible} onToggle={handleToggle} onClose={handleClose} />

      <NavBar
        open={isVisible}
        onClose={handleClose}
        className={clsx(
          'fixed inset-0 top-16 z-0 block overflow-y-auto transition-transform duration-[0.4s] ease-in-out lg:top-20 lg:hidden',
          isVisible ? 'translate-y-0' : '-translate-y-[calc(150vh_-_80px)]'
        )}
      />
    </div>
  );
}
