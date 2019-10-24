import '../src/styles.scss';

import Anime from 'react-anime';

import BackgroundContainer from '../src/components/background-container';
import HomepageLayout from '../src/components/site-layouts/homepage';
import InteractiveLogo from '../src/components/interactive-logo/main';
import SVGIcons from '../src/components/svg-icons';
import SVGTriangleCircle from '../src/animations/triangle-circle/triangle-circle';

function randomDuration() {
  const min = 800;
  const max = 1200;
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomDelay() {
  const min = 500;
  const max = 700;
  return Math.floor(Math.random() * (max - min)) + min;
}

const Home = () => {
  return (
    <HomepageLayout>
      <SVGIcons />
      <InteractiveLogo />
      <BackgroundContainer>
        <Anime
          delay={randomDelay()}
          duration={randomDuration()}
          easing="easeOutElastic"
          scale={[0, 1]}>
          <SVGTriangleCircle background={true} reverse={true}/>
        </Anime>
        <Anime
          delay={randomDelay()}
          duration={randomDuration()}
          easing="easeOutElastic"
          scale={[0, 1]}>
          <SVGTriangleCircle background={true} />
        </Anime>
      </BackgroundContainer>
    </HomepageLayout>
  );
};

export default Home;
