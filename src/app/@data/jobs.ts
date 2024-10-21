import { ComponentProps } from "react";
import { RayvarzIcon, WiraIcon } from "../pages/theme/icons"

interface Job {
    name: string;
    subtitle: string;
    start: string;
    end: string;
    description: string;
    icon: React.FC<ComponentProps<"svg">>; // Define the icon as a React functional component
}

export const Jobs: Job[] = [{
    name: 'Rayvarz',
    subtitle: 'software engineering co.',
    start: 'Nov, 2022',
    end: 'Sep, 2023',
    description: 'Rayvarz, an Iranian software engineering company established in 1368 Hijri khorshidi, works in various domains from Share management to financial systems. They focused on building their new generation of their applications, the fourth ones, on Angular. During my tenure, I began as a front-end developer on the Share app, later shifting to work with Rayvarz`s exclusive framework. It was a dynamic experience, dealing with the evolution of software challenges; Not only keeping existing quality of experience for users but also raising it. Without confusing users with new scenarios, offer’em better experience.',
    icon: RayvarzIcon
},
{
    name: 'Wira',
    subtitle: 'e-commerce solution',
    start: 'May, 2021',
    end: 'Sep, 2022',
    description: 'During that one year and a quarter at Wira System Pouya, my job was to maintain the main application, WiraPos. This .NET-based product served as the base of our mission to provide complete tool to manage e-commerce manner. At Wira System, we`re committed to simplifying store and warehouse management, improve order processing, and enhancing payment procedures. Through integrations with platforms such as Digikala, Snapp, and 780, we offer advanced e-commerce services. We call our service, WiraPos, the center of our services, serving as a Point of Sale (P.O.S.) system, a warehouse management solution, and an accounting tool.',
    icon: WiraIcon,
}]