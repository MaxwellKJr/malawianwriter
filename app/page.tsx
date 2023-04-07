import PageWrapper from '@/components/PageWrapper';
import Showcase from '@/components/Showcase';

export const metadata = {
  title: 'Malawian Writer | Home',
  description: 'The Malawian Writer is all about books and writing. From African Literature to stories from "A Galaxy Far Far Away".'
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
