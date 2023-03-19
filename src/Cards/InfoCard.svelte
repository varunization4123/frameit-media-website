<script>
    export let icon;
    export let title;
    export let detail;
</script>


<div>
    <img src="{icon}" alt="">
    <h3>{title}</h3>
    <p>{detail}</p>
</div>

<style>
    div{
        text-align: left;
        display: block;
        width: 100%;
        max-width: 280px;
        align-items: start;
        margin: 1% 1%;
    }
    h3, p{
        text-align: start;
    }
    @media(max-width: 960px){
        div{
            text-align: center;
        }
        h3,p{
            text-align: center;
        }
        p{
            font-size: 14px;
        }
    }
</style>