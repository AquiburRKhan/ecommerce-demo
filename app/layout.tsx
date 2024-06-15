import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

export const metadata: Metadata = {
  title: "E-commerce demo",
  description:
    "A demo e-commerce site built with Next.js and Redux Toolkit and material UI",
  viewport: "initial-scale=1, width=device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <html lang="en">
        <body>
          <StoreProvider>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </AppRouterCacheProvider>
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
