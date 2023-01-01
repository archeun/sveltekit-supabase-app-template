# svelte-supabase-user-portal-template
This template repository can be used as a skeleton for developing a web app that has a user authentication and profile management.

## Technology stack

- SvelteKit
- Supabase (Auth, Database) - Google SSO added
- TailwindCSS + DaisyUI

## Features

- Login with Google
- Backend database (Supabase) to store users and their additional information
- Manage basic profile information

## Installation

- Create a file named `.env` in the root directory of the project. Put the below content into the file
  ```
  PUBLIC_SUPABASE_URL=
  PUBLIC_SUPABASE_ANON_KEY=
- Create a Supabase project (if you have already created one you may use it).
- Navigate to the Project Settings page in Supabase.
- Select the API settings page.
- Navigate to Project URL section and copy the `URL`.
- Paste it into the `.env` file in front of the `PUBLIC_SUPABASE_URL` key. It should look like this.
  ```
  PUBLIC_SUPABASE_URL=https://<example>.supabase.co
- Navigate to Project API Keys section and copy the `anon` `public` key.
- Paste it into the `.env` file in front of the `PUBLIC_SUPABASE_URL` key. It should look like this.
  ```
  PUBLIC_SUPABASE_ANON_KEY=<anon-key>
- 

Coming soon...
