import { defineCollection, z } from 'astro:content';

const home = defineCollection({
  type: "content",
  schema: z.object({
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    resumeUrl: z.string().optional(),
    heroImage: z.string().optional(),   // CMS will fill this when you upload
  }),
});

const about = defineCollection({
  type: "content",
  schema: z.object({
    aboutText: z.string(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    image: z.string().optional(),       // CMS can upload images now
  }),
});

export const collections = {
  home,
  about,
  projects
};
