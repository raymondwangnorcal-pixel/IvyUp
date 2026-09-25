export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-fg-3 sm:flex-row sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} IvyUp · A Gapless Labs product</p>
        <p>
          IvyUp is not affiliated with or endorsed by any university shown. Logos are trademarks of their owners.
        </p>
      </div>
    </footer>
  );
}
