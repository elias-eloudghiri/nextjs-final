import { Job } from "@/types/job";
import { create } from "zustand";

type pinType = {
  jobs: Job[];
  addPinJob: (job: Job) => void;
  removePinJob: (job: Job) => void;
};

const pinStore = create<pinType>((set) => ({
  jobs: [],
  addPinJob: (newJob) =>
    set((state) => ({
      jobs: [...new Set([...state.jobs, newJob])],
    })),
  removePinJob: (removedJob) =>
    set((state) => ({ jobs: state.jobs.filter((j) => j !== removedJob) })),
}));
