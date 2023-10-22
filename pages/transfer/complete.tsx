import {PiSticker, PiTextBBold} from "react-icons/pi";
import {useState} from "react";
import {BiCrop, BiText} from "react-icons/bi";
import {BsArrowUp, BsHouse, BsPen} from "react-icons/bs";
import {AiOutlineSound} from "react-icons/ai";
import {MdOutlineTimer} from "react-icons/md";
import {FiCheckCircle} from "react-icons/fi";
import Link from "next/link";

const icons = [
    BiText,
    PiSticker,
    BiCrop,
    AiOutlineSound,
    MdOutlineTimer
]

const Edit = () => {
    const [step, setStep] = useState('editing-video')
    return (
        <div className="w-screen h-screen">
           <div className="pt-20 flex justify-center">
               <FiCheckCircle className="w-32 h-32 text-[#3A71F9]" />
           </div>
            <div className="text-center mt-10 px-10">
                <span className="block text-center text-3xl">Your transfer was completed</span>
            </div>
            <div className="px-10 mt-10">
                <Link href="/"
                      className="rounded-lg bg-[#3A71F9] text-white font-bold px-6 py-2 block w-full flex items-center justify-center">
                    Go to dashboard <BsHouse className="ml-2 w-5 h-5" />
                </Link>
            </div>
        </div>
    )
}

export default Edit