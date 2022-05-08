import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskServices = createApi({
  reducerPath: 'tasksServices',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/users"
  }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    tasks: builder.query({
      query: (id) => `/user/${id}`,
      providesTags: ['Task']
    }),
    addTask: builder.mutation({ 
      query: ({ id, ...task }) => ({
        url: `/user/add-task/${id}`,
        method: 'PUT',
        body: task
      }),
      invalidatesTags: ['Task']
    }),
    updateTask: builder.mutation({ 
      query: ({ id, tasks}) => ({
        url: `/user/task-update/${id}`,
        method: 'PUT',
        body: tasks
      }),
      invalidatesTags: ['Task']
    }),
    removeTask: builder.mutation({ 
      query: ({ id, tasks}) => ({
        url: `/user/remove-task/${id}`,
        method: 'PUT',
        body: tasks
      }),
      invalidatesTags: ['Task']
    }),
  })
})

export const {
  useTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useRemoveTaskMutation
} = taskServices;