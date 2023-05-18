<script>
    export let img;
</script>

<div class="clientCard">
    <img src={img} alt="">
</div>

<style>
    .clientCard{
        padding: 3% 3%;
        max-width: 240px;
        max-height: 120px;
        margin: 10% auto;
    }
    @media(max-width: 960px){
        .clientCard{
            max-width: 100px;
            max-height: 60px;
        }
    }
    @media(max-width: 420px){
        .clientCard{
            max-width: 80px;
            max-height: 40px;
        }
    }
</style>