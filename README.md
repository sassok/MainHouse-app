Welcome to Mainhouse, the SAAS plateform that helps real-estate agencies and its customers to deal with their goods. 

The heroku link of the app is : https://mainhouse-develop.herokuapp.com/
The heroku link of the API is : https://mainhouseapi.herokuapp.com/agencies  OR  https://mainhouseapi.herokuapp.com/owners

To sign in as an agency, you can click on the "connexion agence" link located on the top-right corner of your screen, and enter the following : 

email : test1@test.com
password : testtest

Once connected as an agency, you will discover a template of the app, in which a number of actions are possible, such as : 
- scroll through "your" buildings
- get details on a building (its details, its owners, its events) and edit or delete them
- add a building
- scroll through "your" events (which are linked to a building)
- get details on an event and edit or delete them
- add an event
- get to your own profile
- edit it
- scroll through "your" owners (which are linked to a building)
- get details on an owner and delete them
- add an owner

This particular last step will allow an email to be sent to the owner created in which he will gain access to his own account with a provided (and randomly generated) password.
If you want to skip this step, you can easily sign in as an owner if you disconnect as an agency and get back to our landing page. There, just click on the "connexion propriétaire" button, located at the top of your screen once again, and enter the following : 

email : owner_test1@gmail.com
password : testtest

Here you will get access to, visually, the same app as the agencies, but with a more limited access to what the API provides, such as : 
- scroll through "your" events (which are linked to the building in which you own appartments)
- get details on an event 
- add an event
- get to your own profile
- edit it

Given the fact that we intend to sell this app, there is still much work to do in order to improve it with libraries and functionalities.
For instance, we intend to add a live chat for every building, and every agency, an ADMIN account which will allow us to add new agencies as customers, a Tennant sign in, with access to the chat, and obviously a Dark Theme, which is still displayed in our sidebar as you probably saw.
We do hope you will enjoy your stay in our little app. 


TECHNICALITIES

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
