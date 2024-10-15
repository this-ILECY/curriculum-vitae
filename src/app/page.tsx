import Navbar from "./components/system/navabr";
import me from '../assets/png/me.png'

export default function Home() {



  return (
    <span className="flex w-full h-full relative items-center content-center p-24">
      <span className="absolute h-full w-full top-0 right-0 greenlayer"></span>
      <span className="absolute h-full w-full top-0 right-0 bluelayer"></span>
      <span className="absolute h-full w-full top-0 right-0 blackhorizontal"></span>
      <span className="absolute h-full w-full top-0 right-0 blackedge"></span>
      <span className="absolute h-full w-full top-0 right-0 blackvertical"></span>
      <img className="h-full absolute right-0 bottom-0" src={me.src} alt="" />
      <Navbar />
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
