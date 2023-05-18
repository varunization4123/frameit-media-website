<script>
    import Button from "../Reusable Components/button.svelte";
</script>

<div class="container">
    <div class="heroText">
        <h1>Build your YouTube business and take it to the <span class="highlight"> next level </span></h1>
        <Button text ="Get in touch" href = "#" />
    </div>
    <!-- svelte-ignore a11y-media-has-caption -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe src="https://www.youtube.com/embed/TByW5-HDYTA"></iframe>
</div>

<style>
    .container{
        max-width: 1080px;
        min-height: 1vh;
        margin: 0% auto;
    }
    .heroText{
        margin: 12% 0% 16% 0%;
    }
    h1 {
        max-width: 80%;
        font-size: 48px;
        color: white;
        font-weight: bolder;
        text-align: center;
        margin: 28px auto ;
        line-height: 48px;
        text-shadow: 0 0 4px rgb(255, 255, 255);
    }
    .highlight{
        background: linear-gradient(120deg, #c97800 0%, #c97800 100%);
        background-repeat: no-repeat;
        background-size: 140% 33%;
        background-position: 0 70%;
    }
    iframe{
        aspect-ratio: 16/9;
        width: 100%;
        border: none;
        border-radius: 10px;
    }
    @media(max-width: 960px){
        .container{
            margin-bottom: 12%;
            padding: 5% 5%;
        }
    }
    @media (max-width: 640px)
    {
        h1{
            width: 100%;
            font-size: 30px;
            line-height: 33px;
            margin: 12px auto ;
        }
    }
</style>