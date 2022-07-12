import { api } from './api';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PostsResponse = Post[];

export const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<PostsResponse, void>({
      query: () => ({
        url: '/posts',
      }),
      providesTags: ['Posts'],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
