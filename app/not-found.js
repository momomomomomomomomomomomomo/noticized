import Link from "next/link";

import Image from "next/image";

function Page() {
  return (
    <div className="w-screen h-screen flex items-center justify-center  gap-3 bg-emerald-50">
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="Website notebook Logo"
        className=""
      />
      <p className=" text-xl text-emerald-700">
        This Page could not be found <span className="font-extrabold">:\</span>{" "}
        <Link
          href="/"
          className="text-emerald-800 hover:text-emerald-950 hover:border-b-2 border-emerald-950 font-semibold transition-all "
        >
          go back to the Home Page
        </Link>
      </p>
    </div>
  );
}

export default Page;
