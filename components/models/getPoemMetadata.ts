import fs from "fs";
import matter from "gray-matter";
import { PoemMetadata } from "./PoemMetatdata";

const getPoemsMetadata = (): PoemMetadata[] => {
  const folder = "poems/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const poems = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`poems/${fileName}`, `utf8`);
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      created: matterResult.data.date,
      slug: fileName
        .replace(".md", "")
        .replace(".", "")
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, "-"), // Replace spaces with hyphens
      tags: matterResult.data.tags,
    };
  });

  return poems;
};

export default getPoemsMetadata;
