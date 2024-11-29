const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const generateSitemap = async (hostname) => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/prediksi', changefreq: 'daily', priority: 0.9 },
    { url: '/jadwal', changefreq: 'daily', priority: 0.8 },
    { url: '/privacy-policy', changefreq: 'monthly', priority: 0.5 },
    { url: '/terms-of-service', changefreq: 'monthly', priority: 0.5 }
  ];

  const stream = new SitemapStream({ hostname });
  return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );
};

module.exports = generateSitemap;
