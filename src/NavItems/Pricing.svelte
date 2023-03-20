<script>
    import PricingCard from "../Cards/PricingCard.svelte";
    import IntersectionObserver from "svelte-intersection-observer";
    import {fade, fly} from "svelte/transition";

    let elementOnce;
    let intersectOnce;
</script>

<IntersectionObserver once element={elementOnce} bind:intersecting={intersectOnce}>
    <div bind:this={elementOnce}>
        {#if intersectOnce}
        <div class="pricingSection" transition:fade={{delay: 1000, duration: 500}}>
            <h1 transition:fly="{{ y: 100, duration: 600, delay: 1000 }}">Pricing designed for your specific needs</h1>
            <h5 transition:fly="{{ y: 100, duration: 600, delay: 1000 }}">Unlock your YouTube potential by upgrading your editing, streamlining your process, better CTR, build loyalty with your community, run cohorts and more.</h5>
            <div class="pricingCards">
                <PricingCard title="Basic" description="For creators looking to better their editing game and delegating the basic editing tasks" price="120" link="#"/>
                <PricingCard title="Pro" description="For creators looking to better their editing game, CTR and with professional Thumbnail designs and high retention editing" price="190" link="#"/>
                <PricingCard title="Master" description="For creators who want to optimize their YouTube strategy with editing, CTR,  building community, running cohorts and more." price="299" link=""/>
            </div>
        </div>
        {/if}
    </div>
</IntersectionObserver> 

<style>
    .pricingSection{
        max-width: 960px;
        margin: 10% auto;
    }
    .pricingCards{
        max-width: 960px;
        display: flex;
        justify-content: space-between;
        overflow-x: overlay;
        margin-top: 5%;
    }
    h1{
        margin: 2% auto;
        max-width: 500px;
        font-size: 36px;
        line-height: 36px;
    }
    h5{
        margin: 2% auto;
        max-width: 440px;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
    }
    ::-webkit-scrollbar{
        width: 0px;
    }
    @media(max-width: 960px){
        .pricingSection{
            margin-bottom: 40%;  
            padding-left: 5%;
        }
        h1, h5{
            padding: 5% 5% 5% 0%;
        }
    }
    @media(max-width: 640px){
        h1{
            font-size: 22px;
            line-height: 22px;
            margin-bottom: 3%;
        }
        h5{
            font-size: 16px;
            line-height: 16px;
            margin-bottom: 3%;
        }
    }
</style>