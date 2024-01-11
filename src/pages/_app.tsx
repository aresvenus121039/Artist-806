import 'react-before-after-slider-component/dist/build.css';
import 'rc-slider/assets/index.css';
import '@/styles/globals.css';
import '@/components/controls/override-mapbox-gl.css';
import '@/components/controls/InputSelectMultiple.css';
import '@/components/controls/InputDatePicker.css';
import '@/components/controls/SliderUseRCSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { AppProps } from 'next/app';
import { DefaultSeo, NextSeo } from 'next-seo';
import { SnackbarProvider } from 'notistack';
import {
  Box,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import ReCaptcha from '@/components/controls/ReCaptcha';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store';
import { MarketplaceMapProvider } from '@/contexts/MarketplaceMapContext';
import ScrollToTop from '@/utility/ScrollToTop';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { PersistGate } from 'redux-persist/integration/react';
import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useEffect } from 'react';
import {
  ENVIRONMENT,
  NODE_ENVIRONMENTS,
  __DEV__,
} from '@/constants/commonConstants';

const clientSideEmotionCache = createCache({ key: 'css' });

type MyAppProps<P = {}> = AppProps<P> & {
  emotionCache?: EmotionCache;
};

export const theme = createTheme({
  palette: {
    background: {
      default: '#06102B',
    },
    text: {
      primary: '#ffffff',
    },
    primary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontSize: 60,
      fontWeight: 900,
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
    },
    h2: {
      fontSize: 40,
      fontWeight: 900,
      fontStyle: 'normal',

      letterSpacing: '-0.05em',
    },
    h3: {
      fontSize: 34,
      fontWeight: 900,
      fontStyle: 'normal',
    },
    h4: {
      fontSize: 24,
      fontWeight: 900,
      fontStyle: 'normal',
    },
    h5: {
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    h6: {
      fontSize: 18,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
  },
});

if (
  [NODE_ENVIRONMENTS.PRODUCTION, NODE_ENVIRONMENTS.STAGING].includes(
    ENVIRONMENT as string
  )
) {
  Sentry.init({
    dsn: 'https://87ef603dc10142888a8576aef2f48545@o1089395.ingest.sentry.io/6104433',
    integrations: [new Integrations.BrowserTracing()],
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
    debug: ENVIRONMENT === NODE_ENVIRONMENTS.STAGING,
    environment: ENVIRONMENT,
  });
}

interface CustomPageProps {
  config: any;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps<CustomPageProps>) {
  const pathname = usePathname();
  const isMarketPlacePage = pathname === '/marketplace';
  const isLoginPage = pathname === '/login';
  const isSignUpPage = pathname === '/signup';
  const isLinkPage = pathname === '/links';

  const defaultSEO = {
    title:
      'Increase The Value Of Your Properties Through Wallspace | WXLLSPACE',
    description:
      'Where art meets investment to collaborate & create for community development.',
    canonical: 'https://explore.wxllspace.com',
    openGraph: {
      url: 'https://explore.wxllspace.com',
      title:
        'Increase The Value Of Your Properties Through Wallspace | WXLLSPACE',
      description:
        'Where art meets investment to collaborate & create for community development.',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/home-OG.png`,
          width: 800,
          height: 600,
          alt: 'WXLLSPACE Image',
        },
      ],
      site_name: 'WXLLSPACE',
    },
    twitter: {
      handle: '@handle',
      site: 'https://explore.wxllspace.com/creatives',
      cardType: 'summary_large_image',
    },
  };

  return (
    <>
      {pageProps?.config ? (
        <NextSeo {...pageProps.config} />
      ) : (
        <DefaultSeo {...defaultSEO} />
      )}
      <CacheProvider value={emotionCache}>
        <StyledEngineProvider injectFirst>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <MarketplaceMapProvider>
                <ScrollToTop />
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <SnackbarProvider maxSnack={3}>
                    <Box
                      id="page-wrap"
                      sx={{
                        height: '100%',
                      }}
                    >
                      <ReCaptcha />
                      <Header
                        isMarketplaceScreen={isMarketPlacePage}
                        hideNewNavBar={
                          isLoginPage || isSignUpPage || isLinkPage
                        }
                      />
                      <Component {...pageProps} />
                      {!isMarketPlacePage && <Footer />}
                    </Box>
                  </SnackbarProvider>
                </ThemeProvider>
              </MarketplaceMapProvider>
            </PersistGate>
          </Provider>
        </StyledEngineProvider>
      </CacheProvider>
    </>
  );
}
