<script>
    import InfoCard from "../Cards/InfoCard.svelte";
    import IntersectionObserver from "svelte-intersection-observer";
    import {fade} from "svelte/transition";

    let node;
	
</script>

<IntersectionObserver element={node} let:intersecting>
    <div bind:this={node}>
        {#if intersecting}
        <div class="info" transition:fade={{delay: 300, duration: 500}}>
            <InfoCard icon="/images/ContentIcon.svg" title="Content" detail="Never miss an upload. We manage your (daily, weekly & monthly) upload schedule."/>
            <InfoCard icon="/images/EditingIcon.svg" title="Editing" detail="Our team of video editors can edit for retention and ensure your content is of the highest quality."/>
            <InfoCard icon="/images/ThumbnailIcon.svg" title="Thumbnails" detail="Our thumbnail designs maximize your CTR by creating designs that make your videos stand out."/>
        </div>
        {/if}
    </div>
</IntersectionObserver> 

<style>
    .info{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 960px;
        margin: 5% auto;
    }
    @media(max-width: 940px){
        .info{
            margin-bottom: 35%;
            justify-content: center;
        }
    }
</style>