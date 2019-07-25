import '../src/styles.scss';

import HomepageLayout from '../src/components/site-layouts/homepage';

const Home = () => {
  return (
    <HomepageLayout>
      <div className="masthead">
        <h1>Edward Coyle</h1>
        <p className="masthead--bullets">
          <span>Developer</span>
          <span>Designer</span>
          <span>Animator</span>
        </p>
        <p>Website Coming Soon</p>
      </div>
    </HomepageLayout>
  );
};

export default Home;
