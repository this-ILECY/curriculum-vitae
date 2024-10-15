"use client";

import { useState } from "react"
import { HomeIcon, BriefcaseIcon, LightbulbIcon, GraduateIcon, AtSymbolIcon, DownloadIcon } from "../theme/icons"
import { ComponentProps } from "@/app/interfaces/component.interface";

export default function Navbar({ className }: ComponentProps) {

    const [activeIndex, setActiveIndex] = useState(0)

    const activateNavItem = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <span className={"flex flex-col gap-20 w-fit font-hubot font-extralight text-xl z-10 " + className}>
            <span className="flex flex-col gap-9">
                <span onClick={() => activateNavItem(0)} className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 0 ? "text-primary-300" : "")}>
                    <HomeIcon className="w-9" />
                    <p className="pr-3">Home</p>
                </span>
                <span onClick={() => activateNavItem(1)} className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 1 ? "text-primary-300" : "")}>
                    <BriefcaseIcon className="w-9" />
                    <p className="pr-3">Experience</p>
                </span>
                <span onClick={() => activateNavItem(2)} className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 2 ? "text-primary-300" : "")}>
                    <LightbulbIcon className="w-9" />
                    <p className="pr-3">Projects</p>
                </span>
                <span onClick={() => activateNavItem(3)} className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 3 ? "text-primary-300" : "")}>
                    <GraduateIcon className="w-9" />
                    <p className="pr-3">Skills</p>
                </span>
                <span onClick={() => activateNavItem(4)} className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 4 ? "text-primary-300" : "")}>
                    <AtSymbolIcon className="w-9" />
                    <p className="pr-3">Contact</p>
                </span>
            </span>
            <span className={"navItem p-1.5 rounded-2xl w-fit simple-transitoin flex flex-row items-center gap-3 cursor-pointer"}>
                <DownloadIcon className="w-9" />
                <p className="pr-3">Download CV</p>
            </span>
        </span>
    )
}