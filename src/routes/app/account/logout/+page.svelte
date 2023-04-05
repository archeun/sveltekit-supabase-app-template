<script>
    import {onMount} from "svelte";
    import {routeToPage} from '$lib/navigationUtil';
    import {supabaseClient} from "$lib/supabaseClient";

    onMount(async () => {
        try {
            let {error} = await supabaseClient.auth.signOut()
            if (error) throw error
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        } finally {
            routeToPage('/')
        }
    })

</script>

<div>
    Landing Page
</div>