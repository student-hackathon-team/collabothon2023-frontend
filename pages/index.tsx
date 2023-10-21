import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";

const Start: NextPage = () => {
  return (
    <div className="max-w-sm mx-auto border-2 h-screen border-black">
      Landing
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Start;
