import { IconProps } from "../types";

import React from 'react';
import SvgFactory from '../svgfactory';

export default function(props: IconProps) {
    return (
        <SvgFactory {...props} width={512} height={512}>
            <defs>
                <line id="leaf-node" x1="256" y1="0" x2="256" y2="64" />
                <g id="leaf">
                    <line x1="256" y1="0" x2="256" y2="512" />
                    <use xlinkHref="#leaf-node" transform="rotate(-45 256 64)"></use>
                    <use xlinkHref="#leaf-node" transform="rotate(45 256 64)"></use>

                    <use xlinkHref="#leaf-node" transform="translate(0 384) rotate(135 256 64)"></use>
                    <use xlinkHref="#leaf-node" transform="translate(0 384) rotate(-135 256 64)"></use>
                </g>

                <polygon id="web" points="
                    256,        240
                    244.68629,  244.68629
                    240,        256
                    244.68629,  267.31371
                    256,        272
                    267.31371,  267.31371,
                    272,        256,
                    267.31371   244.68629
                "></polygon>

                <polygon id="star" points="
                    256          192
                    301.25483    146.74517
                    301.25483    210.74517
                    365.25483    210.74517
                    320          256
                    365.25483    301.25483
                    301.25483    301.25483
                    301.25483    365.25483
                    256          320
                    210.74516    365.25483
                    210.74516    301.25483
                    146.74516    301.25483
                    192          256
                    146.74516    210.74517
                    210.74517    210.74517
                    210.74517    146.74517
                "></polygon>
            </defs>

            <use xlinkHref="#star" strokeWidth="2" transform="matrix(2, 0, 0, 2, -256, -256)"></use>
            <use xlinkHref="#star" strokeWidth="3.2" transform="matrix(1.25, 0, 0, 1.25, -64, -64)"></use>
            <use xlinkHref="#web" strokeWidth="1" transform="matrix(4, 0, 0, 4, -768, -768)"></use>
            
            <use xlinkHref="#leaf"></use>
            <use xlinkHref="#leaf" transform="rotate(45 256 256)"></use>
            <use xlinkHref="#leaf" transform="rotate(90 256 256)"></use>
            <use xlinkHref="#leaf" transform="rotate(135 256 256)"></use>
        </SvgFactory>
    )
}