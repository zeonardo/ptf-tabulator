
# Leonardo Lima: PTF Tabulator

  
![Expected screen output](https://github.com/zeonardo/ptf-tabulator/blob/master/src/assets/tabulator.png)


## Applications and repositories

* Challenge page: [deployed ptf-tabulator](https://zeonardo.github.io/ptf-tabulator)
* Tabulator Component lib: [ztabs on NPM](https://www.npmjs.com/package/ztabs)
* Tabulator Component repo: [ztabs on GitHUb](https://github.com/zeonardo/ztabs)

  

## Required Tasks
  
1. ✅ Implement Tab and TabPane components
2. ✅ Support uncontrolled and controlled modes in parallel

### Bonus Tasks

1. ✅ Implement another version of *Tab* which renders each pane just once.
2. ⚠️ Update types to prevent out-of-bound *active* / *initialActive* values (if it's technically possible)
3. ✅ Write tests for your component(s).
4. ✅ Publish your component as an NPM library. Make sure it can be used in a TypeScript-based project.
5. ✅ Optionally: deploy a working instance somewhere.


### Extra Miles

- Basic [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) with "tab key" navigation and [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) roles
- Basic styling with styled-components library (TODO: use ThemeProvider)


### Assumptions

- Tabulator... is Tabs!(?) And not tabular data 😅
- Tab content can be any text or HTML
- Due to [`Bonus Task #4`](#bonus-tasks), library specific tests from [`Bonus Task #3`](#bonus-tasks) were written inside the library. The ptf-tabulator app has duplicates of those tests for development purposes

###

## Available Scripts


In the project directory, you can run:

  

### `yarn start` or `npm start` (*yarn preferred*)

  

Runs the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes to the code.

You may also see any lint errors in the console.

 

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.

  

### `yarn build` or `npm run build`

Builds the app for production intto the `build` folder.
The build is minified and the filenames include the hashes.
