<script>
	import NavBar from "./NavItems/NavBar.svelte";
	import Hero from "./NavItems/Hero.svelte";
	import Info from "./NavItems/Info.svelte";
	import Pricing from "./NavItems/Pricing.svelte";
    import Testimonial from "./NavItems/Testimonial.svelte";
    import Work from "./NavItems/Work.svelte";
	import Clients from "./NavItems/Clients.svelte";
    import Contact from "./NavItems/Contact.svelte";
    import Footer from "./NavItems/Footer.svelte";
	
</script>

<main>
	<NavBar />
	<Hero />
	<Info intro:true/>
	<Pricing />
	<Testimonial />
	<Work />
	<Clients />
	<Contact />
	<Footer />
</main>

<style>
	main {
		text-align: center;
		max-width: 960px;
		margin: 0 auto;
		overflow: visible;
	}
	@media (max-width: 640px) {
		main {
			max-width: none;
			padding: 5% 5%;
		}
	}
</style>