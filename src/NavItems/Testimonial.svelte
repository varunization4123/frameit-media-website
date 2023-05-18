<script>
    import TestimonialCard from '../Cards/TestimonialCard.svelte';
    import IntersectionObserver from "svelte-intersection-observer";
    import {fade, fly} from "svelte/transition";
    let testimonials = [
        {testimonial: "Everything is possible with FrameIt Media's expert team of editors, Thumbnail Designers, Content Writers and Community Managers.They just make the whole process super smooth, I’ve never had to follow-up with them for any delays or issues of sort.They have an incredible feedback and correction system, making even the feedback system feellike a breeze.", name: "Varun Mayya, CEO Avalon", img :"/images/testimonial-vm.png"},
        {testimonial: "Frameit Media is an exceptional video editing agency that transformed my YouTube channel. Their dedication, creativity, and professionalism have been outstanding. They flawlessly edited my long and short form videos, while maintaining a seamless viewing experience. Frameit Media also handled timely uploads, never missing a deadline. I highly recommend Frameit Media for their top-notch editing services.", name: "Athletic Interest, YouTube 628K Subs", img :"/images/testimonial-ai.png"},
        {testimonial: "Let me tell you about Frameit Media, the video editing wizards who magically transformed my YouTube channel into a blockbuster hit! These folks are the real deal when it comes to editing awesomeness. With their creative powers, they took my long and short form videos and turned them into cinematic masterpieces. I couldn't believe my eyes when I saw the final results - it was like watching a Hollywood production!", name: "Tech Burner, YouTuber 10.5M Subs", img :"/images/testimonial-tb.png"},
    ];
    let elementOnce;
    let intersectOnce;
</script>

<IntersectionObserver once element={elementOnce} bind:intersecting={intersectOnce}>
    <div bind:this={elementOnce}>
        {#if intersectOnce}
        <div class="testimonialSection" transition:fade={{delay:2000, duration:800}}>
            <h1 transition:fly="{{ y: 300, duration: 800, delay:2000 }}">
            We’ve worked with lots of creators over the years
            </h1>
            <div class="cards" transition:fade={{delay:2000, duration:800}}>
                {#each testimonials as testimonial}
                <TestimonialCard testimonial={testimonial.testimonial} name={testimonial.name} img={testimonial.img} />
                {/each}
            </div>
        </div>
        {/if}
    </div>
</IntersectionObserver> 

<style>
    .cards{
        max-width: 1180px;
        margin: 0% auto;
        display: flex;
        overflow-x: scroll;
    }
    h1{
        text-shadow: 0 0 3px rgb(255, 255, 255);
    }
    ::-webkit-scrollbar{
        width: 0px;
    }
    @media(max-width: 960px){
        .testimonialSection{
            margin-bottom: 10%;
            padding-left: 5%;
        }
        h1{
            padding: 5% 5% 5% 0%;
        }
    }
    @media(max-width: 640px){
        h1{
            font-size: 22px;
            line-height: 22px;
        }
    }
</style>