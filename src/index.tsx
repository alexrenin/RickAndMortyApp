import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContainer from './components/templates/appContainer/AppContainer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <App />
    </AppContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
