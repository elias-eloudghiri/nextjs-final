import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src="/LogoDevWhite.svg" alt="logo" width="90" height="24"></Image>
    </Link>
  );
}
