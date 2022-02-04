
import React from 'react';
import "./Myself.css"
import Me from './../../media/me1.png';

function MySelf(props) {
    return (
        <div id="ami">
            <img src={Me} alt="ami" />
            <div className="into">

                <h1>
                <span>ESOLIAN</span>
                <span>ESOLIAN</span>
                </h1>
                <h2>sanowar</h2>


                <p>me as developer work in this this projects.
                    with your chemisty this will reach its climax. 
                </p>
            </div>
        </div>
    );
}

export default MySelf;