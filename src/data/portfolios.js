import bikezRide from '../img/portImages/bikez_ride.png';
import rinRest from '../img/portImages/rin_restuarant.png';
import portfolio from'../img/portImages/Screenshot_1.png'
import masterStudy from '../img/portImages/master_study.png';
import medService from '../img/portImages/med_service.png';
import hiking_tour from '../img/portImages/hiking_tour.png';
import tipCalc from "../img/portImages/tip_calculator.png"

const portfolios = [
    {
        id: 1,
        category: "MERN",
        image: bikezRide,
        link1: "https://www.google.com",
        link2: "https://www.google.com",
        title: "Bikez Ride",
        text: "Created with react JS, mongoDB, express JS and node JS",
    },
    {
        id: 2,
        category: "MERN",
        image: hiking_tour,
        link1: "https://www.google.com",
        link2: "https://www.google.com",
        title: "Hiking Tour",
        text: "Created with react JS, mongoDB, express JS and node JS",
    },
    {
        id: 3,
        category: "Javascript",
        image: portfolio,
        link1: "https://www.google.com",
        link2: "https://www.google.com",
        title: "Personal Portfolio",
        text: "Created with react JS and styled components",
    },
    {
        id: 4,
        category: "Javascript",
        image: rinRest,
        link1: "https://www.google.com",
        link2: "https://www.google.com",
        title: "Rin Restuarant",
        text: "created with rest api and react router",
    },
    {
        id: 5,
        category: "React JS",
        image: medService,
        link1: "https://www.google.com",
        link2: "https://www.google.com",
        title: "Med Service",
        text: " Created with react JS with tailwind CSS framework",
    },
    {
        id: 6,
        category: "React JS",
        image: masterStudy,
        link1: "https://www.google.com",
        link2: "https://www.google.com",
        title: "Responsive Course Training Website",
        text: "Created using different technologies such as Material UI, Styled-Components and more...",
    },
    {
        id: 7,
        category: "Tailwind",
        image: tipCalc,
        link1: "https://github.com/Rakib0101/tip-calculator",
        link2: "https://rakib-tip-calculator.netlify.app/",
        title: "Rakib's Tip Calculator",
        text: "Created using pure Javascript",
    },
];

export default portfolios;