import '../../src/styles.scss';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import React from 'react';
import ReactMarkdown from 'react-markdown';

import { sanitizePostName } from '../../src/core/utils/posts';
import BlogLayout from '../../src/components/site-layouts/blog';

// HeaderRenderer converts all headings to links with an ID that can be targeted.
// HeaderRenderer recipe was shamelessly lifted from:
// https://github.com/rexxars/react-markdown/issues/69#issuecomment-289860367
function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}
const HeadingRenderer = props => {
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = sanitizePostName(text);

  debugger;
  return React.createElement(`h${props.level}`, { id: slug }, props.children);
}

const BlogPost = props => {
  const title = props.post.title || 'Blog Post';
  const content = props.post.content || 'This is a blog post';
  const author = props.post.author || 'Ed Coyle';
  const email = props.post.email || 'edcoyle86@gmail.com';
  const timeToRead = '9 min read';

  const avatar = props.post.avatar || 'https://github.com/EdwardCoyle.png?size=180';
  const avatarJSX = (<div className="post-avatar">
    <img src={avatar} />
  </div>);

  let dateJSX = '';
  if (props.post.date) {
    dateJSX = (<div className="post-date">
      {props.post.date}
    </div>);
  }

  let authorJSX = '';
  if (props.post.author) {
    authorJSX = (<div className="post-author">
      <Link href={props.post.authorURL}>
        <a>{props.post.author}</a>
      </Link>
    </div>);
  }

  let infoJSX = (
    <div className="post-info">
      {authorJSX}
      {dateJSX}
      <div className="post-read-time">{timeToRead}</div>
    </div>
  );

  return (
    <BlogLayout pageTitle={title}>
      <div className="post-title">
        <h1>{title}</h1>
        <div className="post-details">
          {avatarJSX}
          {infoJSX}
        </div>
      </div>
      <ReactMarkdown
        source={content}
        escapeHtml={false}
        renderers={{heading: HeadingRenderer}}
      />
    </BlogLayout>
  );
};

BlogPost.getInitialProps = async function(context) {
  const { name } = context.query;
  const postName = sanitizePostName(name);
  const res = await fetch(`http://localhost:3000/api/blog-posts/${postName}`);
  const post = await res.json();

  if (!postName) {
    throw new Error(`No post available with name "${postName}"`);
  }

  return { post };
};

export default BlogPost;
