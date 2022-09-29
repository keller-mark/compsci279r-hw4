<script>
    // Import the TodoItem component.
    import TodoItem from './TodoItem.svelte';
    // Import the database object.
    import { db } from './firebase';
    // The collectionData emits a stream of documents for the specified collection.
    // Reference: https://github.com/FirebaseExtended/rxfire/blob/main/docs/firestore.md#collectiondata
    import { collectionData } from 'rxfire/firestore';
    // The startWith operator will synchronously emit all values provided to it,
    // and then subscribe to the source.
    // Reference: https://rxjs.dev/api/operators/startWith
    import { startWith } from 'rxjs/operators';

    // The uid represents the user ID passed from the consumer component.
    export let uid;

    // The text that is bound to the <input/> element,
    // with an initial task named 'some task'.
    let text = 'some task';

    // Access the 'todos' collection in the database.
    const query = db.collection('todos')
        // Only load the subset of tasks corresponding to this logged-in user.
        .where('uid', '==', uid)
        // Order the tasks by their creation date/time.
        .orderBy('created');

    // Get a stream of tasks from the collection specified in the query.
    // Change required for firebase 9: 'id' -> { idField: 'id' }
    const todos = collectionData(query, { idField: 'id' })
        // Start with an empty list and append the returned tasks to the list.
        .pipe(startWith([]));

    // The add handler will be called by the add task button.
    function add() {
        // Access the 'todos' collection in the database.
        db.collection('todos')
            // Create a new document (task) in this collection,
            // specifying the user (uid) and name (text).
            // Set it to incomplete and created at the current date/time.
            .add({ uid, text, complete: false, created: Date.now() });
        // Reset the text used in the input element, so that the user can add a new task.
        text = '';
    }

    // The updateStatus handler will be called upon dispatches of the "toggle" event.
    function updateStatus(event) {
        // Get the new status and the task ID from the event object.
        const { id, newStatus } = event.detail;
        db.collection('todos')
            // Access the specific task from the collection based on its ID.
            .doc(id)
            // Update the task document and its "complete" property.
            .update({ complete: newStatus });
    }

    // The removeItem handler will be called upon dispatches of the "remove" event.
    function removeItem(event) {
        // Get the task ID from the event object.
        const { id } = event.detail;
        db.collection('todos')
            // Access the specific task from the collection based on its ID.
            .doc(id)
            // Delete the task document from the collection.
            .delete();
    }
</script>

<style>
    input { display: block }
</style>

<!-- Render the list of tasks in an unordered list (because we want the bullet style rather than the number style). -->
<ul>
    <!-- Render each todo in the todos list in a <TodoItem/> component. -->
	{#each $todos as todo}
        <!-- Pass the todo object values as props, along with the "remove" and "toggle" event handlers. -->
        <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
	{/each}
</ul>

<!-- Render the form. -->
<input bind:value={text}>
<button on:click={add}>Add Task</button>