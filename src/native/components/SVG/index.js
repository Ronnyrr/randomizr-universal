import React from 'react';
import PT from 'prop-types';
import { Svg } from 'expo';

const { Path } = Svg;

const SVG = ({
    name, fill, width, height, ...otherProps
}) => {
    const graphics = {
        next: {
            width: 25,
            height: 15,
            content: (
                <Path
                    fill={fill}
                    d="M15.072 12.747L17.366 15 25 7.5 17.366 0l-2.294 2.253 3.72 3.654H0v3.186h18.791z"
                />
            ),
        },
        previous: {
            width: 25,
            height: 15,
            content: (
                <Path
                    fill={fill}
                    d="M9.928 12.747L7.634 15 0 7.5 7.634 0l2.294 2.253-3.72 3.654H25v3.186H6.209z"
                />
            ),
        },
        dice: {
            width: 19,
            height: 21,
            content: (
                <Path
                    fill={fill}
                    d="M.003 15.4c0 .511.286.984.743 1.23l7.827 4.184V10.219L.003 5.74v9.66zM5.717 14c.789 0 1.429.626 1.429 1.4 0 .773-.64 1.4-1.429 1.4-.79 0-1.428-.627-1.428-1.4 0-.774.638-1.4 1.428-1.4zM2.86 9.8c.788 0 1.428.626 1.428 1.4 0 .773-.64 1.4-1.428 1.4-.79 0-1.429-.627-1.429-1.4 0-.774.64-1.4 1.429-1.4zM9.973.17a1.456 1.456 0 0 0-1.37 0C8.34.31.85 4.303.609 4.473l8.678 4.536 8.679-4.538C17.729 4.302 10.23.31 9.973.17zM10 20.814l7.83-4.185a1.4 1.4 0 0 0 .744-1.229V5.74L10 10.221v10.593zm4.289-9.614c.788 0 1.428.626 1.428 1.4 0 .773-.64 1.4-1.428 1.4-.79 0-1.429-.627-1.429-1.4 0-.774.639-1.4 1.429-1.4z"
                />
            ),
        },
    };

    const viewBoxWidth = graphics[name].width;
    const viewBoxHeight = graphics[name].height;
    const viewBoxRatio = viewBoxWidth / viewBoxHeight;

    return (
        <Svg
            width={width || (height && parseInt(height * viewBoxRatio, 10)) || 100}
            height={height || (width && parseInt(width / viewBoxRatio, 10)) || 100}
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            {...otherProps}
        >
            {graphics[name].content}
        </Svg>
    );
};

SVG.propTypes = {
    name: PT.string.isRequired,
    fill: PT.string,
    width: PT.number,
    height: PT.number,
};

SVG.defaultProps = {
    fill: 'black',
};

export default SVG;
