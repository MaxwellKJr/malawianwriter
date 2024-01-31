import fs from "fs";
import PageWrapper from "@/components/PageWrapper";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import moment from "moment";
import Tags from "@/components/Tags";
import getPoemsMetadata from "@/components/models/getPoemMetadata";

const getPoemContent = (slug: string) => {
  const folder = "poems/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const poems = getPoemsMetadata();

  return poems.map((poem) => ({
    slug: poem.slug,
  }));
};

const PoemPage = (props: any) => {
  const slug = props.params.slug;
  const poem = getPoemContent(slug);
  const date = poem.data.created;

  return (
    <PageWrapper>
      <title>{`${poem.data.title} | Malawian Writer 🇲🇼Poems`}</title>
      <meta property="description" content={`${poem.data.description}`} />
      <meta
        property="og:title"
        content={`${poem.data.title} | Malawian Writer 🇲🇼Poems`}
      />
      <meta property="og:description" content={`${poem.data.description}`} />
      <meta
        property="og:url"
        content={`https://malawianwriter.vercel.app/blog/${slug}`}
      />
      <meta property="og:author" content="Maxwell Kapezi Jr" />
      <meta property="og:type" content="article" />
      <meta
        property="article:published_time"
        content={moment(date).format("dddd, Do MMMM YYYY")}
      />
      <meta
        name="twitter:title"
        content={`${poem.data.title} | Malawian Writer 🇲🇼Poems`}
      />
      <meta name="twitter:description" content={`${poem.data.description}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@malawianwriter" />
      <meta name="twitter:creator" content="@malawianwriter" />

      <div className="w-full sm:w-10/12 md:w-2/5 lg:w-[30%] max-w-4xl p-4 sm:px-0 mx-auto mt-[12vh] pt-16">
        <small className="text-gray-700 dark:text-gray-300 opacity-80">
          {moment(date).format("dddd, Do MMMM YYYY")}
        </small>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-brand font-black">
          {poem.data.title}
        </h1>
        {/* <Tags tags={poem.data.tags} /> */}
        <article className="prose prose-zinc prose-sm xl:prose-base 2xl:prose-lg prose-headings:text-brand prose-headings:font-bold prose-h4:text-lg prose-h5:text-xl prose-p:font-Baskerville prose-p:py-2 sm:prose-p:py-0 prose-a:text-brand">
          <Markdown>{poem.content}</Markdown>
        </article>
      </div>
    </PageWrapper>
  );
};

export default PoemPage;
