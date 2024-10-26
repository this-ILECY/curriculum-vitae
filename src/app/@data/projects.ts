import { StaticImageData } from "next/image"
import chaos from '../../assets/png/chaos.png'
import semaja from '../../assets/png/SEMAJA.png'
import ensemble from '../../assets/png/ensemble.png'
import fave from '../../assets/png/fave.png'
import lynx from '../../assets/png/lynx.png'
import mook from '../../assets/png/mook.png'
import { ComponentProps } from "react"
import {
    AndroidIcon, AngularIcon, CheckmarkIcon, DotNetIcon, FireIcon, JavascriptIcon, NestJsIcon,
    ReactIcon, RustIcon, TypescriptIcon, UnityIcon, VueIcon
} from "../pages/theme/icons"

export interface IProject {
    name: string,
    subtitle: string,
    start: string,
    status: string,
    description: string,
    technologies: React.FC<ComponentProps<"svg">>[],
    image: StaticImageData,
    icon: React.FC<ComponentProps<"svg">>[],
}


export const Projects: IProject[] = [
    {
        name: "Chaotic games",
        subtitle: "An indie games studio",
        start: "2022",
        status: "On going",
        technologies: [UnityIcon, DotNetIcon, AngularIcon, AndroidIcon],
        description: "Chaotic games studio is the place where we mix art with code to create joyful moment for our lovely users, called gamers! With precision, passion and smartness, we move forward to face and defeat various of challenges like unity render method and threads, network issues, AR configure, machine learning and deep learning logics to present fun and pleasant moments for gamers!  Beautiful as art, Powerful as code, Exciting as an adventure, it is the best a computer engineer can build: THE GAME!",
        image: chaos,
        icon: [FireIcon]
    },
    {
        name: "SEMAJA",
        subtitle: "Joint Staff of the Iran Army",
        start: "2024",
        status: "On going",
        description: "You might see this awkward. “2 years of duty is nothing but waste of time” You might say. But quite the opposite, I am experiencing new challenges by facing issues in NestJS. I wasn’t familiar with NestJS but i do worked with JS so far. So i oblige myself to learn ExpressJS and then NestJS. It’s kinda lovely that i am able to work in a back-end team with my beloved programming language, JS!  Our team focuses on creating a new solution to manage several manners; Such as personnel, duty, payroll, and etc all across the Iran Army.",
        technologies: [AngularIcon, NestJsIcon],
        image: semaja,
        icon: [FireIcon]
    },
    {
        name: "Ensemble UI",
        subtitle: "cross-platform user interface kit",
        start: "2023",
        status: "On going",
        description: "This is ILECY’s passion to bring both discipline and beauty into websites and applications. A complete cross-platform UI kit harmonically draw your application and make it beautifully done with fast and simple methods.  The project is defined and started but it is at least in 10% of her way! The ultimate goal is to provide our service to all front-end frameworks and libraries. The beginning phase will be covering  Angular, React and Vue.",
        technologies: [AngularIcon, ReactIcon, VueIcon, JavascriptIcon, TypescriptIcon],
        image: ensemble,
        icon: [FireIcon]
    },
    {
        name: "Lynx app",
        subtitle: "fast-secure communication solution",
        start: "2024",
        status: "On going",
        description: "This is our first attempt to enter Rust programming language world. As one of the fastest programming language which is challenging C, we were curious about its mechanism. How this language works? How this language deals with challenges and why everyone say “It’s fast”!  We decided to face real challenges of creating a complete project out of Rust as the back-end platform to answer our questions! And if everything goes well, we will have a potent and nimble app, just like Lynx!",
        technologies: [RustIcon, ReactIcon, JavascriptIcon, TypescriptIcon],
        image: lynx,
        icon: [FireIcon]
    },
    {
        name: "Fave",
        subtitle: "food saving system",
        start: "2021",
        status: "Done",
        description: "Fave came from “Food + Save”; somehow! And as my first attempt to program a complete front-end project, this was really my fave!  The idea was to find right person for right food type with right amount and good price to save both cooked food and raw material from being waste. The final resort was to save materials which is taking their last breath before they seriously die!",
        technologies: [AngularIcon, JavascriptIcon, TypescriptIcon, DotNetIcon],
        image: fave,
        icon: [CheckmarkIcon]
    },
    {
        name: "Mook!",
        subtitle: "books and stuff",
        start: "2022",
        status: "Done",
        description: "“My + Book” called Mook was a project to replace existing Tabriz university’s library management app. It was my final project of bachelor degree.  A simple admin panel to manage borrowing system, with client app to provide online reserve, book recommendations, comments and similar services, this project was meant to simplify finding book in university for its students.",
        technologies: [AngularIcon, JavascriptIcon, TypescriptIcon, DotNetIcon],
        image: mook,
        icon: [CheckmarkIcon]
    },
]