type Props = { hide: () => void };

const FriendsList: React.FC<Props> = (props) => {
  return (
    <div className="max-w-sm mx-auto font-primary h-screen w-full  pb-30 absolute top-0 z-40  bg-black bg-opacity-20 text-white">
      <div className="  backdrop-blur-md h-screen p-5 ">
        <div className="w-full bg-dark h-full animate-expandList">
          <div className="mx-auto w-fit">
            <button
              className="bg-primary rounded-xl py-2 px-8 text-2xl"
              onClick={props.hide}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
