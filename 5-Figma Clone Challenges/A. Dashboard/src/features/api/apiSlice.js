import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3502" }),
    tagTypes: ['crypto'],
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => '/cryptos',
            providesTags: ['Cryptos']
        })
    })
})

// console.log( useGetCryptosQuery );

export const { useGetCryptosQuery } = apiSlice