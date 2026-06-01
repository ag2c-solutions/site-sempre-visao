import type { ImageMetadata } from 'astro';

export interface IPost {
  title: string;
  slug: string;
  imageUrl: string | ImageMetadata;
  description: string;
  content: string;
  galleryImages?: (string | ImageMetadata)[];
  date?: string;
  tags?: string[];
}

export type IPostList = IPost[];
