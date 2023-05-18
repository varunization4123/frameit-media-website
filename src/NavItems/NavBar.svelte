<script>
    import Button from "../Reusable Components/button.svelte";
</script>

<div class="navBar">
    <nav>
        <img src = "/images/logo.png" alt="">
        <ul>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#">Our Work</a>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#">Service</a>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#">FAQs</a>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#">About Us</a>
        </ul>
        <Button text="Get in touch" href="#" />
    </nav>
</div>

<style>
    .navBar{
        margin-top: 5%;
    }
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 960px;
        margin: 5% auto;
        overflow: visible;
    }
    nav a{
        display: inline;
        padding: 0px 12px;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
    }
    nav a:hover{
        text-decoration: none;
    }
    @media(max-width: 960px){
        nav{
            margin-bottom: 5%;
            padding: 5% 5%;
        }
        nav a{
            display: none;
        }
    }
</style>