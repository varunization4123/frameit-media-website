<script>
    export let text;
    export let href;
</script>

<button><a href="{href}">{text}</a></button>

<style>
button{
    border: none;
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
    padding: 8px 20px;
    border-radius: 3px;
    transition: transform 0.3s ease-out;
    box-shadow: 0 0 30px #c47500;
}
button:hover{
    transform: translate(0px, 4px);
}
button a {
    color: #fff;
    text-decoration: none;
}
@media(max-width: 640px){
    button{
        padding: 8px 12px;
    }
    button a{
        font-size: 16px;
    }
}
</style>