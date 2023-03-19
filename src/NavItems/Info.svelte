<script>
    import InfoCard from "../Cards/InfoCard.svelte";
</script>

<div>
    <InfoCard icon="/images/ContentIcon.svg" title="Content" detail="Never miss an upload. We manage your (daily, weekly & monthly) upload schedule."/>
    <InfoCard icon="/images/EditingIcon.svg" title="Editing" detail="Our team of video editors can edit for retention and ensure your content is of the highest quality."/>
    <InfoCard icon="/images/ThumbnailIcon.svg" title="Thumbnails" detail="Our thumbnail designs maximize your CTR by creating designs that make your videos stand out."/>
</div>

<style>
    div{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 960px;
        margin: 5% auto;
    }
    @media(max-width: 940px){
        div{
            margin-bottom: 30%;
            justify-content: center;
        }
    }
</style>