import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import globalStyling from 'config/styles';
import theme from 'config/theme';
import configureStore from 'src/store';

import App from './App';

globalStyling();

const Root = () => (
    <Provider store={configureStore}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);

export default Root;
