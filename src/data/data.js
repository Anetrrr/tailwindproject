import {memory, fitness, doctor, lechene} from '../assets/index.js'
export const projects = [

    {
        id: 1,
        title: 'Fitness App',
        details: 'Fitness apps are applications designed to keep you fit and healthy. The purpose of the fitness app is to provide the user with instructions and examples of one or more types of exercise, physical activity, nutritional programs, and provide information about other fitness topics.',
        images: `${fitness}`,
        tools: 
            ['Material UI', 'MUI', 'React', 'reathooks', 'icons', 'apis', 'rapidapi '],
        
        
    },

    {
        id: 2,
        title: "Moment's App",
        details: "Moments app is an application created and designed to ensure you constantly store up memorable moments in pictures and videos. It's important to capture these moments because they're fleeting and forgettable—it may take a year or more to forget them, but without a timeless, visual reminder, you can lose the feeling and never dig it up again. A photo can bring back the emotions, memories, and scents attached to the image.",
        tools: 
            ['Material UI', 'MUI', 'React','reacthooks', 'MongoDB', 'apis', 'MERN' ],
        
        images: `${memory}`,
    },

    {
        id: 3,
        title: 'Le Chene Ecommerce',
        details: "Given how fashion’s main focus is on self-expression, modern fashion consumers are prone to seeking personalized experiences to help them find their personal style. Le Chene ecommerce application provides you with the ability to choose how look and what you wear with custom clothing and personalized styles.",
        tools: 
            ['Tail Wind', 'TailwindCss', 'React', 'icons', 'Redux', 'reacthooks'],
        
        images: `${lechene}`,
    },

    {
        id: 4,
        title: 'Hey Doctor App',
        details: 'Your access to healthcare is made easier through the "Hey Doctor" application. It gives you full access to doctors schedules in hospitals closest to your location.',
        tools: 
            [  'React', 'icons', 'CSS'],
        
        images: `${doctor}`,
    },



]
export default projects;

