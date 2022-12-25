import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset='utf-8' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='theme-color' content='#000000' />
          <link rel='apple-touch-icon' href='/static/logo192.png' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link href='https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;700&family=Quantico&family=Red+Hat+Display:wght@400;500;900&family=Roboto:wght@400&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}