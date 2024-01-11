import FAQScreen from '@/screens/FAQ/index';
import Head from 'next/head';

const FAQPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>FAQ | WXLLSPACE</title>

        <meta name="title" content="FAQ | WXLLSPACE" />
        <meta
          name="description"
          content="Need Answers? Check out our frequently asked questions and learn more"
        />
        <meta property="og:url" content="https://explore.wxllspace.com/faq" />
        <meta property="og:title" content="FAQ | WXLLSPACE" />
        <meta
          property="og:description"
          content="Need Answers? Check out our frequently asked questions and learn more"
        />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/marketplace-OG.png`}
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="explore.wxllspace.com" />
        <meta property="twitter:title" content="FAQ | WXLLSPACE" />
        <meta
          property="twitter:description"
          content="Need Answers? Check out our frequently asked questions and learn more"
        />
        <meta
          property="twitter:url"
          content="https://explore.wxllspace.com/faq"
        />
        {/* <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/marketplace-OG.png`}
        /> */}
      </Head>
      <FAQScreen />
    </>
  );
};

export default FAQPage;
