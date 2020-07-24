import '../../src/styles.scss';
import chalk from 'chalk';
import fetch from 'isomorphic-unfetch';

import BlogListLayout from '../../src/components/site-layouts/blog-list';
import AudioWave from '../../src/components/audio-wave/audio-wave';

function Edmails(props) {
  debugger;

  const edmails = props.edmails.map(edmail => (
    <AudioWave
      key={edmail.id}
      imgURL={edmail.imgURL}
      name={edmail.name}
      date={edmail.fileInfo.birthtime}
      path={edmail.path}
    />
  ));

  return (
    <BlogListLayout pageTitle="Edmails Index">
      <h1>Edmails</h1>
      <nav className="main-site-nav">
        <ul className="edmail-list">
          {edmails}
        </ul>
      </nav>
    </BlogListLayout>
  );
}

Edmails.getInitialProps = async function ({ req }) {
  const res = await fetch(`http://localhost:3000/api/edmails`);

  debugger;
  const edmails = await res.json();

  console.log(`[ ${chalk.yellow('server')} ] (${edmails.length}) edmails were fetched.`);

  return { edmails };
};

export default Edmails;
