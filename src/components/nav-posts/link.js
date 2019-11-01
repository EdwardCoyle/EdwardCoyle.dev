import Link from 'next/link';

const PostNavLink = props => {
  const imgAltTag = `Blog Post: ${props.title}`;

  return (
    <li className="post-link">
      <img className="post-link--avatar" src={props.imgURL} alt={imgAltTag} />
      <div className="post-link--details">
        <Link href='/blog/[name]' as={`/blog/${props.name}`}>
          <a className="post-link--url">{props.title}</a>
        </Link>
        <span className="post-link--date">{props.date}</span>
      </div>
    </li>
  );
};

export default PostNavLink;
