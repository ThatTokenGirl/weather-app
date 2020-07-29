import React from 'react';
import "../_base.css";
import { IconProps } from '../types';

export default function(props: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <g stroke={props.strokeColor} strokeWidth="3" fill={props.fillColor}>
                <circle cx="50" cy="50" r="24"/>
                <line x1="50" y1="0" x2="50" y2="20" />
                <line x1="50" y1="0" x2="50" y2="20" transform="rotate(45 50 50)" />
                <line x1="50" y1="0" x2="50" y2="20" transform="rotate(90 50 50)" />
                <line x1="50" y1="0" x2="50" y2="20" transform="rotate(135 50 50)" />
                <line x1="50" y1="0" x2="50" y2="20" transform="rotate(180 50 50)" />
                <line x1="50" y1="0" x2="50" y2="20" transform="rotate(-45 50 50)" />
                <line x1="50" y1="0" x2="50" y2="20" transform="rotate(-90 50 50)" />
                <line x1="50" y1="0" x2="50" y2="20" transform="rotate(-135 50 50)" />
            </g>
        </svg>
    );
}