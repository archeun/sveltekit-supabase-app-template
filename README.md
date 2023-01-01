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
- Create a new Supabase project
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
- Navigate to the `Table Editor` section and create a new table to store the user information.
Please refer to the below sample screenshot

[Create users table](docs/installation/img/create-user-table.png)
![Create users table](/docs/installation/img/create-user-table.png?raw=true "Create users table")

Coming soon...
