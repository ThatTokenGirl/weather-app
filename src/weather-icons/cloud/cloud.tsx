import React from 'react';
import { IconProps } from '../types';

export default function(props: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
            <g stroke={props.strokeColor} strokeWidth="4" fill={props.fillColor}>
                <path d="
                    M 40 200 
                    H 250 
                    A 48 54 0 0 0 250 92
                    A 45 45 0 0 0 182 45
                    A 80 90 0 0 0 40 92
                    A 38 54 0 0 0 40 200
                "></path>
            </g>
        </svg>
    )
}