
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/configureStore';
import App from './components/app';



ReactDOM.render(
 <React.StrictMode>
 <Provider store={store}>
   <BrowserRouter>
     <App />
   </BrowserRouter>
 </Provider>
</React.StrictMode>,
  document.getElementById('root'),
);

