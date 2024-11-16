import './index.scss';
import './assets/fonts/inter/inter.scss';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { App } from './Components/App';
import { ErrorCatcher } from './Components/Common/Errors/ErrorCatcher/ErrorCatcher';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorCatcher>
          <App />
        </ErrorCatcher>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

reportWebVitals();
