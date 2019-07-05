import './styles.scss';
import Head from 'next/head';

function Home() {
  return (
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap" rel="stylesheet">
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-18393322-3"></script>
      <script src="/static/js/ga.js"></script>
      <title>EdwardCoyle.dev | Coming Soon</title>
    </Head>
    <div className="main">
      <h1>Welcome to Next.js</h1>
    </div>
  )
}

export default Home
