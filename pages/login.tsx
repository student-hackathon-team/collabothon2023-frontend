import { NextPage } from "next";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/");
  };

  return (
    <div className="bg-blue-400 h-screen pt-40">
      <div className="w-full flex">
        <button
          type="button"
          className="bg-blue-100 active:bg-blue-300 transition-all shadow-2xl active:shadow-none text-2xl text-center w-fit rounded-xl mx-auto h-fit py-4 px-6"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
