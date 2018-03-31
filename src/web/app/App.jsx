import React from 'react';
import PT from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import ParalaxWrapper from 'modules/ParalaxWrapper';

const PageEl = styled.main`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #a0d945, #05c6f3, #05c6f3, #c86dd7, #c86dd7, #e0a03d);
    background-size: 300% 100%;
    transition: background-position .4s;
    background-position: 0 0;

    ${props => props.page && props.page === 1 && css`
        background-position: 50% 0%;
    `}

    ${props => props.page && props.page === 2 && css`
        background-position: 100% 0%;
    `}
`;

const App = ({ ui }) => (
    <PageEl page={ui.currentPage}>
        <Switch>
            <Route path="/" component={ParalaxWrapper} exact />
        </Switch>
    </PageEl>
);

App.propTypes = {
    ui: PT.shape({
        currentPage: PT.number,
    }),
};

const mapStateToProps = state => ({
    ui: state.ui || {},
});

export default connect(mapStateToProps)(App);
