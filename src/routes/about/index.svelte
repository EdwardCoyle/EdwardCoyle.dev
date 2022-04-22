<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section class="content-area">
	<div class="content">
		<h1>Hi! My Name's Ed.<br />I create things on the web!</h1>

		<p>
			Many of my favorite mediums combine in this endless space to form beautiful-yet-functional, entertaining experiences.  I've spent much of my life immersed in crafting these experiences, ranging from architecting code to rendering ideas in illustration, and finally animating them to life.
		</p>

		<h1>Animator</h1>

		<p>
			I'm a graduate of the Art Institute of Philadelphia's Media arts and Animation program, where I trained as a 3D Animator.  I gained a lot of knowledge on not just animation technique, but learned much about how modern animation software operates.  I would often build 3D models and character skeletons and use code to rig and animate them in software like 3D Studio Max.
		</p>

		<p>
			After school, I lived the life of a freelancer, working primarily as a motion graphics artist for several advertising agencies in the Philadelphia region.  I would also work alongside close friends attempting to break into the mobile gaming market as the lead animator and web developer at <a href="http://www.thegamespage.com">The Games Page</a>, where I worked on animating characters and designing levels for several Desktop, HTML5 and iOS games.
		</p>

		<h1>Developer</h1>

		<p>
			After starting a full time job with my original title being "graphic designer", I had the opportunity at <a href="http://www.officepracticum">Office Practicum</a> to learn the ropes of working on the Front End, developing secure patient portals for Pediatricians.  I worked on the development and maintenance of multiple SaaS products, making my best attempt at making them beautiful and useful.
		</p>

		<p>
			In the summer of 2014, I had the opportunity to expand my front end skills helping <a href="http://design.infor.com">Infor Design</a> work on their latest iteration of the company's Design System.  Since I've joined, we've successfully released and maintained a major version of the <a href="https://github.com/infor-design/enterprise">jQuery-based Design System</a>, while simultaneously building up a future <a href="https://github.com/infor-design/enterprise-wc">Web Component version</a> alongside.
		</p>

		<h1>Content Creator</h1>

		<p>Sometimes for fun, I use my animation and post-production skills for <a href="http://twitch.tv/TheRealEddieJ">streaming on my Twitch channel</a>, where I'll often play my favorite video games or treat the audience to sketching sessions.</p>
	</div>
</section>

<style>
	.content-area {
		max-width: 1024px;
		margin: 0 auto;
		padding: 1rem;
	}

	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
