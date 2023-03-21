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
                <h1 transition:fly="{{ y: 100, duration: 600, delay: 600 }}">Get in touch</h1>
                <p transition:fly="{{ y: 100, duration: 600, delay: 600 }}">If you think we’re a good fit to work with, connect with us and we can take this further by scheduling a quick video call.  We look forward to working with you to create high-quality YouTube content that engages and entertains your audience.</p>
            </div>
            <div class="rhs">
                <form name="contact" data-netlify="true" method="POST" netlify>
                    <input id="firstName" type="text" placeholder="First Name" name="name">
                    <input id="lastName" type="text" placeholder="Last Name">
                    <input id="emailAddress" type="text" placeholder="Email Address" name="email">
                    <input id="btn" type="submit" value="Contact Us">
                </form>
            </div>
        </div>
        {/if}
    </div>
</IntersectionObserver> 

<style>
    .contactForm{
        max-width: 960px;
        margin: 0% auto 6% auto;
        background-color:  #ad6800;
        border-radius: 10px;
        display: inline-flex;
        text-align: left;
        justify-items: center;
        align-items: center;
    }
    h1, p{
        margin: 0%;
    }
    .lhs{
        max-width: 36%;
        padding: 5% 5%;
    }
    input{
        margin: 1% 0%;
        border-radius: 5px;
    }
    #btn {
        padding: 1% 3%;
        font-size: 16px;
        color: #fff;
        background-color: black;
        border: none;
        box-shadow: 0 0 10px black;
        margin: 0% 5%;
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
        }
        #btn{
            margin: 5% 25% 5% 25%;
        }
    }
    @media(max-width: 504px){
        #btn{
            margin: 5% 15% 5% 15%;
        }
    }
</style>