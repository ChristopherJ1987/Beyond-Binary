import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl hover:text-cyan-300 transition-colors drop-shadow-lg">
          Beyond Binary
        </Link>
        <div className="hidden md:flex space-x-6 text-white/80 drop-shadow-lg">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/records" className="hover:text-white transition-colors">Records</Link>
        </div>
      </div>
    </nav>
  );
}
