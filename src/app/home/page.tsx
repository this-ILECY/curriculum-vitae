import { ChevronDownIcon } from "../pages/theme/icons";
import me from '../../assets/png/me.png'

export default function Home() {
    return (
        <span className="contents home-main">
            <img className="me-png h-full absolute right-0 bottom-0" src={me.src} alt="Me" />
            <span className="home-text z-10 flex flex-col justify-between max-w-60p md:red">
                <span className="flex flex-col">
                    <span className="creating font-hubot font-normal text-6xl md-text-5xl">An effective man creating</span>
                    <span className="powerfull font-hubot font-black text-7-5xl md-loading-5">powerful solutions!</span>
                    <span className="supposed font-hubot font-bold text-xl pt-4 md-max-w-50">is what i supposed myself to be and i try my best to achieve it!</span>
                </span>
                {/* <ChevronDownIcon className="chev w-12" /> */}
            </span>
        </span>
    )
}