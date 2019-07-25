import PostNavLink from './link';

const PostNavList = () => {
  return (
    <nav className="main-site-nav">
      <ul>
        <PostNavLink id="My Very First Post" />
        <PostNavLink id="Yet Another Great Post" />
        <PostNavLink id="An Additional, Exceptional Post" />
        <PostNavLink id="Exquisite Post" />
        <PostNavLink id="Intriguing Post" />
      </ul>
    </nav>
  );
};

export default PostNavList;
