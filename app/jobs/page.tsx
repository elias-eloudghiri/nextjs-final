import JobList from "@/components/layout/JobList";
import MainTitle from "@/components/ui/MainTitle";
import { createClient } from "@/prismicio";

export default async function jobsList() {
  const client = createClient();
  const jobs = await client.getAllByType("job");

  return (
    <main>
      <div className="pl-30 pr-30 pt-10">
        <MainTitle content="Offres d'emploi" countOffre={jobs.length} />
        <JobList jobs={jobs} />
      </div>
    </main>
  );
}
