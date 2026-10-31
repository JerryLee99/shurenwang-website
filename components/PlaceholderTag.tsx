export function PlaceholderTag({ children }: { children?: React.ReactNode }) {
  return (
    <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
      <span className="rounded-full border border-dashed border-clay/50 px-2 py-0.5 text-xs font-medium text-clay">
        占位
      </span>
      {children ? <span>{children}</span> : null}
    </p>
  );
}
