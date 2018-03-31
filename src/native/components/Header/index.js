import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { SVG } from '../';

import { HeaderEl, TitleEl, PreviousEl, NextEl } from './styled';

const Header = ({ fonts, title, ...props }) => (
    <HeaderEl>
        {fonts.loaded && (
            <TitleEl>{title.toUpperCase()}</TitleEl>
        )}

        {props.previousPage && (
            <PreviousEl onPress={() => props.previousPage()}>
                <SVG
                    name="previous"
                    fill="#ffffff"
                    width={20}
                />
            </PreviousEl>
        )}

        {props.nextPage && (
            <NextEl onPress={() => props.nextPage()}>
                <SVG
                    name="next"
                    fill="#ffffff"
                    width={20}
                />
            </NextEl>
        )}
    </HeaderEl>
);

Header.propTypes = {
    fonts: PT.shape({
        loaded: PT.bool,
    }),
    nextPage: PT.func,
    previousPage: PT.func,
    title: PT.string,
};

const mapStateToProps = state => ({
    fonts: state.fonts,
});

export default connect(mapStateToProps)(Header);
