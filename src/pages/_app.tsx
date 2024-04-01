import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default MyApp;
