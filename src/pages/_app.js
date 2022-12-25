import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

const CustomApp = ({ Component, pageProps }) => {

  return (
    <div>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=0.5,maximum-scale=2,minimum-scale=0.5,user-scalable=1,viewport-fit=cover'
        />
      </Head>
      <Component pageProps={pageProps} />
    </div>
  );
};

CustomApp.propTypes = {
  Component: PropTypes.elementType,
  emotionCache: PropTypes.object,
};

export default CustomApp;
