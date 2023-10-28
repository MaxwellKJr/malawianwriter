import React from 'react';
import StoryCard from './StoryCard';

interface StoriesProps {
  storyMetadata: Array<{
    title: string;
    date: string;
    description: string;
    slug: string;
    tags: [];
  }>;
}

const Stories = ({ storyMetadata }: StoriesProps) => {
  return (
    <section className='flex flex-col md:grid md:grid-cols-2 md:gap-4 w-full h-full'>
      {storyMetadata.map(story => (
        <StoryCard key={story.slug} story={story} />
      ))}
    </section>
  );
};

export default Stories;
