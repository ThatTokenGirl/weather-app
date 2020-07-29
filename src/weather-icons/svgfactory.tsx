import React, { FunctionComponent } from 'react';
import { SvgOptions } from './types';

const svgFactory: FunctionComponent<SvgOptions> = ({ children, ...props }) => {
    return (
        <svg viewBox={`0 0 ${props.width} ${props.height}`}>
            <g strokeWidth="4" stroke={props.strokeColor} fill={props.fillColor}>
                {children}
            </g>
        </svg>
    )
}

export default svgFactory;