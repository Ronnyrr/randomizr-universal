import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ThemeProvider } from 'styled-components';

import Loading from './src/native/components/Loading';
import theme from './src/config/theme';
import { configurePersistStore } from './src/store';
import App from './src/native/index';

const { persistor, store } = configurePersistStore();

const Root = () => (
    <Provider store={store}>
        <PersistGate
            loading={<Loading />}
            persistor={persistor}
        >
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </PersistGate>
    </Provider>
);

export default Root;
