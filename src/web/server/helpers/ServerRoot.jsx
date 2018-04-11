import React from 'react';
import PT from 'prop-types';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import globalStyling from 'config/styles';
import theme from 'config/theme';
import configureStore from 'src/store';

import App from 'app/App';

globalStyling();

const ServerRoot = ({ location, sheet }) => (
    <Provider store={configureStore}>
        <StyleSheetManager sheet={sheet}>
            <ThemeProvider theme={theme}>
                <StaticRouter location={location} context={{}}>
                    <App />
                </StaticRouter>
            </ThemeProvider>
        </StyleSheetManager>
    </Provider>
);

ServerRoot.propTypes = {
    location: PT.string,
    sheet: PT.object,
};

export default ServerRoot;
