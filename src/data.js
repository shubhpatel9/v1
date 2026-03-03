import profile from "./res/qt.jpg";
import aboutPic from "./res/about_me_picture.jpg";

const data = {
  name: "Shubh Patel",
  title: "Electrical & Computer Engineer",
  taglines: [
    "I build embedded systems.",
    "I design ADAS features.",
    "I ship firmware over the air.",
    "I solve hard engineering problems.",
  ],
  bio: "I am currently working as a systems engineer at Aptiv. As feature lead, I design and develop OTA (Over-the-air) programming systems for various vehicle architectures. As a lead systems engineer, I manage software component specifications and lead implementation for all features in a vehicle line.",
  extendedBio:
    "I was born and raised in Mumbai, India, and moved to the US at 16. I graduated from Stevenson High School as Valedictorian and accepted scholarships to attend Wayne State University, where I pursued Electrical and Computer Engineering. I joined Warrior Racing (SAE), Wayne Robotics Club, and the Warrior Data Science Team, and served the community through Hello World, BAPS Charities, AmeriCorps, and volunteering at soup kitchens and homeless shelters in Detroit. Outside of work I enjoy soccer, binging TV shows, gaming, and dancing — I competed with a Bollywood dance team called Detroit Kohinoor for 3 years.",
  facts: [
    "Aptiv · Lead Systems Engineer",
    "Wayne State University ECE",
    "Mumbai → Detroit",
  ],
  photo: profile,
  aboutPhoto: aboutPic,
  email: "pmshubh9@gmail.com",
  github: "https://github.com/shubhpatel9",
  linkedin: "https://www.linkedin.com/in/shubhpatel/",
  resumeLink:
    "https://drive.google.com/file/d/12MryAn0zFZo-YEMjH_vYqvPWodQfQdjg/view?usp=sharing",

  experience: [
    {
      date: "July 2021 – Present",
      company: "Aptiv",
      location: "Troy, MI",
      title: "Lead Systems Engineer, Feature Lead",
      bullets: [
        "Develop embedded hardware and software systems to enhance ADAS features, active safety, and user experience",
        "Lead the FOTA team to define, implement, and revise functional specifications for delivering software files to multiple ECUs wirelessly",
        "Design test cases for the FOTA system that analyze and debug functional inconsistencies — improved success rate by over 80%",
      ],
    },
    {
      date: "April – July 2021",
      company: "TATA Technologies",
      location: "Detroit, MI",
      title: "ADAS Engineer Intern, ER&D",
      bullets: [
        "Led data ingestion and analysis of sensor warning levels to develop software for emergency braking and collision warning",
        "Improved ML algorithm predictive power by correcting sensor discrepancies and applying targeted bug fixes",
        "Executed vehicle simulations to calibrate sensor values and improve system coherency with the software algorithm",
      ],
    },
    {
      date: "March – June 2020",
      company: "Robert Bosch LLC",
      location: "Farmington Hills, MI",
      title: "Senior Intern, Powertrain Solutions",
      bullets: [
        "Led intern team for technical reporting of emissions impact from gasoline/diesel engine control software",
        "Managed data processing from multiple sources to maintain contract information using Power BI and SAP",
        "Conducted cost reviews for budgets ranging from $100K to $1M and compiled summaries for management",
      ],
    },
    {
      date: "June – November 2019",
      company: "Great Lakes Water Authority",
      location: "Detroit, MI",
      title: "Electrical Engineer Intern, CSO Control Program",
      bullets: [
        "Reviewed, drafted, and modified 3094 feet of system/network and electrical drawings using AutoCAD",
        "Prepared and reviewed I&C and electrical design documents including P&ID, loop drawings, and riser diagrams",
        "Facilitated special projects team to analyze environmental data and mitigate emission levels",
      ],
    },
    {
      date: "May – August 2018",
      company: "Combine International",
      location: "Troy, MI",
      title: "Engineer Intern",
      bullets: [
        "Created 100+ data visualizations using a fast-photographic Vision360 system for product development",
        "Collected and interpreted structural data for 500+ diamonds; assisted with lab-grown diamond processing",
        "Maintained 50 diamond machines and monitored production processes and cycle times",
      ],
    },
  ],

  projects: [
    {
      title: "Smart Medicine Box",
      shortDesc:
        "Self-reporting medicine box with SMS & MP3 reminders, scheduled dose dispensing, and adherence tracking.",
      github: "https://github.com/shubhpatel9/Smart-Medicine-Box",
      link: "https://drive.google.com/drive/folders/1NNmfwreAK9twRwX1XLnaPx2Oe0Jqxia3?usp=sharing",
      tags: ["Arduino", "I2C", "GSM", "C++"],
    },
    {
      title: "COVID-19 Tracker",
      shortDesc:
        "3rd-place Hackathon project — real-time US COVID-19 death tracking dashboard built among 50+ students.",
      github: "https://github.com/shubhpatel9/Covid-19-tracker-website",
      link: "https://covid-19-tracker-theta.vercel.app/",
      tags: ["JavaScript", "Node.js", "CSS", "HTML"],
    },
    {
      title: "Inverted Pendulum",
      shortDesc:
        "PID-controlled propeller-actuated self-balancing inverted pendulum with digital circuit design.",
      link: "https://drive.google.com/file/d/19Ql5w-FwAErAjAd7kg9ICbYBqmwzetOI/view?usp=sharing",
      tags: ["Arduino", "PID", "Control Systems"],
    },
    {
      title: "Automatic Wiper Controller",
      shortDesc:
        "Capacitive rain sensor for automatic wiper control, laid out on a custom two-layer PCB.",
      link: "https://drive.google.com/file/d/1HSIXiB0NabAdRIMaseje92VpX7oil5hH/view?usp=sharing",
      tags: ["Altium", "LabVIEW", "Multisim", "Oscilloscope"],
    },
    {
      title: "32-Bit Register CPU",
      shortDesc:
        "Pipelined MIPS ISA CPU designed as a Moore FSM and verified with a Verilog testbench.",
      github: "https://github.com/shubhpatel9/32-bit-register-CPU",
      tags: ["Verilog HDL", "MIPS", "Assembly"],
    },
    {
      title: "Multithreaded Server",
      shortDesc:
        "Multi-client server supporting simultaneous DB access, file compression transfer, and verbose/silent modes.",
      github: "https://github.com/shubhpatel9/Multithreaded-Server",
      tags: ["Python", "Socket Programming"],
    },
    {
      title: "Sorting Algorithms",
      shortDesc:
        "Benchmarking suite comparing bubble, insertion, quick, and merge sort across STL containers.",
      github: "https://github.com/shubhpatel9/Sorting-Algorithm",
      tags: ["C++", "Data Structures", "STL"],
    },
    {
      title: "Digital Lock",
      shortDesc:
        "4-digit FPGA digital lock with 3-attempt passcode system implemented via a flip-flop state machine.",
      link: "https://drive.google.com/file/d/1UqPasuYs0pLfDOhz4yXV40C3fh3GefoG/view?usp=sharing",
      tags: ["Verilog", "Vivado", "FPGA"],
    },
    {
      title: "Drone",
      shortDesc:
        "Team-led 3D-printed drone with a custom PCB programmed to interface with a generic control unit.",
      tags: ["SolidWorks", "NX10", "SPICE", "EAGLE"],
    },
  ],
};

export default data;
