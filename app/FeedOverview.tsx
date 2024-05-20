'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, useState } from "react";
import { FeedList } from "./FeedList";


export const FeedOverview: FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const [client] = useState(queryClient);
  return (
    <QueryClientProvider client={client}>
      <FeedList  />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
