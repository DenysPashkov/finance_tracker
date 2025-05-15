export function CellContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0.05)",
      }}
    >
      {children}
    </div>
  );
}
