// pages/_app.tsx
import React from "react";
import { Metadata } from "@/app/types/types";

const Seo: React.FC = () => {
  const title = "Clima Cast";
  const description = "Wheather forecasting web app";
  const url = "https://clima-cast.monkwall.com/";
  const author = "Varun Kumar Gande";
  const language = "en";

  const metadata: Metadata = {
    title,
    author,
    language,
    description,
    url,
    canonical: url,
    type: "website",
    image: {
      url: "/logo.png",
      width: 400,
      height: 300,
      type: "image/png",
    },
    card: "summary_large_image",
    site: "@clima-cast",
    creator: "@clima-cast",
    keywords:
      "Weather forecast, Local weather, Accurate weather, Real-time weather updates, Hourly weather, Daily weather, Weekly forecast, Current conditions, Temperature trends, Weather radar, Storm tracking, Severe weather alerts, Climate data, Weather map, UV index, Wind speed, Precipitation, Humidity levels, Sunrise and sunset times, 7-day forecast, Mobile weather app, Weather app download, City-specific weather, International weather, Weather widgets, Outdoor activities weather, Travel weather, Weather news, Weather notifications, Weather API integration",
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{metadata.title}</title>
      <link rel="icon" href="/images/favicon.ico" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="transparent" />

      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <link rel="canonical" href={metadata.url} />
      <meta property="og:type" content={metadata.type} />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image.url} />
      <meta property="og:image:type" content={metadata.image.type} />
      <meta
        property="og:image:width"
        content={metadata.image.width.toString()}
      />
      <meta
        property="og:image:height"
        content={metadata.image.height.toString()}
      />
      <meta name="twitter:card" content={metadata.card} />
      <meta name="twitter:image" content={"/logo.png"} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:creator" content={metadata.creator} />
      <meta name="twitter:site" content={metadata.site} />
      <meta name="twitter:description" content={metadata.description} />

      {/* Additional Metadata */}
      <meta name="author" content={metadata.author} />
      <meta name="language" content={metadata.language} />
    </>
  );
};

export default Seo;
