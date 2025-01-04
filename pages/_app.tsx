import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import {
  AppShell,
  Container,
  MantineProvider,
  MantineThemeOverride,
} from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { AppHeader } from "../components/Header/AppHeader";
import { AppFooter } from "../components/AppFooter";
import { theme } from "../styles/mantineGlobalTheme";
import type { Session } from "next-auth";
import { masterConfig } from "../config";
import { brandTheme } from "../middleware/brandService";

export default function App({
  Component,
  pageProps: { session, theme, ...pageProps },
}: AppProps<{ session: Session; theme: MantineThemeOverride }>) {
  const websiteMetaData = masterConfig.global.appConfig.websiteMetaData;
  // console.log(theme);
  return (
    <>
      <Head>
        <title>{websiteMetaData.suggested.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content={websiteMetaData.suggested.description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <AppShell
            fixed={false}
            // padding="lg"
            header={<AppHeader></AppHeader>}
            footer={<AppFooter></AppFooter>}
          >
            <Container>
              <Component {...pageProps} />
            </Container>
          </AppShell>
        </MantineProvider>
      </SessionProvider>
    </>
  );
}
