import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Image from "next/image";
import MainTitle from "@/components/ui/MainTitle";
import RedirectButton from "@/components/ui/RedirectButton";

export default async function Page({ params }: PageProps<"/job/[uid]">) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("job", uid);

  return (
    <main>
      <div className="pl-15 pr-15 pt-10">
        <RedirectButton
          content="< Voir toutes les offres"
          redirectUrl="/jobs"
        />
        <MainTitle content={page.data.title} countOffre={0} />
        <div className="flex">
          <Image src={"/calendarBlue.svg"} alt="calendar" width={10} height={10} />
          <p>{page.data.date}</p>
        </div>
        <div>
          <p>{page.data.techno}</p>
        </div>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </main>
  );
}
