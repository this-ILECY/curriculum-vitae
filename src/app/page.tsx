import Navbar from "./components/system/navabr";
import me from '../assets/png/me.png'
import Gradient from "./components/theme/gradient";
import { ChevronDownIcon } from "./components/theme/icons";
import Home from "./components/system/home";

export default function HomePage() {



  return (
    <span className="flex w-full h-full relative items-center content-center p-24">
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
