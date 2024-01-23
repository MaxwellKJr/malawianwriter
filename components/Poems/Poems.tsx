import React from "react";
import PoemCard from "./PoemCard";

interface PoemsProps {
  poemMetadata: Array<{
    title: string;
    date: string;
    description: string;
    slug: string;
    tags: [];
  }>;
}

const Poems = ({ poemMetadata }: PoemsProps) => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 md:gap-4 w-full h-full">
      {poemMetadata.map((poem) => (
        <PoemCard key={poem.slug} poem={poem} />
      ))}
    </section>
  );
};

export default Poems;
