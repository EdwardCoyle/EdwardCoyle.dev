import '../src/styles.scss';

import HeroIndex from '../src/components/hero-index/hero-index';
import HomepageLayout from '../src/components/site-layouts/homepage';
import SVGIcons from '../src/components/svg-icons';

const Home = () => {
  return (
    <HomepageLayout>
      <SVGIcons />
      <HeroIndex />
    </HomepageLayout>
  );
};

export default Home;
