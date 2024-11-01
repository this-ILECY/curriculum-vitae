
"use client"
import Gradient from "./pages/theme/gradient";
// import Home from "./home/page";
// import { useEffect, useState } from "react";
import Navbar from './pages/components/navabr';
// import { usePathname } from 'next/navigation';
// import { useRouter } from "next/navigation";

export default function HomePage({ children }: { children: React.ReactNode }) {

  // Detecting current route to display appropriate content
  // const pathname = usePathname();

  // const router = useRouter();

  // const routes = [
  //   '/home', '/experience', '/projects', '/skills', '/contact'
  // ]
  // console.log(pathname);

  // useEffect(() => {
  //   return (() => {


  //   })
  // })

  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const currentPosition = window.scrollY;

  //   setTimeout(() => {
  //     let routeIndex = routes.findIndex(x => x === pathname)

  //     if (currentPosition > scrollPosition) {
  //       routeIndex--;
  //       console.log('Scrolling down');
  //     } else {
  //       routeIndex++;
  //       console.log('Scrolling up');
  //     }
  //     router.push(routes[routeIndex])
  //   }, 300);

  //   setScrollPosition(currentPosition);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollPosition]);

  return (
    <div className="flex w-screen main-page relative items-center content-center p-8 md:py-5 select-none">
      <Gradient />

      <div className="page-layout-main w-full h-fit flex flex-row gap-3">
        <Navbar />
        {children}
        <Navbar className="second-bar opacity-0 none" />
      </div>
    </div>
  );
}