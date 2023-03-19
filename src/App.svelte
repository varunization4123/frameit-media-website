<script>
	import NavBar from "./NavItems/NavBar.svelte";
	import Hero from "./NavItems/Hero.svelte";
	import Info from "./NavItems/Info.svelte";
	import Pricing from "./NavItems/Pricing.svelte";
    import Testimonial from "./NavItems/Testimonial.svelte";
    import Work from "./NavItems/Work.svelte";
    import Contact from "./NavItems/Contact.svelte";
    import Footer from "./NavItems/Footer.svelte";
</script>

<main>
	<NavBar />
	<Hero />
	<Info />
	<Pricing />
	<Testimonial />
	<Work />
	<div class="spacer"></div>
	<Contact />
	<Footer />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 960px;
		margin: 0 auto;
		overflow: hidden;
	}
	.spacer{
		height: 220px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>