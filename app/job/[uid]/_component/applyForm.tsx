"use client";

import { JobDocument } from "@/prismicio-types";
import { pinStore } from "@/store/pinStore";

type ApplyFormType = {
  job: JobDocument;
};
export default function ApplyForm({ job }: ApplyFormType) {
  const { addApplication } = pinStore();
  const addAction = (formdata: FormData) => {
    console.log({ formdata });
  };
  return (
    <div>
      <form action={addAction}>
        <input name="message" type="text" className="apply-input" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
