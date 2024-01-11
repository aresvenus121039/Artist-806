import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="googleMaps"
          src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDH04BXA9yE0TV77EuZ6bY8N5mLHFPUV0I"
          strategy="beforeInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C6X2C636RP"
          strategy="beforeInteractive"
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KXLKR3P');
          `,
          }}
        ></script>

        {/* Segment */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(){var analytics=window.analytics=window.analytics||[];
            if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");
            else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];
            analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);
            var i=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");
            i.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}
            i.unshift(e);analytics.push(i);return analytics}};
            for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}
            analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;
            t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(t,n);analytics._loadOptions=i};
            analytics._writeKey="MZcZFXXCclmBROnfkKJFFPElc7Lsu7zo";;
            analytics.SNIPPET_VERSION="5.2.0"; analytics.load("MZcZFXXCclmBROnfkKJFFPElc7Lsu7zo"); analytics.page();}}();
          `,
          }}
        ></script>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KXLKR3P"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          `,
          }}
        ></noscript>

        <Script
          src="//code.tidio.co/fklflzwgkblaxfvqkssf6enjo58rzp4l.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://app.termly.io/embed.min.js"
          data-auto-block="on"
          data-website-uuid="493d50f9-1ec8-4c44-8b90-a52f18df1a7c"
          strategy="lazyOnload"
        />
        <Script id="gtag" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', 'G-C6X2C636RP');
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
