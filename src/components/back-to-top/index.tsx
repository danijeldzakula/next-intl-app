'use client';

import { useCallback, useEffect, useState } from 'react';

import clsx from 'clsx';

import ArrowIcon from '@/icons/arrow';
import { useMastheadStore } from '@/store/useMastheadStore';

import { Container } from '../layouts';

const HAS_WINDOW: boolean = typeof window !== 'undefined';

export default function BackToTop() {
  const { isAuthOpen, isNavbarOpen } = useMastheadStore();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    HAS_WINDOW && window.scrollY >= 200
      ? setIsVisible(true)
      : setIsVisible(false);
  }, []);

  useEffect(() => {
    handleScroll();

    HAS_WINDOW && window.addEventListener('scroll', handleScroll);

    return () => {
      HAS_WINDOW && window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9] w-full">
      <Container className="relative">
        <button
          type="button"
          onClick={scrollToTop}
          className={clsx(
            'absolute bottom-4 right-4 z-[49] h-12 w-12 translate-y-[150px] rounded-sm bg-white p-0 opacity-70 shadow-xl transition-transform duration-200 hover:opacity-100 lg:bottom-14 lg:right-6 dark:bg-zinc-900',
            isVisible ? '!translate-y-0' : '',
            isAuthOpen || isNavbarOpen ? 'hidden' : 'block'
          )}
        >
          <span className="flex items-center justify-center">
            <ArrowIcon
              width={22}
              height={22}
              className="-rotate-90 text-black dark:text-white"
            />
          </span>
          <span className="sr-only">Back</span>
        </button>
      </Container>
    </div>
  );
}
