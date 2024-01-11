import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  GetServerSidePropsContext,
} from 'next';
import axios from 'axios';
import { NextSeo, NextSeoProps } from 'next-seo';
import { titleCase, getApiDestination } from '@/utility';
import _ from 'lodash';
import { cloudflareImage } from '@/utility/images';
import { Artist } from '@/types';
import UpdateInformationArtist from '@/screens/UpdateInformartionArtist';
import withAuth from '@/components/hocs/withAuth';

function ArtistPage({
  config,
  artistDetails,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <NextSeo {...config} />
      <UpdateInformationArtist artistDetails={artistDetails} />
    </>
  );
}

export default withAuth(ArtistPage);

export const getServerSideProps = (async (
  context: GetServerSidePropsContext
) => {
  try {
    const { params: { slug = '' } = {} } = context;
    const apiUrl = getApiDestination(process.env.ENV);
    const { data: artistData } = await axios.get(apiUrl + `/artists/${slug}`);

    const {
      data: {
        artist_name = '',
        address: { city = '', state = '' } = {},
        artist_image: [{ location = '' } = {}] = [],
        art_types = [],
      } = {},
    } = artistData;

    let seoDescription = 'Mural artist';
    if (artist_name) {
      seoDescription += ` ${artist_name}`;
    }
    if (city || state) {
      seoDescription += `, located in ${city || state}${
        city ? `, ${state}` : ''
      }`;
    }

    if (art_types.length) {
      seoDescription += ` is skilled in various art styles such as ${art_types.join(
        ', '
      )}`;
    }
    seoDescription += `. Discover hundreds of mural artists for hire, here only on WXLLSPACE.`;

    return {
      props: {
        config: {
          title: `${titleCase(artist_name)} - Mural Artist | WXLLSPACE`,
          description: seoDescription,
          canonical: `https://explore.wxllspace.com/artist/${slug}/edit`,
          openGraph: {
            url: `https://explore.wxllspace.com/artist/${slug}/edit`,
            title: `${titleCase(artist_name)} - Mural Artist | WXLLSPACE`,
            description: seoDescription,
            type: 'website',
            images: [
              {
                url: cloudflareImage(
                  location ||
                    'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/404/Astro.png'
                ),
                alt: `${titleCase(artist_name)} - Mural Artist | WXLLSPACE`,
              },
            ],
          },
          twitter: {
            handle: '@wxllspace',
            site: '@wxllspace',
            cardType: 'summary_large_image',
          },
        },
        artistDetails: artistData,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}) as GetServerSideProps<{
  config: NextSeoProps;
  artistDetails: Artist;
}>;
