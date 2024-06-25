import Head from 'next/head';
import Hero from '../components/Hero';
import ThreeScene from '../components/ThreeScene';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Outpost Clone</title>
        <meta name="description" content="Clone of Outpost Design website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <ThreeScene />
    </div>
  );
}
