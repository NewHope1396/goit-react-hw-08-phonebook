import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    token && headers.set('authorization', `Bearer ${token}`);

    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    createUser: builder.mutation({
      query: values => ({
        url: `/users/signup`,
        method: 'POST',
        body: values,
      }),
    }),
    login: builder.mutation({
      query: values => ({
        url: `/users/login`,
        method: 'POST',
        body: values,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
    }),
    refreshUser: builder.query({
      query: () => `/users/current`,
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshUserQuery,
} = authApi;
