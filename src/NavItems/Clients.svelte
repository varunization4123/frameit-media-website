<script>
    import ClientCard from "../Cards/ClientCard.svelte";
    let clients = [{img: "/images/client1.png"}, {img: "/images/client2.png"}, {img: "/images/client3.png"}, {img: "/images/client4.png"}, {img: "/images/client5.png"}, {img: "/images/client6.png"}];
</script>

<div class="ourClients">
    <h1>Clients we've previously worked with</h1>
    <p>We've collaborated and worked with some of the best names in the industry, below are a few of the clients you may recognize by their logos</p>
    <div class="clientGrid">
        {#each clients as client}
        <ClientCard img={client.img}/>
        {/each}
    </div>
</div>

<style>
    .ourClients{
        max-width: 960px;
        margin: 20% auto;
    }
    h1{
        background: -webkit-linear-gradient(rgb(241, 158, 3), rgb(241, 72, 4));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 2% auto;
        max-width: 80%;
        font-size: 36px;
        line-height: 36px;
    }
    p{
        margin: 2% auto;
        max-width: 80%;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
    }
    .clientGrid{
        justify-items: center;
        grid-gap: 3%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        max-width: 960px;
        margin: 2% auto;
        padding: 5% 5%;
        background-image: url('/images/grid.png');
        background-size: auto;
        background-repeat: no-repeat;
    }
    @media(max-width: 960px){
        .ourClients{
            margin: 20% auto;
        }
    }
    @media(max-width: 640px){
        .ourClients{
            margin-bottom: 5%;
            padding: 5% 0%;
        }
        .clientGrid{
            text-align: left;
            justify-items: start;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
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
    }
</style>