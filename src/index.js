import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from 'styles/theme';
import { makeServer } from 'server';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <ChakraProvider resetCSS theme={customTheme}>
    <Router>
      <App />
    </Router>
  </ChakraProvider>
  </Provider>
  </React.StrictMode>
);
