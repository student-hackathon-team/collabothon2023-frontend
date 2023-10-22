import type {NextPage} from "next";
import AppLayout from "../components/AppLayout";
import palomaBitmoji from '../assets/img/bitmojis/paloma_bitmoji.png'
import friends, {exampleUser} from "../data/friends";
import {BiPlus} from "react-icons/bi";

const groups = [
    {
        name: 'Family',
        members: new Array(10).fill(exampleUser),
        balance: null
    },
    {
        name: 'Close friends',
        members: new Array(10).fill(exampleUser),
        balance: -5
    },
    {
        name: 'AV club',
        members: new Array(10).fill(exampleUser),
        balance: 20
    }
]

const SocialPage: NextPage = () => {
    return (
        <AppLayout>
            <div className="mt-8">
                <div className="flex justify-center items-end">
                    <div className="mr-2">
                        <span className="text-sm">I borrowed</span>
                        <div className="flex justify-end">
                            <div
                                className="rounded-full bg-red-accent flex items-center justify-center w-10 h-10 border-purple border-2">
                                5
                            </div>
                        </div>
                    </div>
                    <img
                        src={palomaBitmoji.src}
                        alt=""
                        className="w-32 h-32 rounded-full border-2 border-primary"/>
                    <div className="ml-2">
                        <span className="text-sm">I loaned</span>
                        <div
                            className="rounded-full bg-red-accent flex items-center justify-center w-10 h-10 border-purple border-2">
                            20
                        </div>
                    </div>
                </div>
                <span className="block text-center text-2xl font-primary mt-3">{exampleUser.name}</span>
                <div className="flex justify-center">
                    <span className="bg-orange-500/20 border border-primary px-2 py-0.5 rounded-xl">
                        @{exampleUser.username}
                    </span>
                </div>
                <div className=" mt-5">
                    <div className="px-5 mb-5">
                        <span className="text-xl">Your groups</span>
                    </div>
                    <div className="grid gap-5">
                        {
                            groups.map(group => (
                                <div className="rounded mx-5 border border-black/20 relative">
                                    <span
                                        className="absolute top-0 left-1 transform -translate-y-1/2 bg-black/20 px-1 rounded">{group.name}</span>
                                    {group.balance !== null && (
                                        <span
                                            className={[
                                                "absolute top-0 right-1 transform -translate-y-1/2  px-1 rounded",
                                                group.balance > 0 ? 'bg-green-500/20' : 'bg-red-500/20'
                                            ].join(' ')}>
                                        {group.balance > 0 && '+'}{group.balance} PLN
                                    </span>
                                    )}
                                    <div className="flex pt-5 pb-1 px-2">
                                        {friends.map(friend => (
                                            <div className="">
                                                <div className="flex justify-center">
                                                    <img
                                                        src={friend.bitmojiSrc}
                                                        alt=""
                                                        className="w-12 h-12 rounded-full border-2 border-primary"/>
                                                </div>
                                                <span className="block text-center">@{friend.username}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="">
                        <div className="flex flex-col  items-center my-1">
                            {new Array(3).fill((
                                <span className="w-1 h-1 block rounded-full bg-black/20 my-0.5"></span>
                            ))}
                        </div>
                        <div className="flex items-center justify-center">
                                                <span className="w-10 h-10 bg-primary text-dark rounded-full items-center justify-center flex">
                                                    <BiPlus className="w-7 h-7" />
                                                </span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="px-5 mb-5">
                            <span className="text-xl">Your challenges</span>
                            <div className="mt-10 grid grid-cols-3 gap-y-4 gap-x-3">
                                {new Array(6).fill((
                                    <div className="rounded-lg relative flex items-end pt-20">
                                        <img
                                            src="https://picsum.photos/300/400"
                                            alt=""
                                            className="rounded-lg absolute top-0 left-0 w-full h-full object-cover z-[-1]"/>
                                        <div className="bg-dark/80 px-1 py-2 w-full">
                                            <span className="block font-bold text-sm">5000 steps/day</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default SocialPage;
