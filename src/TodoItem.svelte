<script>
    // The event dispatcher can dispatch custom events.
    // Reference: https://svelte.dev/docs#run-time-svelte-createeventdispatcher
    import { createEventDispatcher } from 'svelte';

    // Create the dispatch function.
    const dispatch = createEventDispatcher();
    
    // Create a task removal callback function,
    // called on the click of the trash can.
    function remove() {
        // Dispatch a "remove" custom event with the task ID,
        // which can be handled by the consumer component's
        // on:remove={handler} function.
		dispatch('remove', { id });
	}

    // Create a task completion toggle callback function,
    // called on the click of the check or X icon.
	function toggleStatus() {
        let newStatus = !complete;
        // Dispatch a "toggle" custom event with the task ID and status,
        // which can be handled by the consumer component's
        // on:toggle={handler} function.
		dispatch('toggle', {
            id,
            newStatus
        });
    }
    // Set props which can be passed in by the consumer component:
    // task ID and task text, completeness status.
    export let id; // document ID
    export let text;
    export let complete;
</script>

<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }
</style>

<!-- This component renders one list item. -->
<li>
<!-- Render components conditionally. -->
{#if complete}
    <!-- Render the check button and a strikethrough text style if the complete prop is true. -->
    <span class="is-complete">{ text }</span>
    <button on:click={toggleStatus}> ✔️ </button>
{:else}
    <!-- Render the X button if the complete prop is false. -->
    <span>{ text }</span>
    <button on:click={toggleStatus}> ❌ </button>
{/if}
<!-- Always render the trash button regardless of the complete prop value. -->
<button on:click={remove}> 🗑 </button>

</li>