import Link from 'next/link';

const SiteNavLink = props => (
  <li>
    <Link href='/blog/[id]' as={`/blog/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default SiteNavLink;
