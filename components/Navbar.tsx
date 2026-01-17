import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">
          Stress Budgeting
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link className="hover:underline" href="/log">
            Log
          </Link>
          <Link className="hover:underline" href="/week">
            Week
          </Link>
        </nav>
      </div>
    </header>
  );
}
