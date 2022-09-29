# compsci279r-hw4

## How to open hosted version

Navigate to https://keller-mark.github.io/compsci279r-hw4/ in a web browser.

## How to open locally

1. Install NodeJS/NPM

2. Install NPM package dependencies

```sh
npm install
```

3. Start development server:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080).

## Deployment

Run

```bash
npm run build
```

## Resources

The following resources were used:
- https://fireship.io/lessons/svelte-v3-overview-firebase/
- https://firebase.google.com/docs/web/setup
- https://firebase.google.com/docs/firestore/quickstart
- https://svelte.dev/docs
- https://github.com/firebaseextended/rxfire

<!--
## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```


If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).


-->