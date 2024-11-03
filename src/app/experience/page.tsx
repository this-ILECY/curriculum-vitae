"use client"

import { useEffect, useRef, useState } from "react"
import { Job, Jobs } from "../@data/jobs";

export default function Experience() {

    const [activatedJob, setActivatedJob] = useState(0);

    const ray = useRef(null);
    const wsp = useRef(null);
    const activetab = useRef(null);

    const desc = useRef<(HTMLElement | null)[]>([])

    const jobs: Job[] = Jobs;
    useEffect(() => {
        if (activetab.current) activetab.current.style.width = getComputedStyle(activatedJob == 0 ? ray.current : wsp.current).width
        if (activetab.current) activetab.current.style.height = getComputedStyle(activatedJob == 0 ? ray.current : wsp.current).height
    })
    
    const activeTab = (ref: HTMLElement, position: number) => {
        if (activetab.current) activetab.current.style.width = getComputedStyle(ref).width
        if (activetab.current) activetab.current.style.height = getComputedStyle(ref).height

        if (position == 0) {
            if (activetab.current) activetab.current.classList.add('tab-left')
            if (activetab.current) activetab.current.classList.remove('tab-right')
        } else {
            if (activetab.current) activetab.current.classList.add('tab-right')
            if (activetab.current) activetab.current.classList.remove('tab-left')
        }
        setActivatedJob(position)
    }

    return (
        <span className="experience z-10 text-white grow flex">
            <span className="mx-0p job-box job-box-radius p-4p mx-16 squircle mask-squircle w-full flex flex-col justify-start items-center grow h-full">
                <span className="relative tabs flex gap-10 py-2 px-3 font-hubot font-light">
                    <span ref={activetab} className="absolute tab-right bg-primary-400 top-2 left-3 h-full z-1 transition-all tab-left"></span>
                    <span ref={ray} onClick={() => { activeTab(ray.current, 0) }} className="tab flex justify-center py-1 px-2 z-10 cursor-pointer">Rayvarz</span>
                    <span ref={wsp} onClick={() => { activeTab(wsp.current, 1) }} className="tab flex justify-center py-1 px-2 z-10 cursor-pointer">WSP</span>
                </span>
                <span className="contents">
                    <span ref={(el) => {
                        desc.current[activatedJob] = el; // Assign ref but don't return anything
                    }} key={activatedJob + ''} id={"job-" + activatedJob}
                        className="jobing simple-transition flex flex-col gap-10 pt-5 font-hubot">
                        <span className="header">
                            <span className="top-main flex justify-between">
                                <span className="flex gap-4p w-full">
                                    {jobs[activatedJob].icon.map((job, index) => {
                                        const IconComponent = job;
                                        return (
                                            <span key={index} className="logo"><IconComponent className="jobIcon" /></span>
                                        )
                                    })}
                                    <span className="flex flex-col justify-between">
                                        <span className="jobname flex gap-3 items-end">
                                            <span className="name font-bold text-4xl">{jobs[activatedJob].name}</span>
                                            <span className="sub font-extralight text-3xl text-2xl-md">{jobs[activatedJob].subtitle}</span>
                                        </span>
                                        <span>
                                            <span className="time font-extralight text-base">{jobs[activatedJob].type} - {jobs[activatedJob].diff}</span>
                                        </span>
                                    </span>
                                </span>
                                <span className="date flex flex-col text-base italic font-extralight text-no-wrap">
                                    <span className="spacer"></span>
                                    <span>{jobs[activatedJob].start}</span>
                                    <span>{jobs[activatedJob].end}</span>
                                </span>
                            </span>
                        </span>
                        <span className="desc text-base line-height font-extralight px-6 py-4 bg-NeutralDark-300 rounded-xl">{jobs[activatedJob].description}</span>
                    </span>
                </span>
            </span>
        </span>
    )
}