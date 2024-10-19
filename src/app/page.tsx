"use client"
import Navbar from "./components/system/navabr";
import me from '../assets/png/me.png'
import Gradient from "./components/theme/gradient";
import Home from "./components/system/home";
import { useCallback, useEffect, useState } from "react";

export default function HomePage() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > scrollPosition) {
      console.log('down');

      setScrollDirection('down')
    }
    else {
      console.log('up');

      setScrollDirection('up')
    }

    setScrollPosition(currentPosition)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollPosition]);

  return (
    <span className="flex w-full relative items-center content-center p-8p md-py-5p select-none" style={{ "height": "100.5vh" }}>
      <Gradient />
      <img className="h-full absolute right-0 bottom-0" src={me.src} alt="" />
      <span className="w-full h-fit flex flex-row gap-3">
        <Navbar />
        <Home />
      </span>
      {/* <ChevronDownIcon className="w-10" />
      <CalendarIcon className="w-10" />
      <FireIcon className="w-10" />
      <PhoneIcon className="w-10" />
      <MailIcon className="w-10" />
      <TelegramIcon className="w-10" />
      <ArtstationIcon className="w-10" />
      <LinkedinIcon className="w-10" />
      <InstagramIcon className="w-10" />
      <FigmaIcon className="w-10" /> */}
    </span>
  );
}
