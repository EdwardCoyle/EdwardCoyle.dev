import '../src/styles.scss';
import Head from 'next/head';

import SVGShapesTestComponent from '../src/animations/shapes-test/shapes';

function Animations() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap" rel="stylesheet"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-18393322-3"></script>
        <script src="/static/js/ga.js"></script>
        <title>EdwardCoyle.dev | Animation Tests</title>
      </Head>
      <section id="main">
        <h1>Shape Animation Test</h1>
        <SVGShapesTestComponent className="img"/>
      </section>
    </>
  )
}

export default Animations;
