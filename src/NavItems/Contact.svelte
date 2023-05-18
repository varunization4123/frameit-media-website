<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import {fade, fly} from "svelte/transition";

    let elementOnce;
    let intersectOnce;
</script>

<IntersectionObserver once element={elementOnce} bind:intersecting={intersectOnce}>
    <div bind:this={elementOnce}>
        {#if intersectOnce}
        <div class="contactForm" transition:fade={{delay:300, duration: 500}}>
            <div class="lhs">
                <h1 transition:fly="{{ y: 50, duration: 600, delay: 600 }}">Get in touch</h1>
                <p transition:fly="{{ y: 50, duration: 600, delay: 600 }}">If you think we’re a good fit to work with, connect with us and we can take this further by scheduling a quick video call.  We look forward to working with you to create high-quality YouTube content that engages and entertains your audience.</p>
            </div>
            <div class="rhs">
                <form name="contact" data-netlify="true" method="POST">
                    <input id="firstName" type="text" placeholder="First Name">
                    <input id="lastName" type="text" placeholder="Last Name">
                    <input id="emailAddress" type="text" placeholder="Email Address">
                </form>
                <button>Contact Us</button>
            </div>
        </div>
        {/if}
    </div>
</IntersectionObserver> 

<style>
    .contactForm{
        max-width: 960px;
        margin: 0% auto 8% auto;
        background-image:  linear-gradient(rgb(168, 109, 0), rgb(165, 47, 0));
        border-radius: 10px;
        display: inline-flex;
        text-align: left;
        justify-items: center;
        align-items: center;
    }
    h1, p{
        margin: 1%;
    }
    h1{
        text-shadow: 0 0 3px rgb(255, 255, 255);
    }
    p{
        font-size: 16px;
        line-height: 18px;
    }
    .lhs{
        max-width: 40%;
        padding: 5% 5%;
        
    }
    .rhs{
        max-width: 40%;
        padding: 5% 5%;
    }
    input{
        width: 100%;
        margin: 1% 0%;
        border-radius: 5px;
    }
    button{
        padding: 3% 5%;
        font-family: "Druk";
        font-size: 16px;
        text-align: left;
        align-items: start;
        color: #000000;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        border: none;
        box-shadow: 0 0 10px rgb(255, 255, 255);
        margin-top: 5%;
    }
    @media(max-width: 960px){
        .contactForm{
            display: block;
            text-align: center;
            padding: 5% 3%;
            margin: 0% 5% 20% 5%;
        }
        .lhs{
            max-width: 100%;
            padding: 0%;
            margin-bottom: 6%;
        }
        .rhs{
            max-width: 100%;
            padding: 0%;
            margin-bottom: 1%;
        }
    }
    @media(max-width: 640px){
        h1{
            font-size: 20px;
            line-height: 20px;
        }
        p{
        font-size: 16px;
        line-height: 18px;
        }
    }
</style>