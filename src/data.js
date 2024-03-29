import profile from "./res/qt.jpg";
import aboutPic from './res/about_me_picture.jpg' 
//import logo from './res/shubhlogo-small.jpg';

const data = {
    navToggle: {
        buttonStyle: {
            color: '',
            background: '',
            boxShadow: '0 0 0 rgba(0,0,0,0.3)',
        },
        iconStyle: {
            fontSize: '2.7em',
            fontWeight: '',
            color: '#0a192f',
            background: 'transparent',
        }
    },
    welcome: {
        message: { 
            intro:"Hello, I'm ",
            name:'Shubh Patel ',
            bottomText:"I'm an Electrical and Computer Engineer",
            nameStyle: {
                fontWeight: 400,
                fontSize: '35px',
                color: '#0a192f',
                background: ''
            },
        },
        textBoxStyle: {
            // not super necessary, feel free to leave blank
            color: '',
            background: ''
        },
        buttons: [
            {
                text: 'Resume',
                style: {
                    color: '#0a192f',
                    fontWeight: '',
                    fontSize: '17px',
                    marginLeft: '0',
                    background: 'rgba(230, 241, 255, 0.5)',
                    boxShadow: '0 0 10px #0a192f'
                },
                onClick: () => window.open(
                    data.resumeLink,
                    '_blank'
                )
            },
            {
                text: 'Contact Me',
                style: {
                    color: '#0a192f',
                    fontWeight: '',
                    fontSize: '17px',
                    background: 'rgba(230, 241, 255, 0.5)',
                    marginLeft: '20px',
                    boxShadow: '0 0 10px #0a192f'
                },
                onClick: () => window.location.href = "mailto:pmshubh9@gmail.com"
            },
        ],
        mainStyle: {
            color: '',
            background: '#e6f1ff'
        },
        particleStyles: {
            particles: {
              color: {
                value: "#984755"
              },
              line_linked: {
                color: {
                  value: "rgba(0,0,0,0.7)"
                },
                size: {
                    value: '1'
                }
              },
              number: {
                value: 70
              },
              size: {
                value: 3
              }
            }
          }
    },
    nav: {
        name: 'Shubh Patel',
        navPic: profile,
        navLinks: [
            {
                alias: 'Welcome',
                link: 'welcome'
            },
            {
                alias: 'About',
                link: 'about'
            },
            {
                alias: 'Timeline',
                link: 'timeline'
            },
            {
                alias: 'Projects',
                link: 'projects'
            },
        ],
        linkStyle: {
            fontWeight: '',
            fontSize: '',
            color: '',
            background: ''
        },
        icons: [
            {
                symbol: <i className="fab fa-github"></i>,
                url: "https://github.com/shubhpatel9",
                onClick: () => {},
                iconColor: '#64ffda',
            },
            {
                symbol: <i className="fab fa-linkedin"></i>,
                url: "https://www.linkedin.com/in/shubhpatel/",
                onClick: () => {},
                iconColor: '#64ffda',
            },
            {
                symbol: <i className="far fa-envelope"></i>,
                url: "",
                onClick: () => window.location.href = "mailto:pmshubh9@gmail.com",
                iconColor: '#64ffda', 
            },
        ]
    },
    sectionTitle: {
        style: {
            background: '',
            color: '',
            fontSize: '',
            fontWeight: ''
        }
    },
    about: {
        aboutText: "I am currently working as a system engineer at Aptiv. As a feature lead, I design and develop OTA (Over-the-air) programming systems for various vehicle architectures. Additionally, as a lead systems engineer, I manage the software component specifications and lead implementation for all the features in a vehicle line.",
        seemore: "I was born and raised in Mumbai, India, and moved to the US at the age of 16. After two years, I graduated from Stevenson High School as a Valedictorian and accepted scholarships to attend Wayne State University.<br/><br/>At Wayne, I started to pursue Electrical and Computer Engineering. I joined various clubs and teams like Warrior Racing (SAE), Wayne Robotics Club, Warrior Data Science Team, and more for personal and professional growth while serving the community through <a target='_blank' href='https://tina98.github.io/HelloWorld/'>Hello World</a> and community service events through organizations like BAPS Charities, <a target='_blank' href='http://www.amusdetroit.org/'>AmeriCorps</a>, and volunteering at soup kitchens and homeless shelters in Detroit.<br/><br/>I enjoy playing soccer, binging tv shows and movies, playing video games, and dancing. I also danced with a competitive bollywood dance team called Detroit Kohinoor for 3 years.",
        aboutPic: aboutPic,
        aboutTextStyle: {
            fontWeight: '',
            fontSize: '',
            color: '',
            background: ''
        },
        seeMoreButtonStyle: {
            fontWeight: '',
            fontSize: '',
            color: '#777',
            background: ''
        },
        seeMoreTextStyle: {
            fontWeight: '',
            fontSize: '',
            color: '',
            background: ''
        }
    },
    timelineItems: [
        {
            date: 'July 2021 - Present',
            backgroundColor: '#0a192f',
            textColor: {
                color: '#6473a1',
                background: '#0a192f'
            },
            iconColor: { background: '#0a192f', color: '#fff' },
            arrowColor: { borderRight: '7px solid  #0a192f' },
            //icon: <i class="fab fa-accessible-icon"></i>,
            title: 'Lead Systems Engineer, Feature Lead',
            location: 'Aptiv - Troy, MI ',
            text:
            <dl>
                <li>Develop embedded hardware and software systems to enhance advanced driver-assistance systems (ADAS) features, active safety, and user experience</li>
                <li>Lead the Aptiv Firmware Over the Air (FOTA) team to define, implement, and revise the functional specifications for delivering software files to multiple ECUs and update wirelessly</li>
                <li>Design test cases for the FOTA system that analyzes and debugs functional inconsistencies, and improve the feature implementation by over 80% more success rate</li>
            </dl>
            
            //'Supported reporting and testing of emission impact on gasoline and diesel engine control software packages and powertrain solutions for Fiat Chrysler Automobiles\nAccelerated data analysis processes for multiple data sources (contract information of Bosch Projects) and formats on innovative emissions projects using Power BI, and SAP\n\nDeveloped embedded algorithms and assisted in implementing Digital, Analog, RF circuit designs for various sensors as well as managed tasks for system projects like preparing and supporting quality gates',
        }, 
        {
            date: 'April 2021 - July 2021',
            backgroundColor: '#0a192f',
            textColor: {
                color: '#6473a1',
                background: '#0a192f'
            },
            iconColor: { background: '#0a192f', color: '#fff' },
            arrowColor: { borderRight: '7px solid  #0a192f' },
            //icon: <i class="fab fa-accessible-icon"></i>,
            title: 'ADAS Engineer Intern in ER&D',
            location: 'TATA Technologies - Detroit, MI ',
            text:
            <dl>
                <li>Led data ingestion and analysis of sensor warning levels to develop the software for emergency braking and collision warning to comply with the SAE system of automation levels</li>
                <li>Improved the machine learning algorithm’s predictive power by correcting the discrepancies in sensor values and applying the bug fixes for the errors recognized from the data collected</li>
                <li>Executed vehicle simulations to learn the ideal calibration values for the sensors and upgrade the system’s coherency with the software algorithm</li>
            </dl>
            
            //'Supported reporting and testing of emission impact on gasoline and diesel engine control software packages and powertrain solutions for Fiat Chrysler Automobiles\nAccelerated data analysis processes for multiple data sources (contract information of Bosch Projects) and formats on innovative emissions projects using Power BI, and SAP\n\nDeveloped embedded algorithms and assisted in implementing Digital, Analog, RF circuit designs for various sensors as well as managed tasks for system projects like preparing and supporting quality gates',
        },
        {
            date: 'March 2020 - June 2020',
            backgroundColor: '#0a192f',
            textColor: {
                color: '#6473a1',
                background: '#0a192f'
            },
            iconColor: { background: '#0a192f', color: '#fff' },
            arrowColor: { borderRight: '7px solid  #0a192f' },
            //icon: <i class="fab fa-accessible-icon"></i>,
            title: 'Senior Intern in Powertrain Solutions',
            location: 'Robert Bosch LLC - Farmington Hills, MI ',
            text:
            <dl>
                <li>Led the intern team for technical reporting of emissions impact from gasoline/diesel engine using control software packages</li>
                <li>Managed data processing from multiple sources to maintain contract information using tools like Power BI and SAP</li>
                <li>Conducted cost review for budgets varying from $100,000 to $1M along with planning and compiling summaries for management</li>
            </dl>
            
            //'Supported reporting and testing of emission impact on gasoline and diesel engine control software packages and powertrain solutions for Fiat Chrysler Automobiles\nAccelerated data analysis processes for multiple data sources (contract information of Bosch Projects) and formats on innovative emissions projects using Power BI, and SAP\n\nDeveloped embedded algorithms and assisted in implementing Digital, Analog, RF circuit designs for various sensors as well as managed tasks for system projects like preparing and supporting quality gates',
        },
        {
            date: 'June 2019 - November 2019',
            backgroundColor: '#0a192f',
            textColor: {
                color: '#6473a1',
                background: '#0a192f'
            },
            iconColor: { background: '#0a192f', color: '#fff' },
            arrowColor: { borderRight: '7px solid  #0a192f' },
            //icon: <i class="fab fa-accessible-icon"></i>,
            title: 'Electrical Engineer Intern in CSO Control Program',
            location: 'Great Lakes Water Authority - Detroit, MI',
            text: 
            <di>
                <li>Reviewed, drafted, and modified 3094 feet worth of system/network and electrical drawings using AutoCAD to plan for maintenance and development of machinery while collaborating with 3+ vendors/contractors</li>
                <li>Prepared and reviewed I&C and electrical design documents like P&ID, loop drawings, riser diagrams, and one-line diagrams to support maintenance of various machines throughout the plant </li>
                <li>Facilitated special projects team to analyze environmental data to mitigate emission levels</li>
            </di>,
        },
        {
            date: 'May 2018 - August 2018',
            backgroundColor: '#0a192f',
            textColor: {
                color: '#6473a1',
                background: '#0a192f'
            },
            iconColor: { background: '#0a192f', color: '#fff' },
            arrowColor: { borderRight: '7px solid  #0a192f' },
            //icon: <i class="fab fa-accessible-icon"></i>,
            title: 'Engineer Intern',
            location: 'Combine International - Troy, MI',
            text: 
            <di>
                <li>Created 100+ data visualizations using a fast-photographic system called Vision360 that are used for product development</li>
                <li>Collected, analyzed, and interpreted structural data for over 500 diamonds and other jewelry, and assisted with processing the materials to make a variety of lab-grown diamonds</li>
                <li>Assisted with maintaining 50 diamond machines and its basic systems or components as well as monitored the processes and time required to make a variety of lab-grown diamonds</li>
            </di>,
        },
    ],
    resumeLink: 'https://drive.google.com/file/d/12MryAn0zFZo-YEMjH_vYqvPWodQfQdjg/view?usp=sharing',
    projects: [
        {
            title: 'Smart Medicine Box', 
            desc: 
            <di>
                <li>Created a self-reporting medicine box using an Arduino MEGA2560, DS3231 timer, rotary encoder, LCD with I2C, MP3 module, GSM module, servo motors, Micro SD module, and IR sensor</li>
                <li>Functionalities include - SMS & MP3 Reminders, dose dispensing at scheduled times, log date/time for adherence tracking</li> 
                <li>*Files, report, presentation, and poster can be accessed with the "image" symbol </li>
            </di>, 
            GithubLink: 'https://github.com/shubhpatel9/Smart-Medicine-Box',
            ImgLink: 'https://drive.google.com/drive/folders/1NNmfwreAK9twRwX1XLnaPx2Oe0Jqxia3?usp=sharing', 
            tags: ['Arduino', ' ', ' '],
            backgrounds: {
                link: '#0a192f',
                title: '#0a192f',
                desc: '#a8b2d1',
                tags: '#0a192f'
            },
            LinkStyles: {
                fontSize: '',
                color: '#64ffda',
                fontWeight: '',
            },
            TitleStyles: {
                fontSize: '20px',
                color: '#a8b2d1',
                fontWeight: '500',
            },
            DescStyles: {
                fontSize: '15px',
                color: '#020c1b',
                fontWeight: '500',
                background: ''
            },
            TagsStyles: {
                fontSize: '12px',
                color: '#64ffda',
                fontWeight: '200',
                background: ''
            },
        },
        
        {
            title: 'COVID 19 Tracker', 
            desc: 
            <di>
                <li>Developed a website for the Wayne State University Hackathon to track the number of deaths due to COVID-19 in United States</li>
                <li>Achieved 3rd place win among 50+ students and over 20 teams participating in the competition</li>
            </di>, 
            GithubLink: 'https://github.com/shubhpatel9/Covid-19-tracker-website',
            ImgLink: 'https://covid-19-tracker-theta.vercel.app/', 
            tags: ['JavaScript',' ', 'CSS',' ','HTML',' ', 'Node.js',],
            backgrounds: {
                link: '#0a192f',
                title: '#0a192f',
                desc: '#a8b2d1',
                tags: '#0a192f'
            },
            LinkStyles: {
                fontSize: '',
                color: '#64ffda',
                fontWeight: '',
            },
            TitleStyles: {
                fontSize: '20px',
                color: '#a8b2d1',
                fontWeight: '500',
            },
            DescStyles: {
                fontSize: '15px',
                color: '#020c1b',
                fontWeight: '500',
                background: ''
            },
            TagsStyles: {
                fontSize: '12px',
                color: '#64ffda',
                fontWeight: '200',
                background: ''
            },
        },

        {
            title: 'Inverted Pendulum', 
            desc: 
            <di>
                <li>Created a digital circuit based PID controlled propeller actuated self-balancing inverted pendulum</li>
                <li>Utilizing two propellers, Arduino UNO microcontroller, angle sensor, DC motors, and L298N H Bridge DC stepper in Linear Signals and Systems</li> 
                {/* <li>Tested and optimized the PID control and Arduino code to handle up to 70 degrees of initial angle to the pendulum and hold position</li> */}
            </di>, 
            //GithubLink: 'https://github.com/shubhpatel9/Covid-19-tracker-website',
            ImgLink: 'https://drive.google.com/file/d/19Ql5w-FwAErAjAd7kg9ICbYBqmwzetOI/view?usp=sharing', 
            tags: ['Arduino', ' ', 'PID'],
            backgrounds: {
                link: '#0a192f',
                title: '#0a192f',
                desc: '#a8b2d1',
                tags: '#0a192f'
            },
            LinkStyles: {
                fontSize: '',
                color: '#64ffda',
                fontWeight: '',
            },
            TitleStyles: {
                fontSize: '20px',
                color: '#a8b2d1',
                fontWeight: '500',
            },
            DescStyles: {
                fontSize: '15px',
                color: '#020c1b',
                fontWeight: '500',
                background: ''
            },
            TagsStyles: {
                fontSize: '12px',
                color: '#64ffda',
                fontWeight: '200',
                background: ''
            },
        },
        
        {
            title: 'Automatic Wiper Controller', 
            desc: 
            <di>
                <li>Designed a capacitive rain sensor for automatic wiper control on the windshield of a car</li>
                <li>Utilizing four primary components: capacitance monitoring circuit, microcontroller, voltage regulator, sensor traces, and placing them on a stack of two-layer PCB which can then be placed in the interior of the car</li> 
                {/* <li>Tested and optimized the PID control and Arduino code to handle up to 70 degrees of initial angle to the pendulum and hold position</li> */}
            </di>, 
            //GithubLink: 'https://github.com/shubhpatel9/Covid-19-tracker-website',
            ImgLink: 'https://drive.google.com/file/d/1HSIXiB0NabAdRIMaseje92VpX7oil5hH/view?usp=sharing', 
            tags: ['Multisim', ' ', 'Altium', ' ', 'LabView', ' ', 'Oscilloscope','','Function Generator'],
            backgrounds: {
                link: '#0a192f',
                title: '#0a192f',
                desc: '#a8b2d1',
                tags: '#0a192f'
            },
            LinkStyles: {
                fontSize: '',
                color: '#64ffda',
                fontWeight: '',
            },
            TitleStyles: {
                fontSize: '20px',
                color: '#a8b2d1',
                fontWeight: '500',
            },
            DescStyles: {
                fontSize: '15px',
                color: '#020c1b',
                fontWeight: '500',
                background: ''
            },
            TagsStyles: {
                fontSize: '12px',
                color: '#64ffda',
                fontWeight: '200',
                background: ''
            },
        },

        {
            title: '32-Bit Register CPU', 
            desc: 
            <di>
                <li>Designed up a 32-bit register CPU which runs MIPS instruction set architecture</li>
                <li>Sped up the CPU by implementing the pipelining approach and designing the processor as a Moore state machine</li> 
                <li>Utilizing a testbench in Verilog for exercising and verifying the functional correctness of the CPU logic</li>
            </di>, 
            GithubLink: 'https://github.com/shubhpatel9/32-bit-register-CPU',
            //ImgLink: 'https://drive.google.com/file/d/1HSIXiB0NabAdRIMaseje92VpX7oil5hH/view?usp=sharing', 
            tags: ['Verilog HDL', ' ', 'MIPS', ' ', 'Assembly'],
            backgrounds: {
                link: '#0a192f',
                title: '#0a192f',
                desc: '#a8b2d1',
                tags: '#0a192f'
            },
            LinkStyles: {
                fontSize: '',
                color: '#64ffda',
                fontWeight: '',
            },
            TitleStyles: {
                fontSize: '20px',
                color: '#a8b2d1',
                fontWeight: '500',
            },
            DescStyles: {
                fontSize: '15px',
                color: '#020c1b',
                fontWeight: '500',
                background: ''
            },
            TagsStyles: {
                fontSize: '12px',
                color: '#64ffda',
                fontWeight: '200',
                background: ''
            },
        },

        {
            title: 'Multithreading Server', 
            desc: 
            <di>
                <li>Created a multithreaded server capable of handling multiple clients, each of them working on a different database simultaneously as well as supporting both Verbose and Silent Modes</li>
                <li>Implemented the server to handle multiple clients sending compressed files and uncompressing them when received</li> 
                {/* <li>Tested the functionality of the server and the code by uploading pictures of the university logo in PNG and JPEG format from different devices at the same time</li> */}
            </di>, 
            GithubLink: 'https://github.com/shubhpatel9/Multithreaded-Server',
            //ImgLink: 'https://drive.google.com/file/d/1HSIXiB0NabAdRIMaseje92VpX7oil5hH/view?usp=sharing', 
            tags: ['Python 3.7x', ' ', 'Socket Programming'],
            backgrounds: {
                link: '#0a192f',
                title: '#0a192f',
                desc: '#a8b2d1',
                tags: '#0a192f'
            },
            LinkStyles: {
                fontSize: '',
                color: '#64ffda',
                fontWeight: '',
            },
            TitleStyles: {
                fontSize: '20px',
                color: '#a8b2d1',
                fontWeight: '500',
            },
            DescStyles: {
                fontSize: '15px',
                color: '#020c1b',
                fontWeight: '500',
                background: ''
            },
            TagsStyles: {
                fontSize: '12px',
                color: '#64ffda',
                fontWeight: '200',
                background: ''
            },
        },

        {
            title: 'Sorting Algorithms', 
            desc: 
            <di>
                <li>Created a sorting algorithm to implement and compare four types of sorting method (bubble, insertion, quick, merge) compatible with any number of data points from STL containers (Vector, list, set)</li>
                <li>Used the Big-O complexity factor to determine with STL container to use with which sorting method depending on the size of “n” (number of data points)</li> 
            </di>, 

            GithubLink: 'https://github.com/shubhpatel9/Sorting-Algorithm',
            //ImgLink: 'https://drive.google.com/file/d/1HSIXiB0NabAdRIMaseje92VpX7oil5hH/view?usp=sharing', 
            tags: ['C++', ' ', 'Data Structures'],
            backgrounds: {
                link: '#0a192f',
                title: '#0a192f',
                desc: '#a8b2d1',
                tags: '#0a192f'
            },
            LinkStyles: {
                fontSize: '',
                color: '#64ffda',
                fontWeight: '',
            },
            TitleStyles: {
                fontSize: '20px',
                color: '#a8b2d1',
                fontWeight: '500',
            },
            DescStyles: {
                fontSize: '15px',
                color: '#020c1b',
                fontWeight: '500',
                background: ''
            },
            TagsStyles: {
                fontSize: '12px',
                color: '#64ffda',
                fontWeight: '200',
                background: ''
            },
        },

        {
            title: 'Digital Lock', 
            desc: 
            <di>
                <li>Created a digital numeric lock (4 digit) simulator on a Nexys 3 board (FPGA)</li>
                <li>Organized six states using flip flops and different gates to enable the user to set a passcode and receive three tries to input the correct sequence of digits and unlock the device</li> 
            </di>, 

            //GithubLink: 'https://github.com/shubhpatel9/Covid-19-tracker-website',
            ImgLink: 'https://drive.google.com/file/d/1UqPasuYs0pLfDOhz4yXV40C3fh3GefoG/view?usp=sharing', 
            tags: ['Verilog', ' ', 'Vivado', ' ', 'FPGA', ' ', 'Flip Flops'],
            backgrounds: {
                link: '#0a192f',
                title: '#0a192f',
                desc: '#a8b2d1',
                tags: '#0a192f'
            },
            LinkStyles: {
                fontSize: '',
                color: '#64ffda',
                fontWeight: '',
            },
            TitleStyles: {
                fontSize: '20px',
                color: '#a8b2d1',
                fontWeight: '500',
            },
            DescStyles: {
                fontSize: '15px',
                color: '#020c1b',
                fontWeight: '500',
                background: ''
            },
            TagsStyles: {
                fontSize: '12px',
                color: '#64ffda',
                fontWeight: '200',
                background: ''
            },
        },

        {
            title: 'Drone', 
            desc: 
            <di>
                <li>Led a team of 4 students to design and 3D print the parts to build a drone for a course project</li>
                <li>Programmed the PCB to work with a generic control unit provided by the insructor and the purchased motors</li> 
                {/* <li>Tested and optimized the PID control and Arduino code to handle up to 70 degrees of initial angle to the pendulum and hold position</li> */}
            </di>, 
            //GithubLink: 'https://github.com/shubhpatel9/Covid-19-tracker-website',
            //ImgLink: 'https://drive.google.com/file/d/1HSIXiB0NabAdRIMaseje92VpX7oil5hH/view?usp=sharing', 
            tags: ['NX10', ' ', 'SolidWorks', ' ', 'SPICE', ' ', 'EAGLE'],
            backgrounds: {
                link: '#0a192f',
                title: '#0a192f',
                desc: '#a8b2d1',
                tags: '#0a192f'
            },
            LinkStyles: {
                fontSize: '',
                color: '#64ffda',
                fontWeight: '',
            },
            TitleStyles: {
                fontSize: '20px',
                color: '#a8b2d1',
                fontWeight: '500',
            },
            DescStyles: {
                fontSize: '15px',
                color: '#020c1b',
                fontWeight: '500',
                background: ''
            },
            TagsStyles: {
                fontSize: '12px',
                color: '#64ffda',
                fontWeight: '200',
                background: ''
            },
        },
    ],
    footer: {
        //footerLogo: logo,
        mainStyle: {
            background: '#cde0f9',
            padding: '1em',
        },
        textStyle: {
            background: '',
            color: '',
            fontSize: '1.25em',
            fontWeight: '300',
        },
        iconStyle: {
            background: '',
            color: '#00f',
            fontSize: '1em',
            fontWeight: '500',
        }
    }
}

export default data;