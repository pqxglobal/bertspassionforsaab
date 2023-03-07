import Head from 'next/head';
import Saab_1 from '../../public/saab-1_dmfbdr_c_scale,w_1400.webp';
import Saab_2 from '../../public/saab-2_l83pca_c_scale,w_1400.webp';
import Saab_5 from '../../public/saab-5_holop4_c_scale,w_1400.webp';
import { Inter } from 'next/font/google';
import Images from './Images'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bert&apos;s Passies</title>
        <meta name="description" content="De passies van Bert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className='absolute top-1/3 w-full text-center font-bold text-8xl text-white hover:scale-110'>Bert&apos;s Passie</p>
        <Images src={Saab_1} />
        <Images src={Saab_2} />
        <Images src={Saab_5} />
      </main>
    </>
  );
}
