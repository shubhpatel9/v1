import React, { useCallback } from "react";

//import Particles from 'react-particles-js'
import Button from "@material-ui/core/Button";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// import {Button} from

import data from "./../../data";

const Welcome = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div className="welcome" style={data.welcome.mainStyle}>
            {/* <Particles
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: '0'
            }}
            params={data.welcome.particleStyles}
        /> */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#0d47a1",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className="btnContainer">
                {data.welcome.buttons.map((b, i) => (
                    <Button
                        className="btns_"
                        key={i}
                        style={b.style}
                        onClick={b.onClick}
                        color="primary"
                    >
                        {b.text}
                    </Button>
                ))}
            </div>
            <div className="welcome-greeting" style={data.welcome.textBoxStyle}>
                <div className="welcome-cont">
                    <h2 className="welcome-text">
                        {data.welcome.message.intro}
                        <span style={data.welcome.message.nameStyle}>
                            {data.welcome.message.name}
                        </span>
                        <br />
                        {data.welcome.message.bottomText}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
