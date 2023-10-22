import type {NextPage} from "next";
import AppLayout from "../components/AppLayout";
import palomaBitmoji from '../assets/img/bitmojis/paloma_bitmoji.png'
import friends, {exampleUser} from "../data/friends";
import {BiPlus} from "react-icons/bi";
import {BsFillPaletteFill, BsPerson, BsPlug, BsPlus, BsShield} from "react-icons/bs";
import personalFinanseImg from '../assets/graphics/personal-finanse.png'
import parentsImg from '../assets/graphics/parents.png'
import profileImg from '../assets/graphics/profile.png'
import walletImg from '../assets/graphics/wallet.png'
import {SpendingChart} from "../components/StartPage/SpendingChart";

const addons = [
    {
        img: profileImg.src,
        name: 'Profile & customization'
    },
    {
        img: walletImg.src,
        name: 'Knowledge base'
    },
    {
        img: parentsImg.src,
        name: 'Parental control'
    },
]


const AnalyticsPage: NextPage = () => {
    return (
        <AppLayout>
            <div className="mt-8">
                <h3 className="text-center text-2xl font-primary font-bold">Analytics</h3>
                <div className="mt-5 px-5">
                    <div className="rounded-lg bg-light p-4">
                        <div className="grid grid-cols-5 gap-5">
                            <div className="rounded-lg bg-primary col-span-3 py-1 px-3">
                                <span className="text-3xl font-bold text-white font-primary">1306 PLN</span>
                                <span className="text-xl text-white block">Balance</span>
                            </div>
                            <div className="rounded-lg bg-accent col-span-2 py-1 px-3">
                                <span className="text-3xl font-bold text-white font-primary">42</span>
                                <span className="text-xl text-white block">Streaks</span>
                            </div>
                        </div>

                        <div className="mt-5 grid grid-cols-5 gap-5">
                            <div className="rounded-lg bg-[#D3D0CB] col-span-2 py-1 px-3">
                                <span className="text-3xl font-bold text-white font-primary">2/5</span>
                                <span className="text-xl text-white block">Goals</span>
                            </div>
                            <div className="rounded-lg bg-secondary col-span-3 py-1 px-3">
                                <span className="text-3xl font-bold text-white font-primary">76 PLN</span>
                                <span className="text-xl text-white block">Expenses <small>(this mo.)</small></span>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="mt-5 flex items-center justify-center">
                   <SpendingChart />
               </div>
            </div>

        </AppLayout>
    );
};

export default AnalyticsPage;