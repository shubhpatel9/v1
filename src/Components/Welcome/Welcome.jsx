import React from 'react';

import Particles from 'react-particles-js'
import Button from '@material-ui/core/Button';

// import {Button} from

import data from './../../data'

const Welcome = () => {

    return (
        <div className="welcome" style={data.welcome.mainStyle}>
        <Particles
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: '0'
            }}
            params={data.welcome.particleStyles}
        />

            <div className="btnContainer">
                    {data.welcome.buttons.map((b, i) => 
                        <Button className="btns_" key={i} style={b.style} onClick={b.onClick} color="primary">{b.text}</Button>
                    )}
            </div>
            <div className="welcome-greeting" style={data.welcome.textBoxStyle}>
                <div className="welcome-cont">
                    <h2 className="welcome-text">{data.welcome.message.intro} 
                    <span style={data.welcome.message.nameStyle}>{data.welcome.message.name}</span> 
                    <br/>
                    {data.welcome.message.bottomText}</h2>
                </div>
            </div>
        </div>
    )
}

export default Welcome;