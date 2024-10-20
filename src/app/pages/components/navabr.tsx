"use client";

import { useEffect, useState } from "react"
import { HomeIcon, BriefcaseIcon, LightbulbIcon, GraduateIcon, AtSymbolIcon, DownloadIcon } from "../theme/icons"
import { ComponentProps } from "@/app/interfaces/component.interface";
import Link from "next/link";
import { route } from "@/app/@consts/route";
import { usePathname } from 'next/navigation';

export default function Navbar({ className }: ComponentProps) {

    const routes = route;
    const pathname = usePathname();

    const [activeIndex, setActiveIndex] = useState(0)

    const activateNavItem = (index: number) => {
        setActiveIndex(index)
    }

    const findItemId = (pathname: string) => {
        return Object.values(route).find(routeObj => routeObj.direction === pathname).id;
    }

    useEffect(() => {
        activateNavItem(findItemId(pathname));

        return (() => { })
    })

    return (
        <span className={"flex flex-col gap-20 w-fit font-hubot font-extralight text-xl z-10 " + className}>
            <span className="flex flex-col gap-9">
                <Link className="contents" href={routes.home?.direction ?? ''}>
                    <span onClick={() => activateNavItem(0)} className={"navItem p-1.5 rounded-2xl w-fit simple-transition flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 0 ? "text-primary-300" : "")}>
                        <HomeIcon className="w-9" />
                        <p className="pr-3">Home</p>
                    </span>
                </Link>
                <Link className="contents" href={routes.experience?.direction ?? ''}>
                    <span onClick={() => activateNavItem(1)} className={"navItem p-1.5 rounded-2xl w-fit simple-transition flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 1 ? "text-primary-300" : "")}>
                        <BriefcaseIcon className="w-9" />
                        <p className="pr-3">Experience</p>
                    </span>
                </Link>
                <Link className="contents" href={routes.projects?.direction ?? ''}>
                    <span onClick={() => activateNavItem(2)} className={"navItem p-1.5 rounded-2xl w-fit simple-transition flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 2 ? "text-primary-300" : "")}>
                        <LightbulbIcon className="w-9" />
                        <p className="pr-3">Projects</p>
                    </span>
                </Link>
                <Link className="contents" href={routes.skills?.direction ?? ''}>
                    <span onClick={() => activateNavItem(3)} className={"navItem p-1.5 rounded-2xl w-fit simple-transition flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 3 ? "text-primary-300" : "")}>
                        <GraduateIcon className="w-9" />
                        <p className="pr-3">Skills</p>
                    </span>
                </Link>
                <Link className="contents" href={routes.contact?.direction ?? ''}>
                    <span onClick={() => activateNavItem(4)} className={"navItem p-1.5 rounded-2xl w-fit simple-transition flex flex-row items-center gap-3 cursor-pointer " + (activeIndex === 4 ? "text-primary-300" : "")}>
                        <AtSymbolIcon className="w-9" />
                        <p className="pr-3">Contact</p>
                    </span>
                </Link>
            </span>
            <span className={"navItem p-1.5 rounded-2xl w-fit simple-transition flex flex-row items-center gap-3 cursor-pointer"}>
                <DownloadIcon className="w-9" />
                <p className="pr-3">Download CV</p>
            </span>
        </span>
    )
}