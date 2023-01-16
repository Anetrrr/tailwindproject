import {memory, fitness, doctor, lechene, moments} from '../assets/index.js'
export const projects = [

    {
        id: 1,
        title: 'Workout App',
        details: 'Workout apps are applications designed to keep you fit and healthy. The purpose of the app is to provide the user with the flexibility to add his kind of workout and design his own custom workout routines and exercises.',
        images: `${fitness}`,
        tools: 
            ['Tailwind', 'React', 'reactcontext', 'icons', 'NodeJS', 'fullstack '],
        repo: "https://github.com/Anetrrr/workout-app",
        // live: "In progress",
        
        
    },

    {
        id: 2,
        title: "Ode to a Friend",
        details: "Ode to a Friend is a website created and designed to capture memorable moments the team had with a colleague going away for a long time. It's important to capture moments because they're fleeting and forgettable—it may take a year or more to forget them, but without a timeless, visual reminder, you can lose the feeling and never dig it up again.",
        tools: 
            ['CSS', 'React','reacthooks' ],
        
        images: `${memory}`,
        repo: "https://github.com/Anetrrr/ode-to-a-friend",
        live: "https://ode-to-zainab.vercel.app",
        
    },

    {
        id: 3,
        title: 'Le Chene Ecommerce',
        details: "Given how fashion’s main focus is on self-expression, modern fashion consumers are prone to seeking personalized experiences to help them find their personal style. Le Chene ecommerce application provides you with the ability to choose how look and what you wear with custom clothing and personalized styles.",
        tools: 
            ['Tail Wind', 'TailwindCss', 'React', 'icons', 'Redux', 'reacthooks'],
        
        images: `${lechene}`,
        repo: 'https://github.com/Anetrrr/LeChene-Project/tree/test',
        live: 'https://le-chene-project.vercel.app/'
    },

    {
        id: 4,
        title: 'Animated Login/Signup Pages',
        details: 'One of the most used pages in apps is the login/signup pages. I created very amazing templates for login/signup pages.',
        tools: 
            [  'React', 'CSS'],
        
        images: `${memory}`,
        repo: "https://github.com/Anetrrr/login-animated",
        live: "https://login-animated.vercel.app",
        
    },
    {
        id: 5,
        title: 'HTML Pages',
        details: 'Web pages.',
        tools: 
            [  'HTML', 'CSS'],
        
        images: `${doctor}`,
        repo: "https://github.com/Anetrrr/loruki-website",
        live: "https://quirky-williams-d1dfb0.netlify.app/"
    },




]
export default projects;

