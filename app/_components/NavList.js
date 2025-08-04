import Link from "next/link";

function NavList({ direction = "flex-row", login = "true" }) {
  console.log(login);
  return (
    <ul className={`flex  ${direction} justify-between  gap-8   `}>
      <li className="hover:text-emerald-950 hover:font-bold transition-all">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:text-emerald-950 hover:font-bold transition-all">
        <Link href="/about">About</Link>
      </li>
      <li className="hover:text-emerald-950 hover:font-bold transition-all">
        <Link href="/public">Public Notes</Link>
      </li>
      <li className="hover:text-emerald-950 hover:font-bold transition-all">
        <Link href="/public">Your insights</Link>
      </li>
      {login && (
        <li className="ml-auto hover:text-emerald-950 hover:font-bold transition-all">
          <Link href="/login">Login</Link>
        </li>
      )}
    </ul>
  );
}

export default NavList;
