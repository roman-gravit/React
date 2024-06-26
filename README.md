## React

### 1. Life circle of the component

  - Mounting:  **Add** component to DOM

  - Updateing:  **Change** of the state of the component(via setState)or change of the prop

  - Unmounting: **Delete** component from DOM


- constructor

- getDriveStateFromProps

- getSnapshotBeforeUpdate: before component update. You get PREVIOUS copies of the this.props and this.state

- shouldComponentUpdate: can do optimiztion here. You get FUTURE copies of the this.props and this.state.
						 You can decide do NOT update the component - render() will not be called.

- componentDidUpdate:  called each time after component was updated. You get PREVIOUS copies 
	                   of the this.props and this.state

- componentDidMount:  is the perfect place, where we can call the setState() method to change the state of our 
                      application and render() the updated data loaded JSX.

- componentWillUnmount: called just before deleting from DOM. Do all cleaning stuff here.


- componentWillUnmount(deprecated)

- componentWillUpdate(deprecated)

### 2. What is React Portal

React Portals are a powerful feature in React that allows you to render components outside the current React tree hierarchy. 

Typically, when you render a component in React, it gets inserted into the DOM as a child of its parent component. 

However, there are scenarios where you might need to render a component at a different location in the DOM, such as when 
creating a modal or dropdown menu or tooltip.

  ```
  import {createPortal} from 'react-dom';
  createPortal(children, domNode);
  
  ```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
