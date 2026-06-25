import { JobDocument } from "@/prismicio-types";
import { ApplyForm } from "@/types/applyForm";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type pinType = {
  jobs: JobDocument[];
  addPinJob: (job: JobDocument) => void;
  removePinJob: (job: JobDocument) => void;
  appliedForms: ApplyForm[];
  addApplication: (message: string, job: JobDocument) => void;
};

export const pinStore = create<pinType>()(
  persist(
    (set) => ({
      jobs: [],
      appliedForms: [],
      addPinJob: (newJob) =>
        set((state) => ({
          jobs: [...new Set([...state.jobs, newJob])],
        })),
      removePinJob: (removedJob) =>
        set((state) => ({ jobs: state.jobs.filter((j) => j !== removedJob) })),
      addApplication: (message, job) =>
        set((state) => ({
          appliedForms: [...new Set([...state.appliedForms, { message, job }])],
        })),
    }),
    { name: "pinnedJobs" },
  ),
);
