import React from 'react';
import SvgFactory from '../svgfactory';
import { IconProps } from '../types';

export default function(props: IconProps) {
    return (
        <SvgFactory {...props} width={512} height={640}>
            <path d="
                M 250 0
                L 0 480
                A 256 160 0 0 0 512 480
                Z
            "
            ></path>
        </SvgFactory>
    );
}