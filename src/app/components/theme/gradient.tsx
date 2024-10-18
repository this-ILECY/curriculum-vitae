"use client";

import { useEffect, useRef } from "react";

export default function Gradient() {

    const greenlayer = useRef(null);
    const bluelayer = useRef(null);
    const blackhorizontal = useRef(null);
    const blackedge = useRef(null);
    const blackvertical = useRef(null);

    let controller = true;

    // useEffect(() => {

    //     // setTimeout(() => {
    //     const interval = setInterval(() => {
    //         console.log(controller);

    //         if (controller) {
    //             greenlayer.current.classList.add(...['top-0', 'right-0']);
    //             greenlayer.current.classList.remove(...['top-40', 'right-5']);

    //             bluelayer.current.classList.add(...['right-0']);
    //             bluelayer.current.classList.remove(...['right-3']);
    //         } else {
    //             greenlayer.current.classList.add(...['top-40', 'right-5']);
    //             greenlayer.current.classList.remove(...['top-0', 'right-0']);

    //             bluelayer.current.classList.add(...['right-3']);
    //             bluelayer.current.classList.remove(...['right-0']);
    //         }

    //         controller = !controller
    //     }, 1000);
    //     return (() => {
    //         clearInterval(interval)
    //     })
    // })

    return (
        <span className="contents">
            <span ref={greenlayer} className="simple-transition absolute h-full w-full top-0 right-0 greenlayer"></span>
            <span ref={bluelayer} className="simple-transition absolute h-full w-full top-0 right-0 bluelayer"></span>
            <span ref={blackhorizontal} className="simple-transition absolute h-full w-full top-0 right-0 blackhorizontal"></span>
            <span ref={blackedge} className="simple-transition absolute h-full w-full top-0 right-0 blackedge"></span>
            <span ref={blackvertical} className="simple-transition absolute h-full w-full top-0 right-0 blackvertical"></span>
        </span>
    )
}