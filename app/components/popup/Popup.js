import React from "react";
import './popup.css';



function Popup (props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn'
                onClick={() => props.setTrigger(false)} // საიდანაა settriger
                >X</button>
                {props.children}
            </div>
        </div>
    ): "";
}
// ანტის modal instead of popup
export default Popup