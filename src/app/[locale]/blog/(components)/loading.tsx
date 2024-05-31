import { Figure } from '@/components/layouts';

import ArrowIcon from '@/icons/arrow';

export function Loading({ fill = 1 }: { fill?: number }) {
  return new Array(fill).fill(null).map((_, idx) => {
    return (
      <article
        key={idx}
        className="card__item cursor-default xl:basis-[calc(33.33333%-1rem)]"
      >
        <Figure className="h-40 w-full animate-pulse bg-black/15 dark:bg-white/15" />

        <div className="grid gap-4 p-4">
          <h2 className="relative h-7 w-2/3 animate-pulse bg-black/15 text-xl dark:bg-white/15">
            <span className="sr-only">Title</span>
          </h2>

          <div className="flex justify-start">
            <div className="relative flex h-12 w-36 animate-pulse items-center gap-4 bg-black/15 px-4 dark:bg-white/15">
              <span className="sr-only">Read More</span>
              <span className="sr-only block py-4">
                <ArrowIcon className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  });
}
