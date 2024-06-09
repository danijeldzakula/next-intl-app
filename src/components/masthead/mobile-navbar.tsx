'use client';

import React, { useEffect } from 'react';

import clsx from 'clsx';

import useWindowDimensions from '@/hooks/useWindowDimensions';

import { useMastheadStore } from '@/store/useMastheadStore';

import NavBar from './navbar';

export default function MobileNavbar() {
  const { width } = useWindowDimensions();
  const { isNavbarOpen, handleNavbarClose } = useMastheadStore();

  useEffect(() => {
    if (!width) return;

    if (width >= 1072) {
      isNavbarOpen && handleNavbarClose();
    }
  }, [isNavbarOpen, handleNavbarClose, width]);

  useEffect(() => {
    const BODY = document.body;

    if (isNavbarOpen) {
      BODY.setAttribute('data-scroll-locked', '1');
    } else {
      BODY.removeAttribute('data-scroll-locked');
    }
  }, [isNavbarOpen]);

  return (
    <>
      <NavBar
        hasMobile={true}
        className={clsx(
          'fixed bottom-0 left-0 top-0 z-[51] w-[85%] max-w-md -translate-x-full bg-white shadow-lg transition-transform duration-200 lg:transition-none dark:bg-neutral-900 [&>ul>li]:mt-4 [&>ul>li]:border-t [&>ul>li]:pt-4 first:[&>ul>li]:mt-0 first:[&>ul>li]:border-t-0 [&>ul]:grid [&>ul]:gap-0',
          isNavbarOpen ? 'translate-x-0' : ''
        )}
      />

      <div
        className={clsx(
          'invisible fixed inset-0 z-50 h-full w-full bg-transparent opacity-0 backdrop-blur-md transition-opacity lg:transition-none',
          isNavbarOpen ? '!visible !bg-black/65 !opacity-100' : ''
        )}
        onClick={handleNavbarClose}
      />
    </>
  );
}
