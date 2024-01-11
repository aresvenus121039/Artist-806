const cloudflareImage = (url: any): any | null => {
  if (!url) return null;
  return `https://eng.wxllspace.com/cdn-cgi/image/format=webp/${url}`;
};

export { cloudflareImage };
