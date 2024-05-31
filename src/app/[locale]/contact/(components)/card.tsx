import clsx from 'clsx';

import { Figure } from '@/components/layouts';

import trimText from '@/utils/trim-text';

import { type PostType } from '@/model/post';

export default function Card({
  className,
  post,
}: {
  className?: string;
  post: PostType;
}) {
  return (
    <article className={clsx('card__item', className)}>
      <Figure className="h-40 w-full bg-black/15 dark:bg-white/15" />

      <div className="grid items-start justify-start gap-6 px-4 py-6">
        <h2 className="text-2xl capitalize">
          {trimText({ text: post.title, maxLength: 15 })}
        </h2>
        <p className="capitalize">
          {trimText({ text: post.body, maxLength: 140 })}
        </p>
      </div>
    </article>
  );
}
