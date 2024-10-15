"use client";

import { useState } from "react"
import { HomeIcon, BriefcaseIcon, LightbulbIcon, GraduateIcon, AtSymbolIcon, DownloadIcon } from "../theme/icons"

export default function Navbar() {

    const [activeIndex, setActiveIndex] = useState(0)

    const activateNavItem = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <span className="flex flex-col gap-20 w-fit font-hubot font-extralight text-xl">
            <span className="flex flex-col gap-9">
                <span onClick={() => activateNavItem(0)} className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 0 ? "text-primary-300" : "")}>
                    <HomeIcon className="w-9" />
                    <p>Home</p>
                </span>
                <span onClick={() => activateNavItem(1)} className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 1 ? "text-primary-300" : "")}>
                    <BriefcaseIcon className="w-9" />
                    <p>Experience</p>
                </span>
                <span onClick={() => activateNavItem(2)} className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 2 ? "text-primary-300" : "")}>
                    <LightbulbIcon className="w-9" />
                    <p>Projects</p>
                </span>
                <span onClick={() => activateNavItem(3)} className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 3 ? "text-primary-300" : "")}>
                    <GraduateIcon className="w-9" />
                    <p>Skills</p>
                </span>
                <span onClick={() => activateNavItem(4)} className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 4 ? "text-primary-300" : "")}>
                    <AtSymbolIcon className="w-9" />
                    <p>Contact</p>
                </span>
            </span>
            <span className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer"}>
                <DownloadIcon className="w-9" />
                <p>Download CV</p>
            </span>
        </span>
    )
}