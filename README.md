## Weather forecast

![weather forecast](https://user-images.githubusercontent.com/6945816/86270573-bc4adf00-bbcb-11ea-9065-903ca639f474.png)

This app shows the weather forecast for today using *openweathermap* api. 

To run the app, add a valid api key for *openweathermap* api to your `.env.local` file and run `yarn install` if it's your first time.

This proyect uses `prop-types`, `styled-components`. For unit tests `react-testing-library`.

It automatically format the code before every commit using prettier and eslint, so you don't have to worry about style during development.

The proyect has four components:

* Card: which renders the time, icon and temperature. It recives all the data via props plus a `handleOnClick` event and `isActive` to change the background of the "active" card.

* List: It receives a list of items and iterates this array to render the cards.

* Details: Renders the details of the selected card: weather, place and time data.

* Weather: It wrapps everything and calls the api through `fetchWeather` which returns all the data ready to use, to accomplish that, `fetchWeather` uses some utils available in `weather.js` and `time.js` to parse data.
Weather also handles the active card and the data shown in Details as well as loading and failed state from the api call.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
