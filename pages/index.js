import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Events from '../components/Events';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexa Developers SRM</title>
      </Head>
      <Navbar />
      <Hero />
      <Events />
      <Team />
      <Footer />
    </div>
  );
}
