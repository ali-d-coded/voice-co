import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import TakeNotesCard from "@/components/TakeNotesCard";
import { Spotlight } from "@/components/ui/spotlight-new";
import UtilityButtonGroup from "@/components/UtilityButtonGroup";
import Image from "next/image";


const notes = [
  {
    id: 1,
    title: "Summery of loin nilambur vanam",
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    datetime: "2025-05-13T14:32:00Z",
    voice: "voice"
  },
  {
    id: 2,
    title: "Meeting notes with design team",
    note: "Discussed new UI components and design system updates. Team provided feedback on latest mockups. Action items include updating color palette and typography guidelines. Follow up meeting scheduled for next week.",
    datetime: "2025-05-14T10:00:00Z",
    voice: "voice"
  },
  {
    id: 3,
    title: "Project requirements review",
    note: "Reviewed technical requirements for upcoming sprint. Identified potential bottlenecks and dependencies. Need to clarify API specifications with backend team. Timeline estimates need to be adjusted.",
    datetime: "2025-05-14T15:45:00Z",
    voice: "voice"
  },
  {
    id: 4,
    title: "Client presentation feedback",
    note: "Client was impressed with initial prototype. Requested minor adjustments to navigation flow and loading states. Overall positive response to proposed solutions. Implementation to begin next sprint.",
    datetime: "2025-05-15T09:30:00Z",
    voice: "voice"
  },
  {
    id: 5,
    title: "Bug triage session",
    note: "Prioritized critical issues affecting production environment. Assigned developers to high-priority fixes. Created timeline for resolving remaining backlog items. QA team to verify fixes by end of week.",
    datetime: "2025-05-15T13:15:00Z",
    voice: "voice"
  }
]

export default function Home() {
  return (
   <div className="overflow-x-hidden h-fit relative">
   {/* <Spotlight intensity={0.3} size={1000} pulseSpeed={10}/> */}
   <h1 className="text-center font-serif text-4xl px-1 sm:text-[43px] text-transparent bg-clip-text bg-[radial-gradient(circle,rgba(236,236,238,1)_67%,rgba(255,255,255,0.07)_100%)]">
    Voice Notes to Smart Text.
  </h1>

      <h2 className="text-white text-center sm:text-lg font-inter font-[100] leading-9 tracking-wider"> 
      Record, transcribe, and summarize in seconds.
      </h2>
      <section 
      className=" mt-10 backdrop-blur-2xl sm:bg-white/[0.001] rounded-xl sm:border sm:border-white/5 px-2  sm:p-6 min-h-[calc(100vh-120px)] text-white shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/[0.01] transition-all duration-300 "
      >
        {/* Content here */}
        <SearchBar />
        <UtilityButtonGroup />

        <div className="overflow-y-scroll max-h-[550px]">
          {
            notes.map(note => (
              <Card key={note.id} title={note.title} note={note.note} datetime={note.datetime} voice={note.voice} />
            ))
          }
        </div>
      </section>

      <TakeNotesCard />
   </div>
  );
}
