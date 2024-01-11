import { getApiDestination } from '@/utility';
import axios from 'axios';

const EXTERNAL_DATA_URL = 'https://explore.wxllspace.com';

interface SiteMapRecord {
  url: string;
  changefreq: string;
  lastmod: Date;
  priority: string;
}

function generateSiteMap(posts: any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts
       .map(({ url, changefreq, lastmod, priority }: SiteMapRecord) => {
         return `
       <url>
            <loc>${`${EXTERNAL_DATA_URL}/${url}`}</loc>
            <changefreq>${changefreq}</changefreq>
            <lastmod>${lastmod}</lastmod>
            <priority>${priority}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  const apiUrl = getApiDestination(process.env.ENV);
  const { data: { sitemap: sitemapData = {} } = {} } = await axios.get(
    apiUrl + `/sitemap.xml`
  );

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(sitemapData);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
