import JobList from "@/components/layout/JobList";
import MainTitle from "@/components/ui/MainTitle";
import Wallpaper from "@/components/ui/Wallpaper";
import { createClient } from "@/prismicio";
import { Job } from "@/types/job";

export default async function Home() {
  const client = createClient();
  const jobs = await client.getAllByType("job");
  jobs.forEach((job) => {
    console.log({ job });
  });

  return (
    <main>
      <Wallpaper />
      <div className="pl-30 pr-30 pt-10">
        <MainTitle content="Nos dernières opportunités" />
        <JobList jobs={jobs} />
      </div>
    </main>
  );
}
