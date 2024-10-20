"use client";

import { useRef } from "react";

export default function Gradient() {

    const greenlayer = useRef(null);
    const bluelayer = useRef(null);
    const blackhorizontal = useRef(null);
    const blackedge = useRef(null);
    const blackvertical = useRef(null);

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