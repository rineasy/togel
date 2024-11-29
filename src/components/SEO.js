import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = 'LAPAKTOTO: Prediksi Togel Terpercaya & Terakurat',
  description = 'LAPAKTOTO menyediakan prediksi togel terpercaya dan terakurat untuk semua pasaran. Dapatkan hasil prediksi SGP, HK, dan Sidney dengan tingkat akurasi tinggi.',
  keywords = 'lapaktoto, prediksi togel, togel online, prediksi sgp, prediksi hk, prediksi sidney, togel terpercaya',
  canonicalUrl = window.location.href
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="LAPAKTOTO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="id" />
      <meta name="geo.region" content="ID" />
      <meta name="geo.placename" content="Indonesia" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "LAPAKTOTO",
          "url": window.location.origin,
          "description": description,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${window.location.origin}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
