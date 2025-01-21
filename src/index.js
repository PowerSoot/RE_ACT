import React from 'react';
import App from './Views/App';

ReactDOM.render(<App />, document.getElementById('root'));
// index.js
const dataContainer = document.getElementById('data-container');
const dataContainer = document.getElementById('data-container');
const data = { name: 'John', age: 30 };

const template = Handlebars.compile(dataContainer.innerHTML);
dataContainer.innerHTML = template(data);