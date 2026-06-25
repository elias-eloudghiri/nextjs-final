import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <Link href={"/"}>
      <Image src="/loginWhite.svg" alt="logo" width="20" height="24"></Image>
    </Link>
  );
}
