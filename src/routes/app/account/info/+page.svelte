<script>
    import {page} from '$app/stores'
    import {onMount} from 'svelte'
    import {supabaseClient} from '$lib/supabaseClient'

    const session = $page.data.session;
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
</script>

<svelte:head>
    <title>Supabase + SvelteKit</title>
    <meta name="description" content="SvelteKit using supabase-js v2"/>
</svelte:head>

<div class="flex justify-center">
    <div class="card w-full bg-base-100 shadow-lg bg-info">
        <figure class="pt-5"><img alt="{username}" src="{avatarUrl}"></figure>
        <div class="card-body">
            <form class="form-widget" on:submit|preventDefault="{updateProfile}">
                <p class="mb-3">
                    <label class="input-group">
                        <span>Email</span>
                        <input id="email" type="text" class="input w-full max-w-xs" value="{session.user.email}"
                               disabled/>
                    </label>
                </p>
                <p class="mb-3">
                    <label class="input-group">
                        <span>Name</span>
                        <input id="username" type="text" class="input w-full max-w-xs" bind:value="{username}"/>
                    </label>
                </p>
                <div class="card-actions justify-end">
                    <input type="submit" class="btn btn-primary" value={loading ? 'Loading...' : 'Update'}
                           disabled={loading}/>
                </div>
            </form>
        </div>
    </div>
</div>
