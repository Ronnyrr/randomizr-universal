import React, { Component } from 'react';
import PT from 'prop-types';
import { Font } from 'expo';
import { connect } from 'react-redux';

import RootStack from './routes';
import { setFontsLoaded } from '../ducks/fonts';

class App extends Component {
    async componentDidMount() {
        await Font.loadAsync({
            'circular-pro-bold': require('../assets/fonts/CircularPro-Bold.otf'),
            'circular-pro-book': require('../assets/fonts/CircularPro-Book.otf'),
            'nimbus-black': require('../assets/fonts/NimbusSansDOT-Black.otf'),
            'nimbus-black-italic': require('../assets/fonts/NimbusSansDOT-BlackItalic.otf'),
        });

        this.props.setFontsLoaded();
    }

    render() {
        return <RootStack />;
    }
}

App.propTypes = {
    setFontsLoaded: PT.func,
};

const mapDispatchToProps = {
    setFontsLoaded,
};

export default connect(null, mapDispatchToProps)(App);
