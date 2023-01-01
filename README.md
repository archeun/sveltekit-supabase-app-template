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

![Create users table](/docs/installation/img/create-user-table.png?raw=true "Create users table")

- Go to `Database` section
- Click on `Functions` menu and click on `Create new function`
- Create a function referring to the below screenshot
    - **Name**: handle_new_user
    - **Schema**: Public
    - **Arguments**: None
    - **Return type**: Trigger
    - **Definition**:
      ```
      begin
        insert into public.profiles (id, full_name, avatar_url)
        values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
        return new;
      end;
      ```
![Create handle_new_user function](/docs/installation/img/create-handle-new-user-function.png?raw=true "Create handle_new_user function")

- Click on `Triggers` menu and click on `Create a new trigger`
- Create a trigger referring to the below screenshot
  - **Name**: `on_auth_user_created`
  - **Table**: `app_users`
  - **Events**: `Insert`
  - **Trigger type**: `After the event`
  - **Orientation**: `Statement`
  - **Function to trigger**: `handle_new_user`

![Create handle_new_user function](/docs/installation/img/create-handle-new-user-function.png?raw=true "Create handle_new_user function")

- Navigate to the `Authentication` section
- Click on `Providers` menu
- Enable the authentication providers as you wish and set up the credentials accordingly.
- For this template we should enable `Google` provider. Save the `Client ID`, `Client Secret` and the `Redirect URL`
- Go to `Policies` section and create a `New Policy` under the `app_users` table.
- Select `Create policy from scratch` option. Provide the below information.
  - **Policy Name**: `Only the owner can view their profile`
  - **Allowed operation**: `SELECT`
  - **Target roles**: `None`
  - **USING expression**: `(uid() = id)`
- Click on `Review` and `Save Policy`
- Again, create a `New Policy` under the `app_users` table.
- Select `Create policy from scratch` option. Provide the below information.
  - **Policy Name**: `Users can insert their own profile`
  - **Allowed operation**: `INSERT`
  - **Target roles**: `None`
  - **WITH CHECK expression**: `(uid() = id)`
- Click on `Review` and `Save Policy`
- Again, create a `New Policy` under the `app_users` table.
- Select `Create policy from scratch` option. Provide the below information.
  - **Policy Name**: `Users can update own profile`
  - **Allowed operation**: `UPDATE`
  - **Target roles**: `None`
  - **USING expression**: `(uid() = id)`
  - **WITH CHECK expression**: `None`
- Click on `Review` and `Save Policy`
- Go to `URL Configuration` section
- Fill in the `Site URL` to be the URL of the running svelte application (for eg: http://localhost:5173)
- Add `localhost:5173` and `localhost` as `Redirect URLs`

