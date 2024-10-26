"use client";

import { useRef, useState } from "react";
import { IProject, Projects } from "../@data/projects"
import { CalendarIcon } from "../pages/theme/icons";

export default function projects() {

    const projects: IProject[] = Projects;

    const projectSelection = useRef<HTMLSpanElement[] | null>([])

    const [activatedProject, setActivatedProject] = useState(0);

    const changeActive = (ref: HTMLElement, index: number) => {
        projectSelection.current.forEach(item => {
            (item.lastChild as HTMLElement).classList.remove("bg-secondary-300")
        });

        (ref.lastChild as HTMLElement).classList.add("bg-secondary-300");

        setActivatedProject(index)

    }

    return (
        <span className="z-10 flex flex-col gap-5 w-full max-w-screen-lg">
            <span className="grow project-main gap-5">
                <span className="job-box rounded-2xl py-6 px-8 flex flex-col justify-between items-center">
                    <span className="flex flex-col gap-10 items-center justify-center">
                        <img className="h-28" src={projects[activatedProject].image.src} alt="" />
                        <span className="flex flex-col gap-3 items-center">
                            <span className="text-3xl font-hubot font-semibold">{projects[activatedProject].name}</span>
                            <span className="font-thin text-xs">{projects[activatedProject].subtitle}</span>
                        </span>
                    </span>
                    <span className="flex gap-6">
                        <span className="flex gap-3 font-hubot text-xs font-semibold">
                            <CalendarIcon className="w-4 stroke-secondary-300" />
                            <span>{projects[activatedProject].start}</span>
                        </span>
                        {projects[activatedProject].icon.map(status => {
                            const StatusIcon = status
                            return (
                                <span className="flex gap-3 font-hubot text-xs font-semibold">
                                    <StatusIcon className="w-4 stroke-secondary-300" />
                                    <span>{projects[activatedProject].status}</span>
                                </span>
                            )
                        })}
                    </span>
                </span>
                <span className="desc gap-5">
                    <span className="py-4 px-6 rounded-2xl job-box line-height font-hubot font-light text-base">{projects[activatedProject].description}</span>
                    <span className="flex justify-between items-center py-4 px-6 rounded-2xl job-box">
                        <span>we used</span>
                        <span className="flex gap-3">
                            {projects[activatedProject].technologies.map((tech, index) => {
                                const Tech = tech;
                                return (<span className="p-2 bg-NeutralDark-200 rounded-full h-fit" key={index}><Tech className="w-5 h-5 rounded-full" /></span>)
                            }
                            )}
                        </span>
                    </span>
                </span>
            </span>
            <span className="flex gap-5 w-full p-7 rounded-2xl job-box items-center justify-center">
                {projects.map((project, index) => {
                    const icon = project.image
                    return (<span onClick={(el) => { changeActive(projectSelection.current[index] as HTMLElement, index) }} ref={(el) => { projectSelection.current[index] = el }}
                        className="flex items-center justify-center flex-col gap-1.5 cursor-pointer hover:brightness-150">
                        <img style={{ 'height': '40px' }} src={icon.src} alt="" />
                        <span className={"active-project " + (index == 0 ? "bg-secondary-300" : '')}></span>
                    </span>)
                })}
            </span>
        </span>
    )
}