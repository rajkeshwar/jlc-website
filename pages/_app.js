
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/styles/globals.css'
import '@/assets/scss/main.scss';

import React from 'react';

// suppress useLayoutEffect warnings when running outside a browser
if (!process.browser) React.useLayoutEffect = React.useEffect;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
