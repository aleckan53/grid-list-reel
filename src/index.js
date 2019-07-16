import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './variables.css';
import App from './components/App/App';
import { DataProvider } from './context/DataContext';

const tree = (
  <DataProvider>
    <App/>
  </DataProvider>
);

ReactDOM.render(tree, document.getElementById('root'));