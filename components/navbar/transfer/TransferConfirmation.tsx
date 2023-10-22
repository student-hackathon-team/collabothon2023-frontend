import { useRouter } from "next/router";

type Props = {
  setShowResult: (arg: boolean) => void;
  setAskToConfirm: (arg: boolean) => void;
};

const TransferConfirmation: React.FC<Props> = (props) => {
  const router = useRouter();

  return (
    <div className="max-w-sm mx-auto inset-0 font-primary text-dark h-full w-full p-5 absolute top-0 z-50  bg-dark bg-opacity-20">
      <div className="w-full text-6xl text-center font-extrabold h-fit text-secondary opacity-70 rounded-xl p-4 mb-6">
        Summary
      </div>
      <div className="h-fit w-full  rounded-xl bg-light">
        <div className="w-full text-center text-2xl h-fit bg-primary bg-opacity-70 rounded-t-xl pt-4  ">
          Transfered amount
        </div>
        <div className="text-center pt-4 pb-2 text-4xl">35$</div>
        <div className="mt-2 text-2xl text-center flex flex-row px-4 pb-5 pt-3 border-t-2 border-black">
          <div>Your Balance After:</div>
          <div className="text-purple px-2 text-3xl font-bold ">1337$</div>
        </div>
      </div>
      <div className="h-fit w-full  rounded-xl bg-light pb-2">
        <div className="w-full text-center text-2xl h-fit bg-primary bg-opacity-70 rounded-t-xl p-4 mt-6 ">
          Receiver
        </div>
        <div className="text-center p-4 text-4xl">Adrian Kieraga</div>
        <div className="mx-auto rounded-xl bg-accent opacity-70 border-2 border-accent px-5 py-2 w-fit h-fit text-white">
          @kieadik
        </div>
      </div>
      <div className="fixed bottom-20 left-0 w-full max-w-sm">
        <div className="mx-auto w-fit flex flex-row gap-4">
          <button
            className="rounded-xl p-3 text-white bg-accent text-bold text-3xl"
            onClick={() => {
              router.push("/");
            }}
          >
            Reject
          </button>
          <button
            className="rounded-xl p-3 text-white bg-purple text-bold text-3xl"
            onClick={() => {
              props.setAskToConfirm(false);
              props.setShowResult(true);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferConfirmation;
