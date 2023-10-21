import { NextPage } from "next";
import Navbar from "../components/navbar/Navbar";

const additional: NextPage = () => {
  return (
    <div className="max-w-sm mx-auto border-2 h-screen border-black">
      Additonal
      <Navbar />
    </div>
  );
};

export default additional;
