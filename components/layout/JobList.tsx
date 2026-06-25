import { Job } from "@/types/job";
import JobCard from "../ui/JobCard";
import { JobDocument } from "@/prismicio-types";

type JobListType = {
  jobs: JobDocument[];
};
export default function JobList({ jobs }: JobListType) {
  return (
    <div className="job-list">
      {jobs.map((job, i) => (
        <JobCard key={"job-" + i} job={job} />
      ))}
    </div>
  );
}
