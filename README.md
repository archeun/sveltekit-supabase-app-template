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
- Navigate to the `SQL Editor` section and select the `User Management Starter SQL` snippet
- Run the snippet and make sure a table called `profiles` appear in the `Table Editor` section
- Go to `URL Configuration` section
- Fill in the `Site URL` to be the URL of the running svelte application (for eg: http://localhost:5173)
- Add `localhost:5173` and `localhost` as `Redirect URLs`
- Open a Command Line/Terminal and navigate into the root directory of the project
- Run `npm install` to install the dependencies
- Run `npm run dev`. And open the link shown in the terminal from the browser `http://localhost:5173`
- You should see a button called `Login with Google`. Upon clicking on it and authorizing, you will be redirected back to the app
- You should see a form with your avatar image, email, Name, an Update button and a Logout button
- Type something on the name input and click on `Update` button.
- Finally, verify that the name got updated properly by reloading the page.

