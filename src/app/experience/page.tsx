"use client"

import { useEffect, useRef } from "react"
import { Jobs } from "../@data/jobs";

export default function experience() {

    const ray = useRef(null);
    const wsp = useRef(null);
    const activetab = useRef(null);

    const jobs = Jobs;

    useEffect(() => {

        return (() => {
            activeTab(ray.current, 'right')
        })
    })

    const activeTab = (ref: HTMLElement, position: 'right' | 'left') => {
        if(activetab.current) activetab.current.style.width = getComputedStyle(ref).width
        if(activetab.current) activetab.current.style.height = getComputedStyle(ref).height

        if (position == "right") {
            if(activetab.current) activetab.current.style.right = 'unset'
            if(activetab.current) activetab.current.style.left = '0.75rem'
        }
        else {
            if(activetab.current) activetab.current.style.left = 'unset'
            if(activetab.current) activetab.current.style.right = '0.75rem'
        }
    }

    return (
        <span className="z-10 text-white grow flex">
            <span className="job-box p-4p squircle mask-squircle w-full flex flex-col justify-start gap-5 items-center grow h-full">
                <span className="relative tabs flex gap-5 py-2 px-3 font-hubot font-light">
                    <span ref={activetab} className="absolute bg-primary-400 top-2 left-3 h-full z-1 transition-all"></span>
                    <span ref={ray} onClick={() => { activeTab(ray.current, 'right') }} className="flex justify-center py-1 px-2 z-10 cursor-pointer">Rayvarz</span>
                    <span ref={wsp} onClick={() => { activeTab(wsp.current, "left") }} className="flex justify-center py-1 px-2 z-10 cursor-pointer">WSP</span>
                </span>
                <span className="contents">
                    {jobs.map((job, index) => {
                        const IconComponent = job.icon
                        return (
                            <span key={index + ''} className="flex flex-col gap-5 font-hubot">
                                <span className="header">
                                    <span className="flex justify-between">
                                        <span className="flex gap-4p w-full">
                                            <span className="logo"><IconComponent /></span>
                                            <span className="flex flex-col">
                                                <span className="flex gap-3 text-4xl">
                                                    <span className="font-extrabold">{job.name}</span>
                                                    <span className="font-extralight">{job.subtitle}</span>
                                                </span>
                                                <span className="time">12mos</span>
                                            </span>
                                        </span>
                                        <span className="flex flex-col text-base italic font-extralight text-no-wrap">
                                            <span>{job.start}</span>
                                            <span>{job.end}</span>
                                        </span>
                                    </span>
                                </span>
                                <span className="text-base font-extralight px-6 py-4 bg-NeutralDark-300 rounded-xl">{job.description}</span>
                            </span>
                        )
                    })}
                </span>
            </span>
        </span>
    )
}