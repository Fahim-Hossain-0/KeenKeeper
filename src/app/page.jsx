import Banner from "@/components/Banner";
import UserCard from "@/components/UserCard";


export default function Home() {
  return (
   <>
       <div className="  bg-[#F8FAFC]">
        {/* banner */}
      <div className="mx-auto container">
        <Banner></Banner>
      </div>
      <div className="mx-auto container">
        <UserCard></UserCard>
      </div>

       </div>
   </>
  );
}
