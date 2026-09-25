import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          Ivy<span className="text-accent">Up</span>
        </Link>
        <nav className="flex items-center gap-2 text-sm font-semibold">
          <a href="#how" className="hidden rounded-full px-4 py-2 text-fg-2 hover:bg-surface-2 hover:text-fg sm:block">
            How it works
          </a>
          <Link href="/survey" className="rounded-full border border-line px-4 py-2 hover:bg-surface-2">
            Start survey
          </Link>
        </nav>
      </div>
    </header>
  );
}
