import JobList from "@/components/layout/JobList";
import MainTitle from "@/components/ui/MainTitle";
import RedirectButton from "@/components/ui/RedirectButton";
import Wallpaper from "@/components/ui/Wallpaper";
import { createClient } from "@/prismicio";
import { Job } from "@/types/job";

export default async function Home() {
  const client = createClient();
  const jobs = (await client.getAllByType("job")).splice(0, 6);

  return (
    <main>
      <Wallpaper />
      <div className="pl-30 pr-30 pt-10">
        <MainTitle content="Nos dernières opportunités" countOffre={0} />
        <JobList jobs={jobs} />
        <div className="flex justify-center pt-5 pb-3">
          <RedirectButton content="Voir toutes les offres" redirectUrl="/jobs" />
        </div>
      </div>
    </main>
  );
}
