import { KeyTextField } from "@prismicio/client";
import Image from "next/image";

type MainTitle = {
  content: KeyTextField;
  countOffre: number;
};
export default function MainTitle({ content, countOffre = 0 }: MainTitle) {
  return (
    <div className="title-container flex justify-between">
      <h1>{content}</h1>

      {countOffre === 0 ? null : (
        <div>
          <div>
            <Image src={"/work.svg"} alt="work" width={10} height={10} />
          </div>

          <div>
            <label>
              {countOffre}
              {countOffre > 1 ? " offres" : " offre"}
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
