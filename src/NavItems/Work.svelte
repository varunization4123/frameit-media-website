<script>
    import WorkCard from "../Cards/WorkCard.svelte";
    let works = [
        {style:"Vox Style Animaion", detail:"Stats & graph visualisation", video: "https://www.youtube.com/embed/TU3OXkUXQKo"},
        {style:"Johnny Harris style editing", detail:"Maps & Borders animation", video: "https://www.youtube.com/embed/JEa2y2CGW3k"},
        {style:"illui by Mike Lamb", detail:"Illustrations as 2D animations", video: "https://www.youtube.com/embed/4epNBed99nk"},
        {style:"Mr Beast style editng", detail:"Super fast paced + animated subtitles", video: "https://www.youtube.com/shorts/embed/q5OAYjwVo7g"},
        {style:"Ali Abdaal", detail:"Illustrated visual cues", video: "https://www.youtube.com/embed/TByW5-HDYTA"},
        {style:"Niklas Christl", detail:"Visual Story telling", video: "https://www.youtube.com/embed/TByW5-HDYTA"},
        ];
    import IntersectionObserver from "svelte-intersection-observer";
    import { fly} from "svelte/transition";

    let elementOnce;
    let intersectOnce;
</script>

<IntersectionObserver once element={elementOnce} bind:intersecting={intersectOnce}>
    <div bind:this={elementOnce}>
        {#if intersectOnce}
        <div class="workSection">
            <h1 transition:fly="{{ y: 100, duration: 600, delay: 1000 }}">Our previous work, our pride</h1>
            <p transition:fly="{{ y: 100, duration: 600, delay: 1000 }}">We’ve re-created some of the most famous styles, such as Vox Animation, Johnny Harris, Athletic Interest, Ali Abdaal, Cred, Patriot Act and more...</p>
            <div class="work">
                {#each works as work}
                <WorkCard style={work.style} detail={work.detail} video={work.video}/>
                {/each}
            </div>
        </div>
        {/if}
    </div>
</IntersectionObserver> 

<style>
    .workSection{
        height: auto;
        max-width: 960px;
        margin: 1% auto;
        flex-wrap: wrap;
        overflow: visible;
    }
    h1, p{
        max-width: 80%;
    }
    h1{
        background: -webkit-linear-gradient(rgb(241, 158, 3), rgb(241, 72, 4));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 5% auto;
        line-height: 30px;
    }
    p{
        font-weight: 500;
        margin: 0% auto 6% auto;
    }
    .work{
        justify-items: center;
        grid-gap: 1%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
    }
    @media(max-width: 960px){
        .workSection{
            margin-bottom: 20%;
            padding: 5% 5%;
        }  
        .work{
            grid-gap: 5%;
        }
    }
    @media(max-width: 640px){
        .workSection{
            margin-bottom: 40%;
            padding: 0% 0%;
        }
        h1{
            font-size: 22px;
            line-height: 22px;
        }
        p{
            font-size: 18px;
            line-height: 18px;
            font-weight: 200;
        }
        .work{
            grid-template-columns: 1fr;
            grid-gap: 2%;
        }
    }
</style>