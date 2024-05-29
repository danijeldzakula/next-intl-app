'use client';

import { useCallback, useEffect, useState } from 'react';

import clsx from 'clsx';

import ArrowIcon from '@/icons/arrow';

import { Container } from '../layouts';

const HAS_WINDOW: boolean = typeof window !== 'undefined';

export default function BackToTop() {
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
    <div className="fixed bottom-0 left-0 right-0 z-[49] w-full">
      <Container className="relative">
        <button
          type="button"
          onClick={scrollToTop}
          className={clsx(
            'absolute bottom-14 right-4 z-[49] h-12 w-12 translate-y-[150px] rounded-sm bg-zinc-800 p-0 opacity-70 shadow-lg backdrop-blur-lg transition-[opacity_transform] duration-200 hover:opacity-100 lg:right-6',
            isVisible ? '!translate-y-0' : ''
          )}
        >
          <span className="flex items-center justify-center">
            <ArrowIcon
              width={22}
              height={22}
              className="-rotate-90 text-white"
            />
          </span>
          <span className="sr-only">Back</span>
        </button>
      </Container>
    </div>
  );
}
