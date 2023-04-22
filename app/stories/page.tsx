import { Metadata } from "next";
import Stories from "@/components/Stories/Stories";
import PageWrapper from "@/components/PageWrapper";
import getStoriesMetadata from "@/components/models/getStoryMetadata";

export const metadata: Metadata = {
  title: "Malawian Writer 🇲🇼 - Stories",
  description:
    'The Malawian Writer fiends for great stories, books and writing. From African Literature to stories from "A Galaxy Far Far Away".',
  openGraph: {
    title: "Malawian Writer on Writing 🇲🇼 | Blog",
    description:
      "The Malawian Writer shares everything regarding writing and storytelling in generally, favorite books, recommendations and in search of the next GREAT story.",
    url: "https://malawianwriter.vercel.app",
    siteName: "Malawian Writer",
    type: "website",
  },
};

const StoriesPage = () => {
  const storyMetadata = getStoriesMetadata();

  return (
    <PageWrapper>
      <main className="mt-[12vh] py-16">
        <div className="w-full sm:w-10/12 max-w-4xl p-4 lg:p-0 mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-black text-center py-4 font-Dancing-Script">
              On Stories<span className="text-brand">.</span>
            </h1>
            <p className="font-medium text-center">
              <em>
                &ldquo;Get an in-depth breakdown of my work and what I am currently working on. Bit
                by bit.&rdquo;
              </em>
            </p>
          </div>
          <Stories storyMetadata={storyMetadata} />
        </div>
      </main>
    </PageWrapper>
  );
};

export default StoriesPage;
