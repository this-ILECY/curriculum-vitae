import { ArtstationIcon, FigmaIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, TelegramIcon } from "../pages/theme/icons";

export default function Contact() {
    return (
        <span className="z-10 flex flex-col gap-10">
            <span className="flex flex-col gap-5">
                <span className="flex gap-3">
                    <PhoneIcon className="w-10 stroke-secondary-300" />
                    <span className="font-hubot text-5xl font-semibold select-none">Get in touch</span>
                </span>
                <span className="font-hubot text-xl font-light select-none">Always happy to start a new project. If you have an idea, or need some help, just call me. Wanna join my teams? ask me. It’s my pleasure to have a new teammate </span></span>
            <span className="flex justify-between items-end h-fit">
                <span className="flex flex-col gap-3">
                    <span className="flex gap-3">
                        <MailIcon className="stroke-secondary-300 w-8" />
                        <span className="font-hubot text-xl font-light select-text">this.ilecy@gmail.com</span>
                    </span>
                    <span className="flex gap-3">
                        <TelegramIcon className="fill-secondary-300 w-8" />
                        <span className="font-hubot text-xl font-light select-text">@ILECY_developer</span>
                    </span>
                </span>
                <span className="flex gap-10">
                    <a href="https://artstation.com/ilecy" target="_blank" rel="noopener noreferrer">
                        <ArtstationIcon className="stroke-secondary-300 w-8" />
                    </a>
                    <a href="https://www.figma.com/@ilecy" target="_blank" rel="noopener noreferrer">
                        <FigmaIcon className="stroke-secondary-300 w-8" />
                    </a>
                    <a href="https://ir.linkedin.com/in/ilecy" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="stroke-secondary-300 w-8" />
                    </a>
                    <a href="https://instagram.com/amir.hmch" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon className="stroke-secondary-300 w-8" />
                    </a>
                </span>
            </span>
        </span>
    )
}