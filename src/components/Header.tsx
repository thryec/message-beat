import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            <Link href="/">MessageBeat</Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Privacy Technologies
            </Link>
            <Link
              href="/methodology"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Methodology
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
