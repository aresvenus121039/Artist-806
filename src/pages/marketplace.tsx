import MarketplaceScreen from '@/screens/Marketplace/index';
import { NextSeo } from 'next-seo';

const MarketplacePage: React.FC = ({ config }: any) => {
  return (
    <>
      <NextSeo {...config} />
      <MarketplaceScreen />;
    </>
  );
};

export default MarketplacePage;

export async function getServerSideProps() {
  return {
    props: {
      config: {
        title: 'Marketplace | WXLLSPACE',
        description:
          'Search for creatives or commissioned mural opportunities across the US.',
        canonical: 'https://explore.wxllspace.com/marketplace',
        openGraph: {
          url: 'https://explore.wxllspace.com/marketplace',
          title: 'Marketplace | WXLLSPACE',
          description:
            'Search for creatives or commissioned mural opportunities across the US.',
          type: 'website',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/marketplace-OG.png`,
              width: 800,
              height: 600,
              alt: 'Marketplace | WXLLSPACE',
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
