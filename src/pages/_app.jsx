import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Retro Group</title>

        <link rel="stylesheet" href={'/style.css'} />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
