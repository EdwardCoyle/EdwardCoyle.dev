import './styles.scss';
import Head from 'next/head';

function Home() {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap" rel="stylesheet"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-18393322-3"></script>
        <script src="/static/js/ga.js"></script>
        <title>EdwardCoyle.dev | Coming Soon</title>
      </Head>
      <section id="main" className="main">
        <div className="masthead">
          <h1>Edward Coyle</h1>
          <p className="masthead--bullets">
            <span>Developer</span>
            <span>Designer</span>
            <span>Animator</span>
          </p>
          <p>Website Coming Soon</p>
        </div>
      </section>
    </div>
  )
}

export default Home
