import { JobDocument } from "@/prismicio-types";
import { Job } from "@/types/job";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type pinType = {
  jobs: JobDocument[];
  addPinJob: (job: JobDocument) => void;
  removePinJob: (job: JobDocument) => void;
};

export const pinStore = create<pinType>()(
  persist(
    (set) => ({
      jobs: [],
      addPinJob: (newJob) =>
        set((state) => ({
          jobs: [...new Set([...state.jobs, newJob])],
        })),
      removePinJob: (removedJob) =>
        set((state) => ({ jobs: state.jobs.filter((j) => j !== removedJob) })),
    }),
    { name: "pinnedJobs" },
  ),
);
