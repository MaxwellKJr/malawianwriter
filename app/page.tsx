import { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import Showcase from '@/components/Showcase';

export const metadata: Metadata = {
  title: 'Malawian Writer 🇲🇼 | Home',
  description: 'The Malawian Writer fiends for great stories, books and writing. From African Literature to stories from "A Galaxy Far Far Away".',
  openGraph: {
    title: 'Malawian Writer 🇲🇼 | Home',
    description: 'The Malawian Writer fiends for great stories, books and writing. From African Literature to stories from "A Galaxy Far Far Away".',
    url: 'https://malawianwriter.vercel.app',
    siteName: 'Malawian Writer',
    type: 'website'
  }
}

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Showcase />
      </main>
    </PageWrapper>
  );
}
