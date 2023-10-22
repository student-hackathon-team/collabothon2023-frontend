import { useRouter } from "next/router";

type Props = {};

const TransferResult: React.FC<Props> = (props) => {
  const router = useRouter();

  return (
    <div className="max-w-sm mx-auto inset-0 font-primary text-dark h-full w-full p-5 absolute top-0 z-50  bg-dark bg-opacity-20">
      <div className="h-fit w-full  rounded-xl bg-light">
        <div className="w-full text-center text-2xl h-fit bg-primary bg-opacity-70 rounded-t-xl p-4 mt-24 ">
          Transfer status
        </div>
        <div className="text-center p-6 text-4xl text-purple">SUCCESS</div>
      </div>
      <div className="fixed bottom-20 left-0 w-full max-w-sm">
        <div className="mx-auto w-fit">
          <button
            className="rounded-xl p-3 text-white bg-purple text-bold text-4xl"
            onClick={() => {
              router.push("/");
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferResult;
