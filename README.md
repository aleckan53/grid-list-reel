## REEL task - Grid List

<a href='https://grid-list.olegakan5326.now.sh'>LIVE DEMO</a>

React Context API is used for global state mangement (Redux alternative).


### Components stucture
<img src='./readme/tree.jpeg'/>

### Data flow
<img src='./readme/data.jpeg'/>

<strong>First render</strong> green arrow<br/>
1. List view fetches data from mock API server
2. API reponse updates ListView local and global (context) data stores
3. <strong>Finnaly</strong> ListView maps it's local state and renders Cards

<strong>Search handling</strong> purple arrow<br/>
1. In `Search` `onChange` event updates `searchTerm` locally in `useInput` hook.    
2. Once typing is done, updates global `searchTerm` value in context with .6s delay (resets on every key press, delay value passed by argument to `useInput` in `Search`). ListView `useSearch` hook reacts on `searchTerm` value change and filters global `store` items to find a string match. Then updates `ListView` local store 
3. <strong>Finnaly</strong> ListView maps it's local state and renders Cards
 
<strong>Sort handling</strong> blue arrow<br/>
1. In `Sort`, `SortButton` `onClick` event changes global `sortType` value.
2. `useSort` hook in `ListView` observes changes of `sortType` value in global store (context). Resorts when the `sortType` value changes.
Default `undefined`. Double click on the same `sortType` changes order descending (`orderDSC=true`) to ascending (`orderDSC=false`)
3. <strong>Finnaly</strong> ListView maps it's local state and renders Cards

### Folders structure
```
src
  |____ components
  |   |____SomeComponent
  |       |____css
  |           |____ styles.module.scss
  |           |____ styles.module.css
  |       |____ tests
  |       |____ components
  |           |____ SomeSubComponent.js
  |       |____ SomeComponent.js
  |____ context
  |   |____ ContextFile.js
  |____ hooks
  |   |____ useCustomHook.js
  |____ testUtils
  |   |____ someMock.js
  |____ utils
      |____ someUtil.js

```
#### jsconfig.json for Absolute path
```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

#### Dev dependancies
```
  "@testing-library/react": "^8.0.5",
  "@types/jest": "^24.0.15",
  "enzyme": "^3.10.0",
  "enzyme-adapter-react-16": "^1.14.0",
  "enzyme-to-json": "^3.3.5"
```
SASS compiler for VSCode
https://github.com/ritwickdey/vscode-live-sass-compiler

### Responsive layout

Achieved using combination of `css-grid`
```
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```
and `@media` breakpoints changing bodyPadding css variable
```
@media (min-width: 500px) {
  :root {
    --bodyPadding: 2rem 2rem;
  }
}
```

### TODOs if I had more time

More tests<br/>
CSS animations<br/>
Decompose Card.module.scss<br/>
Add Filter to filter list items<br/>
