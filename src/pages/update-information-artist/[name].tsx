import UpdateInformationArtistScreen from '@/screens/UpdateInformartionArtist';
import { Artist } from '@/types';
import { getApiDestination, titleCase } from '@/utility';
import { cloudflareImage } from '@/utility/images';
import axios from 'axios';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { NextSeo, NextSeoProps } from 'next-seo';

export default function UpdateInformationArtistPage({
  config,
  artistDetails,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <NextSeo {...config} />
      <UpdateInformationArtistScreen artistDetails={artistDetails} />
    </>
  );
}

export const getServerSideProps = (async (
  context: GetServerSidePropsContext
) => {
  try {
    const { params: { name = '' } = {} } = context;
    const apiUrl = getApiDestination(process.env.ENV);
    const { data: artistData } = await axios.get(apiUrl + `/artists/${name}`);

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
          canonical: `https://explore.wxllspace.com/artist/${name}`,
          openGraph: {
            url: `https://explore.wxllspace.com/artist/${name}`,
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
