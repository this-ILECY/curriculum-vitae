"use client"

import { useEffect, useRef, useState } from "react"
import { Jobs } from "../@data/jobs";

export default function experience() {

    const ray = useRef(null);
    const wsp = useRef(null);
    const activetab = useRef(null);

    const desc = useRef<(HTMLElement | null)[]>([])

    const jobs = Jobs;

    useEffect(() => {

        return (() => {
            activeTab(ray.current, 'right');    
        })
    })

    const activeTab = (ref: HTMLElement, position: 'right' | 'left') => {
        if (activetab.current) activetab.current.style.width = getComputedStyle(ref).width
        if (activetab.current) activetab.current.style.height = getComputedStyle(ref).height

        if (position == "right") {
            if (activetab.current) activetab.current.style.right = 'unset'
            if (activetab.current) activetab.current.style.left = '0.75rem'

            if (desc.current[1]) desc.current[1].classList.add("hide")
            setTimeout(() => {
                if (desc.current[1]) desc.current[1].classList.add('no-height')
                setTimeout(() => {

                    if (desc.current[0]) desc.current[0].classList.remove(...["hide", 'no-height']);
                }, 20);
            }, 500);
        }
        else {
            if (activetab.current) activetab.current.style.left = 'unset'
            if (activetab.current) activetab.current.style.right = '0.75rem';

            if (desc.current[0]) desc.current[0].classList.add("hide")
            setTimeout(() => {
                if (desc.current[0]) desc.current[0].classList.add('no-height')
                setTimeout(() => {
                    if (desc.current[1]) desc.current[1].classList.remove(...["hide", 'no-height'])
                }, 20);
            }, 500);
        }
    }

    return (
        <span className="z-10 text-white grow flex">
            <span className="mx-0p job-box job-box-radius p-4p mx-16 squircle mask-squircle w-full flex flex-col justify-start items-center grow h-full">
                <span className="relative tabs flex gap-10 py-2 px-3 font-hubot font-light">
                    <span ref={activetab} className="absolute bg-primary-400 top-2 left-3 h-full z-1 transition-all"></span>
                    <span ref={ray} onClick={() => { activeTab(ray.current, 'right') }} className="flex justify-center py-1 px-2 z-10 cursor-pointer">Rayvarz</span>
                    <span ref={wsp} onClick={() => {
                        activeTab(wsp.current, "left"); console.log(desc);
                    }} className="flex justify-center py-1 px-2 z-10 cursor-pointer">WSP</span>
                </span>
                <span className="contents">
                    {jobs.map((job, index) => {
                        const IconComponent = job.icon
                        return (
                            <span ref={(el) => {
                                desc.current[index] = el; // Assign ref but don't return anything
                            }} key={index + ''} id={"job-" + index}
                                className="simple-transition hide no-height flex flex-col gap-10 pt-5 font-hubot">
                                <span className="header">
                                    <span className="flex justify-between">
                                        <span className="flex gap-4p w-full">
                                            <span className="logo"><IconComponent /></span>
                                            <span className="flex flex-col justify-between">
                                                <span className="flex gap-3 items-end">
                                                    <span className="font-bold text-4xl">{job.name}</span>
                                                    <span className="font-extralight text-3xl text-2xl-md">{job.subtitle}</span>
                                                </span>
                                                <span className="time font-extralight text-base">{job.type} - {job.diff}</span>
                                            </span>
                                        </span>
                                        <span className="flex flex-col text-base italic font-extralight text-no-wrap">
                                            <span>{job.start}</span>
                                            <span>{job.end}</span>
                                        </span>
                                    </span>
                                </span>
                                <span className="text-base line-height font-extralight px-6 py-4 bg-NeutralDark-300 rounded-xl">{job.description}</span>
                            </span>
                        )
                    })}
                </span>
            </span>
        </span>
    )
}