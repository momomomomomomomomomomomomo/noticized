import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex gap-3 items-center max-w-fit ">
      <Image
        src="/logo.png"
        width={50}
        height={50}
        alt="Website notebook Logo"
        className=""
      />
      <p className="text-emerald-950 text-xl">Noticized</p>
    </Link>
  );
}

export default Logo;
