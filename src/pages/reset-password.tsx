import ResetPassword from '@/screens/ResetPassword';

import { NextSeo } from 'next-seo';

const ResetPasswordPage: React.FC = ({ config }: any) => {
  return (
    <>
      <NextSeo {...config} />
      <ResetPassword />
    </>
  );
};

export default ResetPasswordPage;

export async function getServerSideProps() {
  return {
    props: {
      config: {
        title: 'Reset Password | WXLLSPACE',
        description: 'Discover New Opportunities For Your Artwork in 2023',
        canonical: 'https://explore.wxllspace.com/reset-password',
        openGraph: {
          url: 'https://explore.wxllspace.com/reset-password',
          title: 'Reset Password | WXLLSPACE',
          description: 'Discover New Opportunities For Your Artwork in 2023',
          type: 'website',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/home-OG.png`,
              width: 800,
              height: 600,
              alt: 'Reset Password | WXLLSPACE',
            },
          ],
        },
        twitter: {
          handle: '@wxllspace',
          site: '@wxllspace',
          cardType: 'summary_large_image',
        },
      },
    },
  };
}
