import Image from "next/image";
import Header from "./compornents/Header";
import Footer from "./compornents/Footer";
import SideBar from "./compornents/SideBar";
import Main from "./compornents/Main";

export default function Home() {
  return (
    <div className={`test`}>
      <Header />
      <div className={`flex`}>
        <SideBar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
