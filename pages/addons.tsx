import type {NextPage} from "next";
import AppLayout from "../components/AppLayout";
import palomaBitmoji from '../assets/img/bitmojis/paloma_bitmoji.png'
import friends, {exampleUser} from "../data/friends";
import {BiPlus} from "react-icons/bi";
import {BsFillPaletteFill, BsPerson, BsPlug, BsPlus, BsShield} from "react-icons/bs";
import personalFinanseImg from '../assets/graphics/personal-finanse.png'
import parentsImg from '../assets/graphics/parents.png'
const groups = [
    // {
    //     name: 'Family',
    //     members: new Array(10).fill(exampleUser),
    //     balance: null
    // },
    {
        name: 'Close friends',
        members: new Array(10).fill(exampleUser),
        balance: -5
    },
    // {
    //     name: 'AV club',
    //     members: new Array(10).fill(exampleUser),
    //     balance: 20
    // }
]

const SocialPage: NextPage = () => {
    return (
        <AppLayout>
            <div className="mt-8">
                <h3 className="text-center text-2xl font-primary">Addons</h3>
                <div className="mt-10 px-5 grid gap-5">
                    <div className="rounded-lg border-2 border-white/20 px-2 py-1">
                        <div className="">
                            <div className="flex items-center justify-center w-full">
                                <img src={personalFinanseImg.src} className="h-40" />
                            </div>
                            <div className="flex items-center justify-center col-span-2">
                                <span className="text-xl">
                                    Profile & theme
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border-2 border-white/20 px-2 py-1">
                        <div className="grid grid-cols-3">
                            <div className="flex items-center justify-center">
                                <span className=""><BsShield className="h-10 w-10" /></span>
                            </div>
                            <div className="flex items-center justify-center col-span-2">
                                <span className="text-xl">
                                    Parental control
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 mb-5">
                        <div className="border-black/20 rounded-lg flex items-center justify-center">
                                 <span className="w-10 h-10 bg-primary text-dark rounded-full items-center justify-center flex">
                                                    <BiPlus className="w-7 h-7" />
                                                </span>
                        </div>
                    </div>
                </div>
            </div>

        </AppLayout>
    );
};

export default SocialPage;
