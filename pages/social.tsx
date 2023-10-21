import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";
import {BiBell, BiBulb, BiChart, BiCog, BiHome, BiNotification, BiUser} from "react-icons/bi";
import {SpendingChart} from "../components/StartPage/SpendingChart";
import HistoryItem from "../components/StartPage/HistoryItem";
import RankingChart from "../components/StartPage/RankingChart";
import AppHeader from "../components/AppHeader";

const Start: NextPage = () => {
  return (
      <div className="bg-gray-900">
          <div className="relative max-w-sm mx-auto border-2 h-screen border-black bg-white">
              <AppHeader />
              <div className="mt-5">
                  <h2 className="text-4xl text-center">
                      2137 <span className="text-black/80">PLN</span>
                  </h2>
                  <div className="mt-10">
                      <SpendingChart />
                  </div>
                  <div className="mt-10 grid gap-2">
                      {new Array(3).fill(<HistoryItem />)}
                  </div>
              </div>
              <div className="mt-10">
                  <span className="">Challenge streaks</span>
                  <RankingChart />
              </div>
              <nav className="sticky top-[100%] border-t py-1">
                  <div className="w-4/5 mx-auto grid grid-cols-4">
                      <div className="flex justify-center">
                          <BiHome className="w-7 h-7" />
                      </div>
                      <div className="flex justify-center">
                          <BiUser className="w-7 h-7" />
                      </div>
                      <div className="flex justify-center">
                          <BiChart className="w-7 h-7" />
                      </div>
                      <div className="flex justify-center">
                          <BiCog className="w-7 h-7" />
                      </div>
                  </div>
              </nav>
          </div>
      </div>

  );
};

export default Start;
