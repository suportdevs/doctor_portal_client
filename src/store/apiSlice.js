import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'AppointmentApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    endpoints: (builder) => ({
        storeAppointment: builder.mutation({
            query: (initialAppointment) => ({
                url: "/appointment",
                method: "POST",
                body: initialAppointment
            }),
            invalidatesTags: ['appointments']
        }),
    }),
});

export const {useStoreAppointmentMutation} = apiSlice;