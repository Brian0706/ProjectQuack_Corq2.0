import './PageProgressBar.css'
import { useRef, useState } from 'react';

function PageProgressBar() {
    const progressBarRef = useRef(null);
    window.onscroll = function(e) {
        // Window Height is the Actual Size of the Window based off the size of the Client's Screen
        // Client Height is the size of the Element and Padding combined (usually bigger than Window Height)
        // Scrolled is the Scrolled amount by the Client in the Y-Axis
        // To get the Max amount a client can scroll based off of 'window.scrollY', we do (fullHeight - windowHeight)
        // Percent Scrolled simply gets the scrolled amount in percentage form to apply to the div element.
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
        progressBarRef.current.style.width = percentScrolled + '%';

    }
    return (
        <div className="progress-container">
            <div className="progress-bar" id="progressBar" ref={progressBarRef}></div>
        </div>
    )
}

export default PageProgressBar;