import Image from "next/image";
import Banner from "./components/Banner";

export default function Home() {
  return (
   <>
       <div className="bg-[#F8FAFC] mx-auto container">
        {/* banner */}
      <div className="">
        <Banner></Banner>
      </div>

       </div>
   </>
  );
}
