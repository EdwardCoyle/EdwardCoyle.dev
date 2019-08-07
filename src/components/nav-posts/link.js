import Link from 'next/link';

const PostNavLink = props => (
  <li>
    <Link href='/blog/[name]' as={`/blog/${props.name}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default PostNavLink;
