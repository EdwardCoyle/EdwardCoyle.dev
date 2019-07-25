import Head from 'next/head';

/**
 * Provides a custom `<head>` tag built on top of Next.js's
 * @param {string} [props.pageTitle] Optional Page Title
 */
const SiteHead = props => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap" rel="stylesheet"/>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-18393322-3"></script>
      <script src="/static/js/ga.js"></script>
      <title>{props.pageTitle} | EdwardCoyle.dev</title>
    </Head>
  </>
);

export default SiteHead;
