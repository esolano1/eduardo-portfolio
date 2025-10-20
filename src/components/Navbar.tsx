"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-5xl px-6 h-14 flex items-center gap-6">
        <Link href="/" className="font-semibold">Eduardo Solano</Link>
        <div className="ml-auto flex gap-4">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
