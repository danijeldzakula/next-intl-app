import { Link } from '@/navigation';

import ExternalLink from '../external-link';
import LangSwitch from '../lang-switch';
import { Container } from '../layouts';
import LinksToggle from '../links-toggle';

export default function Footer() {
  const customers = [
    'Sell online',
    'Features',
    'Examples',
    'Website editors',
    'Online retail',
  ];

  const press = [
    'Events',
    'Current News',
    'Awards',
    'Testimonials',
    'Online retail',
  ];

  const about = [
    'Contact Us',
    'Our Services',
    'Our Team',
    'Careers',
    'Contacts',
  ];

  return (
    <footer className="bg-white dark:bg-black">
      <div className="gradient--indigo w-full">
        <Container className="h-full">
          <div className="before: relative grid h-full grid-rows-2 before:absolute before:-left-full before:bottom-0 before:top-0 before:clear-both before:h-full before:w-full before:bg-neutral-100 before:content-[''] lg:grid-cols-[300px_auto] lg:grid-rows-1 dark:before:bg-neutral-950">
            <div className="grid h-full w-full items-center justify-start bg-neutral-100 px-4 py-8 lg:px-0 lg:py-8 xl:py-10 dark:bg-neutral-950">
              <div className="grid gap-1 text-left">
                <span className="text-sm font-medium uppercase tracking-wide text-zinc-800 md:text-base dark:text-zinc-400">
                  Subscribe to our
                </span>
                <h2 className="text-2xl font-normal uppercase text-black md:text-3xl dark:text-white">
                  Newsletter
                </h2>
              </div>
            </div>

            <div className="flex h-full w-full items-center justify-center">
              <form className="relative my-8 ml-4 grid h-16 w-full rounded-[4px] bg-white lg:m-8 lg:mr-0 xl:my-10 dark:bg-black">
                <input
                  type="email"
                  name="newsletter"
                  className="relative w-full rounded-none bg-transparent px-5 text-base tracking-wide text-black md:text-base xl:text-xl dark:text-white"
                  placeholder="Enter email address"
                />

                <button
                  type="button"
                  className="absolute bottom-2 right-2 top-2 rounded-sm bg-neutral-200 px-4 text-sm font-medium uppercase tracking-wide text-black shadow-lg md:px-6 md:text-base lg:px-8 lg:text-[18px] dark:bg-zinc-900 dark:text-white"
                >
                  <span className="">SUBMIT</span>
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <LinksToggle show={true} title="Customers">
            {customers.map((item, idx) => (
              <li key={idx}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </LinksToggle>

          <LinksToggle title="Shop">
            {customers.map((item, idx) => (
              <li key={idx}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </LinksToggle>

          <LinksToggle title="Press">
            {press.map((item, idx) => (
              <li key={idx}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </LinksToggle>

          <LinksToggle title="About">
            {about.map((item, idx) => (
              <li key={idx}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </LinksToggle>
        </div>

        <div className="my-10 border-b border-neutral-200 dark:border-neutral-900" />

        <div className="flex flex-col flex-wrap justify-between gap-4 md:flex-row md:items-center">
          <div>
            <ul className="flex flex-col gap-4 sm:flex-row [&>li]:py-2 [&>li]:text-black [&>li]:dark:text-white">
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/">Code of Conduct</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-4 sm:flex-row [&>li]:py-2 [&>li]:text-black [&>li]:dark:text-white">
              <li>
                <ExternalLink href="/">Facebook</ExternalLink>
              </li>
              <li>
                <ExternalLink href="/">Instagram</ExternalLink>
              </li>
              <li>
                <ExternalLink href="/">Youtube</ExternalLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-10 border-b border-neutral-200 dark:border-neutral-900" />

        <div className="pb-10">
          <LangSwitch />
        </div>

        <div>
          <p className="text-center text-zinc-600 dark:text-zinc-400">
            Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
