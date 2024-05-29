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
    <footer className="bg-black">
      <div className="gradient--indigo w-full">
        <Container className="h-full">
          <div className="before: relative grid h-full grid-rows-2 before:absolute before:-left-full before:bottom-0 before:top-0 before:clear-both before:h-full before:w-full before:bg-neutral-950 before:content-[''] lg:grid-cols-[300px_auto] lg:grid-rows-1">
            <div className="grid h-full w-full items-center justify-start bg-neutral-950 px-4 py-8 lg:px-0 lg:py-8 xl:py-10">
              <div className="grid gap-1 text-left">
                <span className="text-sm font-medium uppercase tracking-wide text-zinc-400 md:text-base">
                  Subscribe to our
                </span>
                <h2 className="text-2xl font-normal uppercase text-white md:text-3xl">
                  Newsletter
                </h2>
              </div>
            </div>

            <div className="flex h-full w-full items-center justify-center">
              <form className="relative my-8 ml-4 grid h-16 w-full rounded-[4px] bg-black lg:m-8 lg:mr-0 xl:my-10">
                <input
                  type="email"
                  className="relative w-full rounded-none bg-transparent px-5 text-base tracking-wide text-white md:text-base xl:text-xl"
                  placeholder="Enter email address"
                />

                <button
                  type="button"
                  className="absolute bottom-2 right-2 top-2 rounded-sm bg-zinc-900 px-4 md:px-6 lg:px-8"
                >
                  <span className="text-sm font-medium uppercase tracking-wide text-white md:text-base lg:text-xl">
                    SUBMIT
                  </span>
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

        <div className="my-10 border-b border-zinc-900" />

        <div className="flex flex-col flex-wrap justify-between gap-4 md:flex-row md:items-center">
          <div>
            <ul className="flex flex-col gap-4 sm:flex-row [&>li]:py-2 [&>li]:font-normal [&>li]:text-white">
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
            <ul className="flex flex-col gap-4 sm:flex-row [&>li]:py-2 [&>li]:text-white">
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

        <div className="my-10 border-b border-zinc-900" />

        <div className="pb-10">
          <LangSwitch />
        </div>

        <div>
          <p className="text-center text-zinc-400">
            Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
