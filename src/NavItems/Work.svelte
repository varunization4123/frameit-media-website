<script>
    import WorkCard from "../Cards/WorkCard.svelte";
</script>


<div>
    <h1>Our previous work, our pride</h1>
    <h3>We’ve re-created some of the most famous styles, such as Vox Animation, Johnny Harris, Athletic Interest, Ali Abdaal, Cred, Patriot Act and more...</h3>
    <div class="work">
        <WorkCard style="Vox style animation" detail="Statistics and graph visualization" video='https://www.youtube.com/embed/TByW5-HDYTA'/>
        <WorkCard style="Johnny Harris style editing" detail="Maps & Borders animation" video='https://www.youtube.com/embed/TByW5-HDYTA'/>
        <WorkCard style="illui by Mike Lamb" detail="Illustrations as 2D animations" video='https://www.youtube.com/embed/TByW5-HDYTA'/>
        <WorkCard style="Mr Beast style editng" detail="Super fast paced + animated subtitles" video='https://www.youtube.com/embed/TByW5-HDYTA'/>
        <WorkCard style="Ali Abdaal" detail="Illustrated visual cues" video='https://www.youtube.com/embed/TByW5-HDYTA'/>
        <WorkCard style="Niklas Christl" detail="Visual Story telling" video='https://www.youtube.com/embed/TByW5-HDYTA'/>
    </div>
    
</div>

<style>
    div{
        max-width: 960px;
        margin: 1% auto;
        flex-wrap: wrap;
        overflow: visible;
    }
    h1, h3{
        max-width: 540px;
    }
    h1{
        margin: 5% auto;
        line-height: 30px;
    }
    h3{
        font-weight: 500;
        margin: 0% auto 6% auto;
    }
    .work{
        margin: 2% auto;
        justify-items: center;
        grid-gap: 2%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-template-rows: auto;
    }
    @media(max-width: 640px){
        h1{
            font-size: 22px;
            line-height: 22px;
        }
        h3{
            font-size: 18px;
            line-height: 18px;
            font-weight: 200;
        }
    }
</style>