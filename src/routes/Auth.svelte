<script>
    import {supabaseClient} from '$lib/supabaseClient'

    async function signInWithGoogle() {
        const {data, error} = await supabaseClient.auth.signInWithOAuth({
            provider: 'google',
        })
    }
</script>

<div class="row flex-center flex">
    <button on:click={signInWithGoogle}>Sign in with Google</button>
</div>