<script>
    import Button from "../Reusable Components/button.svelte";
    export let title;
    export let description;
    export let price;
    export let link;
</script>

<div class= "card">
    <h1>{title}</h1>
    <p>{description}</p>
    <span><h1>${price}</h1><p>/per video</p></span>
    <div class="spacing"></div>
    <Button text="Sign Up" href="{link}"/>
</div>

<style>
    .card{
        max-width: 360px;
        min-width: 200px;
        text-align: left;
        border: 3px;
        border-radius: 10px;
        border-color: #fff;
        border-style: solid;
        padding: 4% 3%;
        background-color: #ffffff21;
        margin: 1% 2%;
        transition: 0.6s;
    }
    .card:hover {
        border-color: #e38800;
    }
    .card:hover h1{
        background: -webkit-linear-gradient(rgb(241, 158, 3), rgb(241, 72, 4));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h1{
        text-align: left;
        transition: 0.3s;
    }
    span h1, span p{
        text-align: left;
        margin: 0;
    }
    p{
        text-align: left;
        max-width: 220px;
        transition: 0.6s;
    }
    .spacing{
        height: 18px;
    }
    @media(max-width: 640px){
        .card{
            padding: 5% 6%;
        }
    }
</style>