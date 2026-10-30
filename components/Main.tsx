export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main id="main" tabIndex={-1} className="flex-1 scroll-mt-24">
      {children}
    </main>
  );
}
