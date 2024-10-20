"use client"

import { useEffect, useRef } from "react"

export default function experience() {

    const ray = useRef(null);
    const wsp = useRef(null);
    const activetab = useRef(null);

    useEffect(() => {

        return (() => {
            activeTab(ray.current, 'right')
        })
    })

    const activeTab = (ref: HTMLElement, position: 'right' | 'left') => {
        activetab.current.style.width = getComputedStyle(ref).width
        activetab.current.style.height = getComputedStyle(ref).height

        if (position == "right") {
            activetab.current.style.right = 'unset'
            activetab.current.style.left = '0.75rem'
        }
        else {
            activetab.current.style.left = 'unset'
            activetab.current.style.right = '0.75rem'
        }
    }

    return (
        <span className="z-10 text-white grow flex">
            <span className="job-box p-4p squircle mask-squircle w-full flex flex-col justify-start gap-4p items-center grow h-full">
                <span className="relative tabs flex gap-5 py-2 px-3 font-hubot font-light">
                    <span ref={activetab} className="absolute bg-primary-400 top-2 left-3 h-full z-1 transition-all"></span>
                    <span ref={ray} onClick={() => { activeTab(ray.current, 'right') }} className="flex justify-center py-1 px-2 z-10 cursor-pointer">Rayvarz</span>
                    <span ref={wsp} onClick={() => { activeTab(wsp.current, "left") }} className="flex justify-center py-1 px-2 z-10 cursor-pointer">WSP</span>
                </span>
                <span>hi</span>
            </span>
        </span>
    )
}