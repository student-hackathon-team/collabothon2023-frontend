import type { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import palomaBitmoji from "../assets/img/bitmojis/paloma_bitmoji.png";
import runningImg from "../assets/img/goals/running.jpg";
import bikeImg from "../assets/img/goals/bike.jpg";
import concertImg from "../assets/img/wishlist/concert.jpg";
import friends, { exampleUser } from "../data/friends";
import { BiPlus } from "react-icons/bi";
import { BsPlug, BsPlus } from "react-icons/bs";

const groups = [
  // {
  //     name: 'Family',
  //     members: new Array(10).fill(exampleUser),
  //     balance: null
  // },
  {
    name: "Close friends",
    members: new Array(10).fill(exampleUser),
    balance: -5,
  },
  // {
  //     name: 'AV club',
  //     members: new Array(10).fill(exampleUser),
  //     balance: 20
  // }
];

const SocialPage: NextPage = () => {
  return (
    <AppLayout>
      <div className="">
        <div
          className="pt-8 pb-4 flex justify-center items-end animate-slideDown"
          style={{
            background: "linear-gradient(to right, #ffe259, #ffa751)",
          }}
        >
          <div className="mr-2">
            <span className="text-sm">Borrowed</span>
            <div className="flex justify-end">
              <div className="rounded-full bg-white/80 flex items-center justify-center w-10 h-10 font-bold border-2">
                5
              </div>
            </div>
          </div>
          <img
            src={palomaBitmoji.src}
            alt=""
            className="w-32 h-32 rounded-full border-2 border-light"
          />
          <div className="ml-2">
            <span className="text-sm">I loaned</span>
            <div className="rounded-full bg-white/80 flex items-center justify-center w-10 h-10 font-bold border-2">
              20
            </div>
          </div>
        </div>
        <span className="block text-center text-2xl font-primary mt-3">
          {exampleUser.name}
        </span>
        <div className="flex justify-center">
          <span className="bg-orange-500/20 border border-orange-200 px-2 py-0.5 rounded-xl">
            @{exampleUser.username}
          </span>
        </div>
        <div className=" mt-5">
          <div className="px-5">
            <span className="text-xl px-2 py-0.5 bg-[#EAEFFE] text-primary rounded-lg">
              Your groups
            </span>
          </div>
          <div className="mt-8 grid gap-5 animate-jump">
            {groups.map((group) => (
              <div className="rounded mx-5 border-accent border  relative">
                <span className="absolute top-0 left-0 transform -translate-y-1/2 text-accent bg-white font-bold border-2 text-accent border-accent px-2 rounded">
                  {group.name}
                </span>
                {group.balance !== null && (
                  <span
                    className={[
                      "absolute top-0 right-1 transform -translate-y-1/2  px-1 rounded",
                      "bg-dark text-light",
                    ].join(" ")}
                  >
                    {group.balance > 0 && "+"}
                    {group.balance} EUR
                  </span>
                )}
                <div className="flex pt-5 pb-1 px-2">
                  {friends.map((friend) => (
                    <div className="first:ml-0 mx-2 last:mr-0">
                      <div className="flex justify-center">
                        <img
                          src={friend.bitmojiSrc}
                          alt=""
                          className="w-12 h-12 rounded-full border-2 border-primary"
                        />
                      </div>
                      <span className="block text-center text-primary font-bold">
                        @{friend.username}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <div className="flex flex-col  items-center my-1">
              {new Array(3).fill(
                <span className="w-1 h-1 block rounded-full bg-black/20 my-0.5"></span>
              )}
            </div>
            <div className="flex items-center justify-center">
              <span className="w-10 h-10 bg-primary text-white rounded-full items-center justify-center flex">
                <BiPlus className="w-7 h-7 text-white" />
              </span>
            </div>
          </div>
          <div className="mt-5">
            <div className="px-5 mb-5">
              <span className="text-xl px-2 py-0.5 bg-[#EAEFFE] text-primary rounded-lg">
                Your challenges
              </span>
              <div className="mt-8 grid grid-cols-3 gap-y-4 gap-x-3">
                <div className="rounded-lg relative flex items-end pt-20 animate-fadeIn">
                  <img
                    src={runningImg.src}
                    alt=""
                    className="rounded-lg absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                  />
                  <div className="bg-dark/80 text-light px-1 py-2 w-full">
                    <span className="block font-bold text-sm">50 km/mo</span>
                  </div>
                </div>
                <div className="rounded-lg relative flex items-end pt-20 animate-fadeIn">
                  <img
                    src={bikeImg.src}
                    alt=""
                    className="rounded-lg absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                  />
                  <div className="bg-dark/80 text-light px-1 py-2 w-full">
                    <span className="block font-bold text-sm">100 km/mo</span>
                  </div>
                </div>

                <div className="rounded-lg relative flex items-center justify-center border border-black/20">
                  <span className="w-10 h-10 bg-primary text-white rounded-full items-center justify-center flex">
                    <BiPlus className="w-7 h-7" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="px-5 mb-5">
              <span className="text-xl px-2 py-0.5 bg-[#EAEFFE] text-primary rounded-lg">
                Your wishlist
              </span>
              <table className="mt-5 align-middle w-full">
                <tr>
                  <td className="w-20 py-1">
                    <img src={concertImg.src} alt="" className="w-20 rounded" />
                  </td>
                  <td className="px-2">
                    <span className="">Concert</span>
                  </td>
                  <td className="text-right text-sm">50 EUR</td>
                </tr>
              </table>
              <div className="border-black/20 rounded-lg flex items-center justify-center">
                <span className="w-10 h-10 bg-primary text-white rounded-full items-center justify-center flex">
                  <BiPlus className="w-7 h-7" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SocialPage;
