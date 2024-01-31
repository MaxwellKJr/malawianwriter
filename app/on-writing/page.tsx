import { Metadata } from "next";
import Posts from "@/components/Blog/Posts";
import PageWrapper from "@/components/PageWrapper";
import getPostsMetadata from "@/components/models/getPostMetadata";

export const metadata: Metadata = {
  title: "Malawian Writer 🇲🇼 - On Writing",
  description:
    'The Malawian Writer fiends for great stories, books and writing. From African Literature to stories from "A Galaxy Far Far Away".',
  openGraph: {
    title: "Malawian Writer on Writing 🇲🇼 | Blog",
    description:
      "The Malawian Writer shares everything regarding writing and storytelling in generally, favorite books, recommendations and in search of the next GREAT story.",
    url: "https://malawianwriter.vercel.app/",
    siteName: "Malawian Writer",
    type: "website",
  },
};

const OnWritingPage = () => {
  const postMetadata = getPostsMetadata();

  return (
    <PageWrapper>
      <main className="mt-[12vh] py-16">
        <div className="w-full sm:w-10/12 max-w-4xl p-4 lg:p-0 mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-black text-center py-4 font-Dancing-Script">
              On Writing<span className="text-brand">.</span>
            </h1>
            <p className="font-medium text-center">
              <em>
                &ldquo;Here I talk about all things writing and
                storytelling-from books, poetry, music to movies.&rdquo;
              </em>
            </p>
          </div>
          <Posts postMetadata={postMetadata} />
        </div>
      </main>
    </PageWrapper>
  );
};

export default OnWritingPage;
