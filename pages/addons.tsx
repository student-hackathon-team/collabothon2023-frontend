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


const SocialPage: NextPage = () => {
    return (
        <AppLayout>
            <div className="mt-8">
                <h3 className="text-center text-2xl font-primary font-bold">Addons</h3>
                <div className="mt-5 px-5 grid gap-5">
                    {
                        addons.map(addon => (
                            <div className="rounded-lg border-2 border-white/20 px-2 py-1">
                                <div className="">
                                    <div className="flex items-center justify-center w-full">
                                        <img src={addon.img} className="h-40" />
                                    </div>
                                    <div className="flex items-center justify-center col-span-2">
                                <span className="text-xl">
                                    {addon.name}
                                </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </AppLayout>
    );
};

export default SocialPage;
