<script>
    export let img;
    export let testimonial;
    export let name;
</script>

<div class="testimonial">
    <img src="{img}" alt="">
    <p >{testimonial}</p>
    <h5 >-{name}</h5>
</div>

<style>
    .testimonial{
        max-width: 960px;
        border: solid;
        border-radius: 10px;
        border-color: #fff;
        padding: 4% 4%;
        margin: 5% 5%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        grid-template-rows: 1fr 0.3fr;
    }
    img{
        max-width: 200px;
        align-self: center;
        justify-self: center;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    p{
        text-align: left;
    }
    h5{
        text-align: left;
    }
    @media (max-width: 940px){
        .testimonial{
            min-width: 240px;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            margin: 1% 1%;
            padding: 3% 3%;
        }
        img{
            max-width: 120px;
        }
    }
</style>