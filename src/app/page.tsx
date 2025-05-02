import SearchBar from "@/components/SearchBar";
import { Spotlight } from "@/components/ui/spotlight-new";
import UtilityButtonGroup from "@/components/UtilityButtonGroup";
import Image from "next/image";

export default function Home() {
  return (
   <div className="overflow-x-hidden h-full">
   {/* <Spotlight intensity={0.3} size={1000} pulseSpeed={10}/> */}
   <h1 className="text-center font-serif text-[43px] text-transparent bg-clip-text bg-[radial-gradient(circle,rgba(236,236,238,1)_67%,rgba(255,255,255,0.07)_100%)]">
    Voice Notes to Smart Text.
  </h1>

      <h2 className="text-center text-lg font-inter font-[100] leading-9 tracking-wider"> 
      Record, transcribe, and summarize in seconds.
      </h2>
      <section className="mt-[50px] w-full h-full rounded-4xl bg-white/1 backdrop-blur-md border border-[#FFFFFF]/10 shadow-lg p-5">
        {/* Content here */}
        <SearchBar />
        <UtilityButtonGroup />
      </section>
   </div>
  );
}
