import App from './App.svelte';

// Each svelte (client-side) component is a generated JavaScript class.
// Reference: https://svelte.dev/docs#run-time-client-side-component-api-creating-a-component
const app = new App({
	// The HTML element to render to.
	target: document.body,
});

// Set the instantiated component as the main export.
export default app;