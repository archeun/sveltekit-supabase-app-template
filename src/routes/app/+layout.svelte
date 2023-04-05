<script>
    import {supabaseClient} from '$lib/supabaseClient'
    import {invalidate} from '$app/navigation'
    import {onMount} from 'svelte'
    import '$lib/css/main.css'

    onMount(() => {
        const {
            data: {subscription},
        } = supabaseClient.auth.onAuthStateChange(() => {
            invalidate('supabase:auth')
        })

        return () => {
            subscription.unsubscribe()
        }
    })
</script>

<div class="container">
    <div class="drawer drawer-mobile">
        <input id="menu-drawer" type="checkbox" class="drawer-toggle"/>
        <div class="drawer-content flex flex-col items-center justify-center">
            <slot/>
        </div>
        <label for="menu-drawer" class="btn rounded-none btn-xs lg:hidden fixed mt-0 ml-0">::</label>
        <div class="drawer-side">
            <label for="menu-drawer" class="drawer-overlay"></label>
            <ul class="menu ml-0 pl-1 p-2 w-16 bg-base-300 text-base-content">
                <li>
                    <a href="/app">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="/app/account/info">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </a>
                </li>
                <li class="absolute bottom-0">
                    <a href="/app/account/logout">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>