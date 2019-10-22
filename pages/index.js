import '../src/styles.scss';

import BackgroundContainer from '../src/components/background-container';
import EdLogoComponent from '../src/animations/ed/ed';
import HomepageLayout from '../src/components/site-layouts/homepage';
import SVGTriangleCircle from '../src/animations/triangle-circle/triangle-circle';

const Home = () => {
  return (
    <HomepageLayout>
      <div className="masthead">
        <EdLogoComponent />
        <h1>Edward Coyle</h1>
        <p className="masthead--bullets">
          <span>Developer</span>
          <span>Designer</span>
          <span>Animator</span>
        </p>
        <p>Website Coming Soon</p>
      </div>
      <BackgroundContainer>
        <SVGTriangleCircle background={true} reverse={true}/>
        <SVGTriangleCircle background={true} />
      </BackgroundContainer>

      <style jsx>
      {`
        .masthead {
          align-self: center;
          margin-top: 0;
          text-align: center;
        }

        .masthead h1 {
          font-size: 8vh;
          margin-top: 0;
        }

        .masthead--bullets {
          color: $body-font-color;
          font-size: 4vh;
        }

        .masthead--bullets span:not(:last-child)::after {
          color: inherit;
          content: ' • ';
          pointer-events: none;
        }
      `}
      </style>
    </HomepageLayout>
  );
};

export default Home;
