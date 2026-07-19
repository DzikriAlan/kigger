import { useEffect } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { fontVariables } from "@/shared/styles/fonts";
import "@/shared/styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const useScrollToHashAfterLayoutSettles = () => {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const scrollToTarget = () => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    };

    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    fontsReady.then(() => requestAnimationFrame(() => requestAnimationFrame(scrollToTarget)));
  }, []);
};

export default function App({ Component, pageProps }: AppProps) {
  useScrollToHashAfterLayoutSettles();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${fontVariables} font-sans`}>
        <Component {...pageProps} />
      </div>
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
