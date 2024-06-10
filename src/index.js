import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './styles/global.css';
import App from './App';
import store, { persistor } from './redux/store';
import { Toaster } from "@/components/ui/toaster"
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <App />
          <Toaster /> 
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
