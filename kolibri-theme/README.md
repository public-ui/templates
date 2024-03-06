# Public UI - KoliBri Demo-Theme

Example to illustrate how the KoliBri _React Sample App_ can be utilized for the theme development process.

First of all, install the dependencies: `npm i` or `pnpm i` or `yarn`.

Run `npm start` launch the _React Sample App_ with the `DEMO` theme defined in `src/index.ts` applied.

Run `npm test` to test the theme and execute the snapshot tests.

Run `npm pack` to create a tarball npm package of the theme. Note that you need to change the `name`, `version`, `description`, `author` and `license` fields in `package.json` before publishing the theme.

## TODO

- The **ESLint** type errors with `@public-ui/schema` in `src/index.ts` file.
- Proof the **Playwright** setup. Because where should be installed the browsers?
