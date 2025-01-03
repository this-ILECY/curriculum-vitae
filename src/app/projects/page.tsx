"use client";

import { useRef, useState } from "react";
import { IProject, Projects } from "../@data/projects"
import { CalendarIcon } from "../pages/theme/icons";
// import Image from 'next/image';

export default function ProjectsComp() {

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
        <span className="z-10 w-full flex items-center justify-center projects-component">
            <span className="flex flex-col gap-5 w-full h-full max-w-screen-lg">
                <span className="grow project-main gap-5">
                    <span className="job-box rounded-2xl py-6 px-8 flex flex-col justify-between items-center">
                        <span className="proj-img-name flex flex-col gap-10 items-center justify-center">
                            <img className="proj-image h-28" src={projects[activatedProject].image.src} alt="" />
                            <span className="proj-title flex flex-col gap-3 items-center">
                                <span className="proj-name text-3xl font-hubot font-semibold text-center">{projects[activatedProject].name}</span>
                                <span className="font-thin text-xs text-center">{projects[activatedProject].subtitle}</span>
                            </span>
                        </span>
                        <span className="flex gap-6 pt-1">
                            <span className="flex gap-3 font-hubot text-xs font-semibold items-center">
                                <CalendarIcon className="w-4 stroke-secondary-300" />
                                <span>{projects[activatedProject].start}</span>
                            </span>
                            {projects[activatedProject].icon.map((status, index) => {
                                const StatusIcon = status
                                return (
                                    <span key={'itemw-' + index} className="flex gap-3 font-hubot text-xs font-semibold text-nowrap">
                                        <StatusIcon className="w-4" />
                                        <span>{projects[activatedProject].status}</span>
                                    </span>
                                )
                            })}
                        </span>
                    </span>
                    <span className="desc gap-5">
                        <span className="project-desc py-4 px-6 rounded-2xl job-box line-height font-hubot font-light text-base">{projects[activatedProject].description}</span>
                        <span className="flex justify-between items-center py-4 px-6 rounded-2xl job-box">
                            <span className="we-used">we used</span>
                            <span className="flex gap-3">
                                {projects[activatedProject].technologies.map((tech, index) => {
                                    const Tech = tech;
                                    return (<span key={'items-' + index} className="p-2 bg-NeutralDark-200 rounded-full h-fit"><Tech className="w-5 h-5 rounded-full" /></span>)
                                }
                                )}
                            </span>
                        </span>
                    </span>
                </span>
                <span className="flex gap-5 w-full p-7 rounded-2xl job-box items-center justify-center">
                    {projects.map((project, index) => {
                        const icon = project.image
                        return (<span key={'item-' + index} onClick={() => { changeActive(projectSelection.current[index] as HTMLElement, index) }} ref={(el) => { projectSelection.current[index] = el }}
                            className="flex items-center justify-center flex-col gap-1.5 cursor-pointer hover:brightness-150 nav-item-parent">
                            <img className="project-nav-item" style={{ 'height': '40px' }} src={icon.src} alt="" />
                            <span className={"active-project " + (index == 0 ? "bg-secondary-300" : '')}></span>
                        </span>)
                    })}
                </span>
            </span>
        </span>
    )
}