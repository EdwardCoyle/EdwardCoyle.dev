import Link from 'next/link';

const PostNavLink = props => (
  <li>
    <Link href='/blog/[id]' as={`/blog/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default PostNavLink;
