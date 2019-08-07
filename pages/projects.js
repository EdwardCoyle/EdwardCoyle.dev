import '../src/styles.scss';

import ReactMarkdown from 'react-markdown';
import PageLayout from '../src/components/site-layouts/page';

// Import `about.md`
import { default as content } from '../src/content/projects.md';

const Projects = () => {
  return (
    <PageLayout pageTitle="Projects">
      <ReactMarkdown source={content} />
    </PageLayout>
  );
};

export default Projects;
