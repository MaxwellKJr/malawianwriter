import fs from "fs";
import matter from "gray-matter";
import { PoemMetadata } from "./PoemMetadata";

const getPoemsMetadata = (): PoemMetadata[] => {
  const folder = "poems/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, `utf8`);
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
      tags: matterResult.data.tags,
    };
  });

  return poems;
};

export default getPoemsMetadata;
