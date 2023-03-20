<script>
    import TestimonialCard from '../Cards/TestimonialCard.svelte';
    import IntersectionObserver from "svelte-intersection-observer";
    import {fade, fly} from "svelte/transition";
    let testimonials = [
        {testimonial: "Everything is possible with FrameIt Media's expert team of editors, Thumbnail Designers, Content Writers and Community Managers.They just make the whole process super smooth, I’ve never had to follow-up with them for any delays or issues of sort.They have an incredible feedback and correction system, making even the feedback system feellike a breeze.", name: "Varun Mayya, CEO Avalon", img :"/images/Testimonial.png"},
        {testimonial: "Everything is possible with FrameIt Media's expert team of editors, Thumbnail Designers, Content Writers and Community Managers.They just make the whole process super smooth, I’ve never had to follow-up with them for any delays or issues of sort.They have an incredible feedback and correction system, making even the feedback system feellike a breeze.", name: "Abhinav Arora, CEO Avalon", img :"/images/Testimonial.png"},
        {testimonial: "Everything is possible with FrameIt Media's expert team of editors, Thumbnail Designers, Content Writers and Community Managers.They just make the whole process super smooth, I’ve never had to follow-up with them for any delays or issues of sort.They have an incredible feedback and correction system, making even the feedback system feellike a breeze.", name: "Shashank Udupa, CEO Avalon", img :"/images/Testimonial.png"},
    ];
    let elementOnce;
    let intersectOnce;
</script>

<IntersectionObserver once element={elementOnce} bind:intersecting={intersectOnce}>
    <div bind:this={elementOnce}>
        {#if intersectOnce}
        <div class="testimonialSection" transition:fade={{delay:600, duration:500}}>
            <h1 transition:fly="{{ y: 300, duration: 600, delay:600 }}">
            We’ve worked with lots of creators over the years
            </h1>
            <div class="cards">
                {#each testimonials as testimonial}
                <TestimonialCard testimonial={testimonial.testimonial} name={testimonial.name} img={testimonial.img}/>
                {/each}
            </div>
        </div>
        {/if}
    </div>
</IntersectionObserver> 

<style>
    .cards{
        max-width: 960px;
        margin: 0% auto;
        display: flex;
        overflow-x: scroll;
    }
    ::-webkit-scrollbar{
        width: 0px;
    }
    @media(max-width: 960px){
        .testimonialSection{
            margin-bottom: 40%;
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