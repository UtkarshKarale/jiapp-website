import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    category: z.enum(['ji-apps', 'web', 'playstore', 'exe', 'extensions']),
    coverImage: z.string(),
    galleryImages: z.array(z.string()).optional().default([]),
    technologies: z.array(z.string()),
    features: z.array(z.string()).optional().default([]),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    playStoreUrl: z.string().url().optional(),
    status: z.enum(['live', 'beta', 'development', 'archived']).default('live'),
    featured: z.boolean().default(false),
    createdDate: z.string(),
    stats: z
      .object({
        users: z.string().optional(),
        rating: z.string().optional(),
        downloads: z.string().optional(),
      })
      .optional(),
  }),
});

const blogsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('JI'),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
  blogs: blogsCollection,
};
