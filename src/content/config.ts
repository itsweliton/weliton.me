// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
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
  type: "content",
  schema: z.object({
    name: z.string(),
    author: z.string(),
    cover: z.string(),
    link: z.string(),
    yearRead: z.date().optional(),
    rating: z.string().optional(),
    status: z.enum(["Read", "Wishlist", "Reading"]),
  }),
});

const albumsCollection = defineCollection({
  type: "content",
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
  type: "content",
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
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  books: booksCollection,
  albums: albumsCollection,
  movies: moviesCollection,
};
