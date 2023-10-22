import { PiSticker, PiTextBBold } from "react-icons/pi";
import { useState } from "react";
import { BiCrop, BiText } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsArrowUp,
  BsPen,
  BsX,
} from "react-icons/bs";
import { AiOutlineSound } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import Link from "next/link";

const icons = [BiText, PiSticker, BiCrop, AiOutlineSound, MdOutlineTimer];

const Edit = () => {
  const [step, setStep] = useState("editing-video");
  return (
    <div className="w-screen h-screen bg-black">
      <Link href="/" className="fixed top-5 left-5 z-10">
        <BsX className="w-10 h-10 text-white" />
      </Link>
      <video
        src="/example_snap.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        className="fixed top-0 left-0 w-full h-full object-cover bg-black"
      ></video>
      <div className="fixed top-5 right-3 z-10">
        <div className="grid gap-4 text-white">
          {icons.map((Icon) => (
            <button className="">
              <Icon className="w-8 h-8" />
            </button>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <div className="flex justify-end">
          {step === "editing-video" && (
            <button
              onClick={() => setStep("sending")}
              className="border-t border-t-2 border-primary bg-[#3A71F9] text-white animate-slide1 font-bold px-6 py-3 block w-full flex items-center justify-center font-bold"
            >
              Send transfer <BsArrowUp className="ml-2 w-5 h-5" />
            </button>
          )}
        </div>
        {step === "sending" && (
          <div className="rounded-t-xl bg-white px-5 pb-10 pt-7 animate-slide1">
            <h3 className="font-bold text-xl text-center mb-5">
              Enter recipient info
            </h3>

            <div className="">
              <div className="flex justify-center">
                <input
                  type="text"
                  className="border-b-2 border-primary text-primary w-10ch text-center inline-block outline-none text-2xl"
                  placeholder="@jane38"
                />
              </div>
              <span className="block text-sm text-center text-gray-600 mt-2">
                username
              </span>
            </div>
            <div className="mt-5">
              <div className="flex justify-center">
                <input
                  type="text"
                  className="border-b-2 border-primary text-primary w-10ch text-center inline-block outline-none text-2xl"
                  placeholder="25"
                />
              </div>
              <span className="block text-sm text-center text-gray-600 mt-2">
                amount
              </span>
            </div>
            <div className="mt-5">
              <Link
                href="/transfer/complete"
                className="rounded-lg bg-[#3A71F9] text-white font-bold px-6 py-2 block w-full flex items-center justify-center"
              >
                Transfer
                <BsArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;
