<script>
    import TestimonialCard from '../Cards/TestimonialCard.svelte';
</script>

<div class="testimonialSection">
    <h1>
    We’ve worked with lots of creators over the years
    </h1>
    <div class="cards">
        <TestimonialCard testimonial='Everything is possible with FrameIt Media’s
        expert team of editors, Thumbnail Designers,
        Content Writers and Community Managers.They just make the whole process super smooth,
        I’ve never had to follow-up with them for any
        delays or issues of sort.They have an incredible feedback and correction
        system, making even the feedback system feel
        like a breeze.' name='Varun Mayya, CEO Avalon' img='/images/Testimonial.png'/>
        <TestimonialCard testimonial='Everything is possible with FrameIt Media’s
        expert team of editors, Thumbnail Designers,
        Content Writers and Community Managers.They just make the whole process super smooth,
        I’ve never had to follow-up with them for any
        delays or issues of sort.They have an incredible feedback and correction
        system, making even the feedback system feel
        like a breeze.' name='Varun Mayya, CEO Avalon' img='/images/Testimonial.png'/>
        <TestimonialCard testimonial='Everything is possible with FrameIt Media’s
        expert team of editors, Thumbnail Designers,
        Content Writers and Community Managers.They just make the whole process super smooth,
        I’ve never had to follow-up with them for any
        delays or issues of sort.They have an incredible feedback and correction
        system, making even the feedback system feel
        like a breeze.' name='Varun Mayya, CEO Avalon' img='/images/Testimonial.png'/>
    </div>
</div>

<style>
    .testimonialSection{
        overflow: hidden;
    }
    .cards{
        max-width: 960px;
        margin: 0% auto;
        display: flex;
        overflow-x: scroll;
    }
    ::-webkit-scrollbar{
        width: 0px;
    }
    @media(max-width: 640px){
        h1{
            font-size: 22px;
            line-height: 22px;
        }
    }
</style>