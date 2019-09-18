import { posts } from '../../../src/data/posts';

export default function handle(req, res) {
  res.status(200).json(posts);
};
