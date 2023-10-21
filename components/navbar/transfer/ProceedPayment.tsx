type props = {};

const ProceedPayment: React.FC<props> = (props) => {
  return (
    <div className="bg-white max-w-sm mx-auto p-5">
      <div className="w-full border-2 h-screen bg-blue-400 bg-opacity-70 rounded-xl border-black p-4">
        <div className="pt-2 text-3xl text-center text-white">Enter amount</div>
        <input
          className="w-10 rounded-xl bg-slate-100 mx-auto w-full"
          type="text"
        ></input>
      </div>
    </div>
  );
};

export default ProceedPayment;
