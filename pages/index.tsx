import type { NextPage } from "next";
import {SpendingChart} from "../components/StartPage/SpendingChart";
import HistoryItem from "../components/StartPage/HistoryItem";
import RankingChart from "../components/StartPage/RankingChart";
import AppLayout from "../components/AppLayout";

const Start: NextPage = () => {
  return (
        <AppLayout>
            <div className="px-10" style={{
                boxSizing: 'border-box'
            }}>
                <div className="mt-5 grid gap-10">
                    <h2 className=" text-center rounded-xl bg-purple text-light pb-2">
                        <span className="font-primary text-6xl">2137</span>
                         <span className="text-black/80 ml-2 text-xl text-light">PLN</span>
                    </h2>
                    {/*<div>*/}
                    {/*    <div className="bg-light rounded-lg px-2 py-3">*/}
                    {/*        <div className="h-40">*/}
                    {/*            <SpendingChart />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="bg-light rounded-lg px-2 py-3">
                        <span className="block text-center text-dark mb-5">Payments history</span>
                    <div className="grid gap-2">
                        {new Array(3).fill(<HistoryItem />)}
                    </div>
                    </div>
                </div>
                <div className="mt-10">
                    <span className="">Challenge streaks</span>
                    <div className="bg-light rounded-lg px-2 py-3">
                        <RankingChart />
                    </div>

                </div>
            </div>
        </AppLayout>
  );
};

export default Start;
