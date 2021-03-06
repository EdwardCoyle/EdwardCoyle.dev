import '../src/styles.scss';

import ReactMarkdown from 'react-markdown';
import PageLayout from '../src/components/site-layouts/page';

// Import `about.md`
import { default as content } from '../src/content/about.md';

const About = () => {
  return (
    <PageLayout pageTitle="About">
      <ReactMarkdown source={content} />
    </PageLayout>
  );
};

export default About;
