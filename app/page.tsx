import JobList from "@/components/layout/JobList";
import MainTitle from "@/components/ui/MainTitle";
import Wallpaper from "@/components/ui/Wallpaper";

export default function Home() {
  return (
    <main>
      <Wallpaper />
      <div className="pl-30 pr-30 pt-10">
        <MainTitle content="Nos dernières opportunités" />
        <JobList />
      </div>
    </main>
  );
}
