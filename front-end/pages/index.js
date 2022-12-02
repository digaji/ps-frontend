import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        This is homepage
      </div>
    </>
  );
}
