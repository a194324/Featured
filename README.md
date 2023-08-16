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

переменную d` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
npm i sass
npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

<!-- <img src={require('./logo.jpeg')} /> -->

import logo from './logo.svg' обьявили и импортировали logo и вывели ее в src={logo}

<img src={logo} className="App-logo" alt="logo"/>

ни каких scss использовать только css и подключать index.css -> index.js iApp.css -> App.js
sass в реакте заморочка

.nav-link {
font-family: 'Roboto', sans-serif;
color: hwb(220 93% 6%) !important;
}
так задавать цвет для

<Nav.Item >
<Nav.Link href="/home">JACKETS</Nav.Link>
</Nav.Item>

вывод карточек товара методом map смотри Featured.js и Card.js

<!-- Featured.js -->

import React from "react";

import { prolData } from "./data/prolData";
import Card from './Card'

function Featured() {

return (

  <div className="content p-40">
    <h1>
      <b>FEATURED</b> ARRIVALS
    </h1>
    <p className="bnm">
      “Whoever said money cant buy happiness simply didnt know WHERE TO SHOP”
    </p>
    <div className="d-flex flex-wrap">
{prolData.map(obj => (
  <Card
  image={obj.image}
  title={obj.title}
  price={obj.price}
  />
))}
    </div>
    </div>

);

}
export default Featured;

<!-- Card.js -->

function Card(props) {
return(

<div className="card">
<div className="zx">
<img
src={require('../assets/images/arrivel/prol/' +
props.image +
'.jpg')}
className="img-fluid"
alt={props.title}
/>
<h3 className="as">{props.title}</h3>
<div>
<span>Цена:</span>
<b className="az"> {props.price}</b>
</div>
</div>
</div>
);
}
export default Card;

d-flex flex-wrap позволяет делать адаптивные картинки
