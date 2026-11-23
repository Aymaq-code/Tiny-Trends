export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-primary">
      <span className="h-px w-10 bg-primary" />
      {children}
    </p>
  );
}
