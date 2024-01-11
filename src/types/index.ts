export interface ArtistAddress {
  city?: string;
  state?: string;
  api_address?: string;
}

export interface artist_image {
  fieldname?: string;
  location?: string;
}

export interface Artist {
  art_styles: any;
  art_types: string[];
  state: any;
  city: any;
  artist_name: string;
  gallery: any[];
  address?: ArtistAddress;
  artist_image?: artist_image[];
  location?: {
    coordinates?: [number, number];
  };
}

export interface User {
  id: string;
  slug: string;
  name: string;
  artist_name: string;
  email: string;
  role: string;
  phone: string;
  about: string;
  instagram_handle: string;
  website: string;
  portfolio_link: string; // Note: Typo "Porfolio" instead of "Portfolio", keep consistent with your codebase
  google_id: string;
  fb_id: string;
  gallery: any[]; // Replace 'any' with the appropriate type if you know the structure
  logo: FileDetail[];
  artist_image: FileDetail[];
  is_ready: boolean;
  createdAt: string; // or Date if you prefer to work with Date objects
  updatedAt: string; // or Date
  token: string;
  wall_name: string;
  wall_slug: string;
}

interface FileDetail {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: string; // Assuming 'size' is string because of the quotes in the JSON. Convert to number if necessary.
  bucket: string;
  key: string;
  acl: string;
  contentType: string;
  contentDisposition: string;
  contentEncoding: string;
  storageClass: string;
  serverSideEncryption: string;
  metadata: {
    fieldName: string;
  };
  location: string;
  etag: string;
  versionId: string;
}

type GeoJSONGeometry = {
  type: string;
  coordinates: [number, number];
};

type GeoJSONProperties = {
  id?: string;
  title?: string;
  image?: string;
  entity?: string;
  state?: string;
};

type GeoJSONFeature = {
  type: string;
  geometry: GeoJSONGeometry;
  properties: GeoJSONProperties;
};

export type GeoJSONData = {
  type: string;
  features: GeoJSONFeature[];
};

export interface LocationGeoFeature {
  geometry: GeoJSONGeometry;
  properties: {
    image?: string;
    title?: string;
    id?: string;
    state?: string;
    name?: string;
    info?: {
      title?: string;
      dimension?: string;
      locationOfWall?: string;
    };
    address?: {
      city?: string;
      state?: string;
    };
    is_ready?: boolean;
    entity: string;
    slug?: string;
  };
  type: string;
}

export interface LocationMarkerData {
  features: LocationGeoFeature[];
  type: string;
}

export interface IDropdownOption {
  value: string;
  label: string;
}

export interface IStructuredDataProps {
  '@context': string;
  '@type': string;
  name: string;
  jobTitle: string;
  address: {
    '@type': string;
    addressRegion: string;
    addressCountry: string;
  };
  description: string;
  contentUrl: string;
}

export type Gallery = Array<{
  Photo: Array<{ file: string }>;
  Title?: string;
  Address?: string;
  file?: File;
}>;
