import Image from "next/image";

export default function Wallpaper() {
  return <Image className="size-full" src={"/homePageWallpaper.svg"} alt="wallpaper" width={100} height={100} />;
}
