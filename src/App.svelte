<script>
    // Import the <Profile/> and <Todos/> components.
    import Profile from './Profile.svelte';
    import Todos from './Todos.svelte';
    // Import the auth variables defined in ./firebase.js
    import { auth, googleProvider } from './firebase';
    // Define an observable that emits log-in/log-out states.
    // Reference: https://github.com/FirebaseExtended/rxfire/blob/main/docs/auth.md#authstate
    import { authState } from 'rxfire/auth';

    let user;

    // Subscribe to authentication state changes.
    // When the state has changed, save the new state in the "user" variable.
    const unsubscribe = authState(auth).subscribe(u => user = u);

    // Create a login callback function, called when the user
    // has clicked the "sign-in with google" button.
    function login() {
        // Call the sign-in utility provided by the Firebase SDK,
        // specifying that we want to use Google Accounts for authentication.
        auth.signInWithPopup(googleProvider);
    }
</script>

<section>
{#if user}
    <!-- Render the user's information (profile and task list) when someone is logged in. -->
    <Profile {...user} />
    <button on:click={ () => auth.signOut() }>Logout</button>
    <hr>
    <Todos uid={user.uid} />
{:else}
    <!-- Render the sign-in button when not logged in. -->
	<button on:click={login}>
		Signin with Google
	</button>
{/if}
</section>