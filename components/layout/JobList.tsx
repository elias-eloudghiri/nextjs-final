import Image from "next/image";

export default function JobList() {
  return (
    <div className="job-list">
      <div className="job-card w-70">
        <div className="flex justify-between">
          <label>Titre job</label>
          <Image src={"/save.svg"} alt="bookmark" width={20} height={20} />
        </div>
        <div className="flex">
          <Image
            src={"/calendarBlue.svg"}
            alt="calendar"
            width={20}
            height={20}
          />
          <p>date</p>
        </div>
        <div className="flex">
          <Image
            src={"/bracketBlue.svg"}
            alt="bracket"
            width={20}
            height={20}
          />
          <p>Techno 1, Techno 2</p>
        </div>
        <div>
          <p>Description du job</p>
        </div>
      </div>
    </div>
  );
}
