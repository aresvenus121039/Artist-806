import LoginPage from '@/screens/Login';
import { NextSeo } from 'next-seo';

const Login: React.FC = ({ config }: any) => {
  return (
    <>
      <NextSeo {...config} />
      <LoginPage />
    </>
  );
};

export default Login;

export async function getServerSideProps() {
  return {
    props: {
      config: {
        title: 'Login | WXLLSPACE',
        description: 'Discover New Opportunities For Your Artwork in 2023',
        canonical: 'https://explore.wxllspace.com/login',
        openGraph: {
          url: 'https://explore.wxllspace.com/login',
          title: 'Login | WXLLSPACE',
          description: 'Discover New Opportunities For Your Artwork in 2023',
          type: 'website',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/home-OG.png`,
              width: 800,
              height: 600,
              alt: 'Login | WXLLSPACE',
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
