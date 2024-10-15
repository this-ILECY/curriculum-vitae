import { ChevronDownIcon } from "../theme/icons";

export default function Home() {
    return (
        <span className="contents">
            <span className="z-10 flex flex-col justify-between items-center">
                <span className="flex flex-col">
                    <span className="font-hubot font-normal text-6xl">An effective man creating</span>
                    <span className="font-hubot font-black text-7-5xl">powerful solutions!</span>
                    <span className="font-hubot font-bold text-xl pt-4">is what i supposed myself to be and i try my best to achieve it!</span>
                </span>
                <ChevronDownIcon className="w-12" />
            </span>
        </span>
    )
}