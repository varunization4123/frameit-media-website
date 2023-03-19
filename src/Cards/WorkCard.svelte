<script>
    export let style;
    export let detail;
    export let video;
</script>

<div class="workCard">
    <div class="video"><iframe title="Works" src="{video}" allowfullscreen="allowfullscreen" width="260" height="260" frameborder="0"></iframe></div>
    <h4>{style}</h4>
    <h6>{detail}</h6>
</div>

<style>
    .workCard{
        text-align: left;
    }
    iframe{
        border: none;
        width: 260px;
        height: 260px;
        border-radius: 10px;
        margin: 1% 0%;
    }
    h4,h6{
        color: #fff;
        margin: 1% 0%;
    }
    @media(max-width: 420px){
        iframe{
            width: 200px;
            height: 200px;
        }
    }
</style>