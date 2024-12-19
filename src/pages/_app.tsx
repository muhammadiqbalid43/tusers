import AppSidebar from "@/components/sidebar/app-sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="ring-1 overflow-x-hidden">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </main>
    </SidebarProvider>
  );
}
