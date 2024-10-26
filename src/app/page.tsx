
"use client"
import Gradient from "./pages/theme/gradient";
import Home from "./home/page";
import { useEffect, useState } from "react";
import Navbar from './pages/components/navabr';
import { usePathname } from 'next/navigation';

export default function HomePage({ children }: { children: React.ReactNode }) {

  // Detecting current route to display appropriate content
  // const pathname = usePathname(); 

  // console.log(pathname);


  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > scrollPosition) {
      console.log('Scrolling down');
    } else {
      console.log('Scrolling up');
    }

    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="flex w-screen main-page relative items-center content-center p-8 md:py-5 select-none">
      <Gradient />

      <div className="w-full h-fit flex flex-row gap-3 justify-between">
        <Navbar />
        {children}
        <Navbar className="opacity-0" />
      </div>
    </div>
  );
}