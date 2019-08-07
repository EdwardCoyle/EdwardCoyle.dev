export default function handle(req, res) {
  res.json([
    {
      id: 0,
      name: 'my-very-first-post',
      title: 'My Very First Post',
      content: 'This is my very first blog post! I am a writer now!'
    },
    {
      id: 1,
      name: 'yet-another-great-post',
      title: 'Yet Another Great Post',
      content: 'I\'ve done it again! More great content!'
    },
    {
      id: 2,
      name: 'an-additional-exceptional-post',
      title: 'An Additional, Exceptional Post',
      content: 'This post has lots of class... truly a class act!'
    },
    {
      id: 3,
      name: 'exquisite-post',
      title: 'Exquisite Post',
      content: 'You\'ve never digested a post quite like this one! Delicious!'
    },
    {
      id: 4,
      name: 'intriguing-post',
      title: 'Intriguing Post',
      content: 'Use your critical thinking skills to ponder the consequences of this post!'
    }
  ]);
};
