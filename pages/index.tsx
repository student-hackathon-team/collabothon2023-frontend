import type { NextPage } from "next";
import {SpendingChart} from "../components/StartPage/SpendingChart";
import HistoryItem from "../components/StartPage/HistoryItem";
import RankingChart from "../components/StartPage/RankingChart";
import AppLayout from "../components/AppLayout";
import BitmojiChart from "../components/StartPage/BitmojiChart";
import kubaBitmoji from '../../assets/img/bitmojis/kuba_bitmoji.png'
import Section from "../components/Section";

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
                    <Section title="Expenses">
                        <SpendingChart />
                    </Section>
                    <div className="">
                        <div className="border-t border-x border-primary py-1 rounded-t-lg bg-primary">
                            <span className="block text-center text-accent font-primary">Your payments</span>
                        </div>
                        <div className="bg-light rounded-b-lg rounded-x-lg px-2 py-3">
                            <div className="grid gap-2">
                                {new Array(3).fill(<HistoryItem />)}
                            </div>
                        </div>
                    </div>
                    <Section title="Challenge">
                        <BitmojiChart />
                    </Section>
                </div>

            </div>
        </AppLayout>
  );
};

export default Start;
