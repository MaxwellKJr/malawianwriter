import fs from 'fs';
import matter from 'gray-matter';
import { StoryMetadata } from './StoryMetadata';

const getStoriesMetadata = (): StoryMetadata[] => {
	const folder = 'stories/';
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter(file => file.endsWith('.md'));

	const stories = markdownPosts.map(fileName => {
		const fileContents = fs.readFileSync(`stories/${fileName}`, `utf8`);
		const matterResult = matter(fileContents);

		return {
			title: matterResult.data.title,
			date: matterResult.data.date,
			description: matterResult.data.description,
			slug: fileName.replace('.md', ''),
			tags: matterResult.data.tags,
		};
	});

	return stories;
};

export default getStoriesMetadata;
