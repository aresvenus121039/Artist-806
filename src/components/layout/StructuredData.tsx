import { IStructuredDataProps } from '@/types';
import Head from 'next/head';

export default function StructuredData({
  data,
}: {
  data: IStructuredDataProps;
}) {
  return (
    <Head>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}
