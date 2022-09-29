<script>
    // The <script/> block contains JavaScript code that runs when the component is instantiated.
    // Reference: https://svelte.dev/docs#component-format-script
    // The export keyword marks a variable declaration as a prop
    // whose value can be provided by consumers of the component.
    export let displayName;
    export let photoURL;
    export let uid;
</script>

<!-- This is the HTML template that the component will render. -->
<!-- This component displays the user information, including name and photo. -->
<h3>Hi { displayName }!</h3>

<img src={ photoURL } width="100" alt="user avatar">
<p>Your userID is { uid }</p>