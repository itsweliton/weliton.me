import { z, defineCollection } from 'astro:content';

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const booksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    author: z.string(),
    cover: z.string(),
    link: z.string(),
    yearRead: z.date().optional(),
    rating: z.string().optional(),
    status: z.enum(['Read', 'Wishlist', 'Reading']),
  }),
});

const albumsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      releaseDate: z.date(),
      artist: z.string(),
      rating: z.string().optional(),
      coverUrl: image(),
      coverAlt: z.string(),
      favSong: z.string(),
      albumUrl: z.string(),
    }),
});

const moviesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      releaseDate: z.date(),
      director: z.string(),
      rating: z.string().optional(),
      posterUrl: image(),
      posterAlt: z.string(),
      genres: z.array(z.string()),
      movieUrl: z.string(),
      featured: z.boolean().default(false),
    }),
});

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    company: z.string(),
    location: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      techs: z.array(z.string()),
      description: z.string(),
      media: z.array(image()),
      status: z.string(),
      url: z.string(),
    }),
});

// Create a new content collection for photos
const photosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    src: z.string(),
    location: z.string(),
    date: z.date(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  books: booksCollection,
  albums: albumsCollection,
  movies: moviesCollection,
  work: workCollection,
  projects: projectsCollection,
  photos: photosCollection,
};
