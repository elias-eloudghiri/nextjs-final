"use client";
import { JobDocument } from "@/prismicio-types";
import { pinStore } from "@/store/pinStore";
import { Job } from "@/types/job";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { MouseEvent as ReactMouseEvent } from "react";

type JobCardType = {
  job: JobDocument;
};

export default function JobCard({ job }: JobCardType) {
  const { jobs, addPinJob, removePinJob } = pinStore();
  const pinOrUnPinJob = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (jobs.some((j) => j.uid === job.uid)) removePinJob(job);
    else addPinJob(job);
  };

  return (
    <a href={"/job/" + job.uid}>
      <div className="job-card">
        <div className="flex justify-between">
          <label>{job.data.title}</label>
          <button onClick={pinOrUnPinJob}>
            <Image
              src={
                jobs.some((j) => j.uid === job.uid)
                  ? "/bookmark.svg"
                  : "/save.svg"
              }
              alt="bookmark"
              width={20}
              height={20}
            />
          </button>
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
