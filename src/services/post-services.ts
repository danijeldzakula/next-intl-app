import { queryInstance } from './query-instance';

export const getPosts = async ({ pageParam = 1 }: { pageParam: number }) =>
  queryInstance
    .get(`/posts`, { params: { _page: pageParam } })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    .then((res) => res.data);
