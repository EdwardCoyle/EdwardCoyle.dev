import '../src/styles.scss';
import Head from 'next/head';
import Link from 'next/link';

function About() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap" rel="stylesheet"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-18393322-3"></script>
        <script src="/static/js/ga.js"></script>
        <title>EdwardCoyle.dev | Coming Soon</title>
      </Head>
      <section id="main" className="main">
        <nav className="temp-links">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default About;
