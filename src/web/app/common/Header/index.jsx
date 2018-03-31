import React from 'react';
import PT from 'prop-types';

import { HeaderEl, TitleEl, PreviousEl, NextEl } from './styled';

const Header = ({ title, ...props }) => (
    <HeaderEl>
        <TitleEl>{title}</TitleEl>

        {props.previousPage && (
            <PreviousEl onClick={() => props.previousPage()} />
        )}

        {props.nextPage && (
            <NextEl onClick={() => props.nextPage()} />
        )}
    </HeaderEl>
);

Header.propTypes = {
    nextPage: PT.func,
    previousPage: PT.func,
    title: PT.string,
};

export default Header;
