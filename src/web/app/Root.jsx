import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ThemeProvider } from 'styled-components'; // StyleSheetManager is for styled SSR
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import globalStyling from 'config/styles';

import theme from 'constants/theme';
import Loading from 'components/Loading';

import configureStore from 'src/store';
import App from './App';

const { persistor, store } = configureStore(); // persistor.purge(); // Debug to clear persist
globalStyling();

const Root = () => (
    <Provider store={store}>
        <PersistGate
            loading={<Loading />}
            persistor={persistor}
        >
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </PersistGate>
    </Provider>
);

export default Root;
