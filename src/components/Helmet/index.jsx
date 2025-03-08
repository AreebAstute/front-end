import React from 'react'
import { Helmet } from 'react-helmet'
import { useIntl } from 'react-intl'

export const HelmetComp = ({ title, description, keywords, url, imageUrl }) => {

    const intl = useIntl()
  return (
    <Helmet>
      {/* General Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Astute Softwares" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} /> 

      {/* Open Graph Meta Tags (for Social Media) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Astute Softwares" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@AstuteSoftwares" />

      {/* SEO & Indexing */}
      <meta name="robots" content="index, follow" />
      <meta name="referrer" content="origin-when-crossorigin" />
    </Helmet>
  )
}
