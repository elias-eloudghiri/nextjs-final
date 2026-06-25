import { Job } from "@/types/job";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";

type JobCardType = {
  job: {
    uid: string;
    data: Job;
  };
};

export default function JobCard({ job }: JobCardType) {
  return (
    <a href={"/job/" + job.uid}>
      <div className="job-card">
        <div className="flex justify-between">
          <label>{job.data.title}</label>
          <Image src={"/save.svg"} alt="bookmark" width={20} height={20} />
        </div>
        <div className="flex">
          <Image
            src={"/calendarBlue.svg"}
            alt="calendar"
            width={20}
            height={20}
          />
          <p>{job.data.date}</p>
        </div>
        <div className="flex">
          <Image
            src={"/bracketBlue.svg"}
            alt="bracket"
            width={20}
            height={20}
          />
          <p>{job.data.techno}</p>
        </div>
        <div>
          <p>{job.data.description_card}</p>
        </div>
      </div>
    </a>
  );
}
