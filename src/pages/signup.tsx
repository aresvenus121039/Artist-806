import LoginScreen from '@/screens/Login/index';
import { NextSeo } from 'next-seo';

const SignUpPage: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Sign Up | WXLLSPACE"
        description="Sign up today to be the first to know about upcoming projects, new artist and more! Stay updated with explore.wxllspace.com."
        canonical="https://explore.wxllspace.com/sign-up"
        openGraph={{
          url: 'https://explore.wxllspace.com/sign-up',
          title: 'Sign Up | WXLLSPACE',
          description:
            'Sign up today to be the first to know about upcoming projects, new artist and more! Stay updated with explore.wxllspace.com.',
          type: 'website',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/home-OG.png`,
              width: 800,
              height: 600,
              alt: 'Sign Up | WXLLSPACE',
            },
          ],
        }}
        twitter={{
          handle: '@wxllspace',
          site: '@wxllspace',
          cardType: 'summary_large_image',
        }}
      />
      <LoginScreen />
    </>
  );
};

export default SignUpPage;

export async function getServerSideProps() {
  return {
    props: {
      config: {
        title: 'Sign Up | WXLLSPACE',
        description: 'Discover New Opportunities For Your Artwork in 2023',
        canonical: 'https://explore.wxllspace.com/signup',
        openGraph: {
          url: 'https://explore.wxllspace.com/signup',
          title: 'Sign Up | WXLLSPACE',
          description: 'Discover New Opportunities For Your Artwork in 2023',
          type: 'website',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/home-OG.png`,
              width: 800,
              height: 600,
              alt: 'Sign Up | WXLLSPACE',
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
