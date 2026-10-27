import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="text-lg font-bold">
        MyApp
      </Link>
      <Link href="/plan">Plan</Link>
      <Link href="/opportunities">Opportunities</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
