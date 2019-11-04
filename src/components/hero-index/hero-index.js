/**
 * Hero Image Component for the Index Page
 * This holds the container for the background animation and interactive logo.
 */

import Anime from 'react-anime';

import BackgroundContainer from '../background-container';
import InteractiveLogo from '../interactive-logo/main';
import SVGTriangleCircle from '../../animations/triangle-circle/triangle-circle';

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

const HeroIndex = () => {
  return (
    <>
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
    </>
  )
};

export default HeroIndex;
