import { useState } from "react";
import FriendsList from "./FriendsList";

type props = {
  setrecording: (arg: boolean) => void;
  setAskToConfirm: (arg: boolean) => void;
};

const ProceedPayment: React.FC<props> = (props) => {
  const [showFriends, setShowFriends] = useState<boolean>(false);

  return (
    <div className="max-w-sm mx-auto font-primary text-dark  pb-30 absolute top-0 z-20  bg-black bg-opacity-20">
      <div className="  backdrop-blur-md h-screen p-5 ">
        <div className="animate-riseModal">
          <div className="w-full text-6xl text-center font-extrabold h-fit text-primary opacity-70 rounded-xl p-4 mb-6">
            Payment
          </div>
          <div className="w-full border-2 h-fit bg-secondary bg-opacity-70 rounded-xl p-4  ">
            <div className="pt-2 text-3xl text-center">Enter amount</div>
            <input
              className="h-10 mt-4 rounded-xl bg-slate-100 mx-auto w-full p-3 text-2xl"
              type="text"
            ></input>
            <div className="mt-2 text-2xl text-center flex flex-row ">
              <div>Your Balance After:</div>
              <div className="text-white px-2 text-3xl font-bold ">1337</div>
            </div>
            <div className="mt-2 text-2xl text-center flex flex-row  border-t-2 pt-4">
              <div>Your mama's restriction:</div>
              <div className="text-white px-2 text-3xl font-bold pt-6">
                SLAY
              </div>
            </div>
          </div>
          <div className="w-full border-2 h-fit bg-secondary bg-opacity-70 rounded-xl p-4  mt-10">
            <div className="pt-2 text-3xl text-center">Choose friend</div>
            <div className="mx-auto w-fit">
              <button
                className="bg-purple rounded-xl w-40 h-12 mt-6"
                onClick={() => {
                  setShowFriends(true);
                }}
              >
                Show List
              </button>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 tex-center text-2xl text-white  mt-24 gap-4">
            <button
              className="rounded-xl p-2 bg-primary"
              onClick={() => {
                props.setrecording(true);
              }}
            >
              Cancel
            </button>
            <button
              className="rounded-xl p-2 bg-primary"
              onClick={() => {
                props.setAskToConfirm(true);
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
      {showFriends && (
        <FriendsList
          hide={() => {
            setShowFriends(false);
          }}
        />
      )}
    </div>
  );
};

export default ProceedPayment;
