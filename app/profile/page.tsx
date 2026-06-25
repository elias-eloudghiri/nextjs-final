"use client";
import MainTitle from "@/components/ui/MainTitle";
import SecondaryTitle from "./_component/secondaryTitle";
import { pinStore } from "@/store/pinStore";
import JobList from "@/components/layout/JobList";

export default function profile() {
  const { jobs, addPinJob, removePinJob } = pinStore();
  return (
    <main>
      <div className="pl-15 pr-15 pt-10">
        <MainTitle content="Bienvenue" countOffre={0} />
        <SecondaryTitle content="Offres enregistrées" />
        <JobList jobs={jobs} />
        <SecondaryTitle content="Historique des candidatures" />
      </div>
    </main>
  );
}
