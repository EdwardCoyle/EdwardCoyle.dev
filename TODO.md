# TODO's

*SVG Cel Animation process*:
- [ ] Auto vendor-prefix CSS keyframes/animations from SASS source code
- [ ] Build process for Auto-inlining compiled SASS into SVG source code
- [x] Embed Optimized SVGs into React components

*SVG/HTML form component animations*
- Choose a platform -- or learn them all?
  - [Greensock Animation Platform](https://greensock.com/gsap)
  - [Anime.js](https://animejs.com/documentation)
  - [MoJS](https://github.com/mojs/mojs)

*General Style*
- [ ] Decide on fonts, remove extra ones from the `site-head` component

*Index Page Style*
- [ ] Add `single-triangle.svg` as the "in-between" element instead of the round bullets on the index page.
- [ ] Animate each "bullet point" on the index page (wiggle/pop on mouseover/focus).
- [ ] Add links to Github/StackOverflow/LinkedIn

*About Page*
- [ ] Flesh out design
- [ ] Add logos and sections for Infor, OP, and TGP

*Work Samples Page*
- [ ] Create a neat listing page

*Next.js Architecture*
- [x] Figure out how to make the ID attributes on the blog posts work correctly.
- [ ] Format dates on posts properly (use Moment.js?)
- [ ] Figure out formula for "Time needed to read" feature.
- [ ] Break apart blog post parts into component files.

*Website Architecture*
- Continue through Next.js documentation, starting (here)[https://nextjs.org/docs#using-a-component-that-supports-onclick]
- Make sure I hit all the steps on (this tutorial)[https://www.toptal.com/github/unlimited-scale-web-hosting-github-pages-cloudflare] for Github pages hosting, Cloudflare, etc
- Research how to properly use React Components (pass settings, etc)
- Research cheap offsite databases/apis
  - Netlify
  - Firebase
  - AWS/Azure
- Replace all hardcoded URLs for lambda pages to get the basepath programatically (currently hardcoded to http://localhost:3000)

*Fun Stuff - Edmails*
- [ ] Research conversion of AMR to OGG via FFMPEG on the server automatically. [This](https://stackoverflow.com/questions/17643261/stream-as-html5-audio-or-convert-amr-to-ogg) and [this]() were good resources.
- [ ] Add audio wave image generated based on waveform.

*Fun Stuff - Other*
- [ ] Hook into the Runkeeper API and see if we can use that on the site for tracking my runs
- [ ] Ed character animation for the landing page
