import type { NextPage } from "next";
import { SpendingChart } from "../components/StartPage/SpendingChart";
import HistoryItem from "../components/StartPage/HistoryItem";
import RankingChart from "../components/StartPage/RankingChart";
import AppLayout from "../components/AppLayout";
import BitmojiChart from "../components/StartPage/BitmojiChart";
import kubaBitmoji from "../../assets/img/bitmojis/kuba_bitmoji.png";
import Section from "../components/Section";
import Wave from "react-wavify";
import {
  BsArrowDownRight,
  BsArrowUpRight,
  BsBarChart,
  BsBarChartLine,
} from "react-icons/bs";

const Start: NextPage = () => {
  return (
    <AppLayout>
      <div
        className="px-10 relative"
        style={{
          boxSizing: "border-box",
        }}
      >
        <div className="mt-5 grid gap-10">
          <h2 className=" text-center rounded-xl text-primary bg-primaryLight animate-slideDown">
            <span className="font-primary text-6xl">1603</span>
            <span className="text-black/80 ml-2 text-xl text-primary">PLN</span>
          </h2>
          <div className="">
            <div className="flex justify-center">
              <SpendingChart />
            </div>
            <div className="animate-slide1">
              <div className="mt-5 flex justify-center">
                <div className="">
                  <button className="text-primary px-4 py-1 text-light rounded-2xl flex items-center justify-center">
                    <BsBarChartLine className="w-7 h-7 mr-3" />
                    <span className="font-bold text-xl">Explore</span>
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-center">
                  <button className=" px-4 py-1 border-2 border-accent rounded-2xl flex items-center justify-center">
                    <BsArrowUpRight className="w-7 h-7 mr-3" />
                    <span className="font-bold text-xl">Send</span>
                  </button>
                  <button className="ml-3  px-4 py-1 border-2 border-accent text-black rounded-2xl flex items-center justify-center">
                    <BsArrowDownRight className="w-7 h-7 mr-3" />
                    <span className="font-bold text-xl">Ask</span>
                  </button>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
          <div className=" bg-white shadow-lg rounded-lg animate-slide2">
            <div className=" py-1 ">
              <span className="block text-center font-primary font-bold px-5 py-0.5 bg-light/80 rounded-xl mx-20 mt-2">
                Your payments
              </span>
            </div>
            <div className=" px-2 py-3 ">
              <div className="grid gap-2">
                {new Array(3).fill(<HistoryItem />)}
              </div>
            </div>
          </div>
          <div className="animate-slide3">
            <Section title="Challenge">
              <BitmojiChart />
            </Section>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full h-full z-[-1]">
          <div className="flex items-end w-full h-full">
            <div className="w-full flex flex-col">
              <div className="max-h-[20vh] w-full">
                <Wave
                  fill="rgba(0, 0, 0, 0.01)"
                  paused={false}
                  style={{ display: "flex", width: "100%" }}
                  options={{
                    height: 10,
                    amplitude: 20,
                    speed: 0.25,
                    points: 3,
                  }}
                />
              </div>
              <div className="bg-black/05 h-[25vh] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Start;
