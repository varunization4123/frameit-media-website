<script>
    export let style;
    export let detail;
    export let video;
</script>

<div class="workCard">
    <div class="video"><iframe title="Works" src="{video}" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
    <h4>{style}</h4>
    <p>{detail}</p>
</div>

<style>
    .workCard{
        text-align: left;
        padding: 2% 2%;
    }
    iframe{
        border: none;
        max-width: 356px;
        max-height: 200px;
        border-radius: 10px;
        margin: 1% 0%;
    }
    h4,p{
        color: #fff;
        margin: 1% 0%;
    }
    @media(max-width: 960px){
        iframe{
            max-width: 267px;
            max-height: 150px;
        }
        h4,p{
        max-width: 80%;
        }
        h4{
            font-size: 16px;
        }
        p{
            font-size: 12px;
        }
    }
    @media(max-width: 420px){
        iframe{
            max-width: 267px;
            max-height: 150px;
        }
        h4,p{
        max-width: 80%;
        }
        h4{
            font-size: 14px;
        }
        p{
            font-size: 10px;
        }
    }
</style>