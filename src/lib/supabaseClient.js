import {createClient} from '@supabase/auth-helpers-sveltekit'
import {SUPABASE_URL, SUPABASE_ANON_KEY} from '$lib/env';

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)