<script>
    import {onMount} from 'svelte'
    import {supabaseClient} from '$lib/supabaseClient'

    export let session;

    let loading = false
    let username = null
    let avatarUrl = null

    onMount(() => {
        getProfile()
    })

    const getProfile = async () => {
        try {
            loading = true
            const {user} = session

            const {data, error, status} = await supabaseClient
                .from('profiles')
                .select(`username, avatar_url`)
                .eq('id', user.id)
                .single()

            if (data) {
                username = data.username
                avatarUrl = data.avatar_url
            }

            if (error && status !== 406) throw error
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        } finally {
            loading = false
        }
    }

    async function updateProfile() {
        try {
            loading = true
            const {user} = session

            const updates = {
                id: user.id,
                username,
                avatar_url: avatarUrl,
                updated_at: new Date(),
            }

            let {error} = await supabaseClient.from('profiles').upsert(updates)

            if (error) throw error
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        } finally {
            loading = false
        }
    }

    async function signOut() {
        try {
            loading = true
            let {error} = await supabaseClient.auth.signOut()
            if (error) throw error
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        } finally {
            loading = false
        }
    }
</script>

<form class="form-widget" on:submit|preventDefault="{updateProfile}">
    <img alt="{username}" src="{avatarUrl}">
    <div>
        <label for="email">Email</label>
        <input id="email" type="text" value="{session.user.email}" disabled/>
    </div>
    <div>
        <label for="username">Name</label>
        <input id="username" type="text" bind:value="{username}"/>
    </div>

    <div>
        <input type="submit" class="button block primary" value={loading ? 'Loading...' : 'Update'}
               disabled={loading}/>
    </div>

    <div>
        <button class="button block" on:click="{signOut}" disabled="{loading}">Sign Out</button>
    </div>
</form>