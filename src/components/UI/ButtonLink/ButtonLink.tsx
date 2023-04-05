import React from 'react';
import './Button-Link.scss'
import FrameSvg from '../../../images/svg/frame.svg'
interface IButton {
    //Additional class for button
    classButton: string;
}
function ButtonLink({classButton}: IButton) {
    return (
        <button type='button' className={`button-link ${classButton}`}>
            <FrameSvg />
        </button>
    );
}
export default ButtonLink;