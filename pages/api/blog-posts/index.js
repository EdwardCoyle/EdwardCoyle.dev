import { posts } from '../../../src/data/posts';

export default async (req, res) => {
  res.status(200).json(posts);
};
