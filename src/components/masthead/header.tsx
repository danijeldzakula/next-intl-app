'use client';

import dynamic from 'next/dynamic';

import MenuIcon from '@/icons/menu';
import { useMastheadStore } from '@/store/useMastheadStore';

import AuthButton from '../auth/auth-button';
import { Container } from '../layouts';
import NavLink from '../nav-link';
import MobileNavbar from './mobile-navbar';
import NavBar from './navbar';

const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
  ssr: false,
  suspense: true,
  loading: () => (
    <div className="hidden h-7 w-16 animate-pulse rounded-[50px] bg-white sm:block dark:bg-zinc-800" />
  ),
});

export default function Header() {
  const { isNavbarOpen, handleNavbarOpen } = useMastheadStore();

  return (
    <header className="gradient--indigo sticky left-0 right-0 top-0 z-[11] grid h-16 w-full items-center lg:h-20">
      <Container>
        <div className="grid auto-cols-max grid-flow-col items-center justify-between lg:grid-cols-[201px_auto_201px]">
          <div className="grid grid-cols-[40px_auto] items-center gap-4">
            <button
              aria-pressed={isNavbarOpen}
              className="relative grid h-10 w-10 items-center justify-center text-white lg:hidden"
              onClick={handleNavbarOpen}
              type="button"
            >
              <div className="relative grid h-8 w-8 items-center">
                <MenuIcon className="h-full w-full" />
              </div>

              <span className="sr-only">Menu</span>
            </button>

            <NavLink
              href="/"
              className="inline-flex !px-0 py-0 text-2xl text-white hover:text-white dark:text-white hover:dark:text-white"
            >
              <span>Creative</span>
            </NavLink>
          </div>

          <NavBar className="hidden lg:block" />

          <MobileNavbar />

          <div className="flex items-center gap-4">
            <ThemeToggle className="hidden sm:block" />

            <AuthButton className="relative h-10 rounded-[50px] font-semibold uppercase text-white md:w-auto md:px-3">
              <span className="hidden tracking-wider md:block">SIGN IN/UP</span>

              <div className="flex items-center gap-2 md:hidden">
                <span className="block h-10 w-10 rounded-full bg-white dark:bg-neutral-800" />
              </div>
            </AuthButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
