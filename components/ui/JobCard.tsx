import { Job } from "@/types/job";
import Image from "next/image";

type JobCardType = {
  job: {
    uid: string;
    data: Job;
  }
};

export default function JobCard({ job }: JobCardType) {
  return (
    <div className="job-card w-70">
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
        <Image src={"/bracketBlue.svg"} alt="bracket" width={20} height={20} />
        <p>{job.data.techno}</p>
      </div>
      <div>
        <p>{job.data.description_card}</p>
      </div>
    </div>
  );
}
