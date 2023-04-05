<script>
    import {page} from '$app/stores'
    import {onMount} from "svelte";
    import {routeToPage} from '$lib/navigationUtil';
    import {supabaseClient} from "../lib/supabaseClient.js";

    onMount(() => {
        if ($page.data.session) {
            routeToPage('/app')
        }
    })

    async function signInWithGoogle() {
        const {data, error} = await supabaseClient.auth.signInWithOAuth({
            provider: 'google',
        })
    }
</script>

<div>
    Landing Page
    <div class="flex justify-center">
        <button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
    </div>
</div>