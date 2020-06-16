import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 8000,
  position: positions.MIDDLE,
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
