import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Layout from '@/components/layout';
import Loader from '@/components/loader';
import '../styles/globals.css';
import '../styles/animation.css';
import tCurrency from '@images/tCurrency.png';
import Tap from '@images/tap.png';
import GPU from '@images/gpu.png';
import Fan from '@images/fan.png';
import avatar1 from '@images/avatar1.png';
import avatar2 from '@images/avatar2.png';
import Cup from '@images/cup.png';
import Squads from '@images/squads.png';

const images = [tCurrency, Tap, GPU, Fan, avatar1, avatar2, Squads, Cup];

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const loadWorker = async () => {
      const worker = new Worker('/static-loader-worker.js');
      const resources = [
        images.forEach((image)=>{
          return image.src
        })
      ];

      worker.postMessage({ resources });

      return () => {
        worker.terminate();
      };
    };

    loadWorker();
  }, []);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;