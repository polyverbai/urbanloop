interface PageBackgroundProps {
  children: React.ReactNode;
}

export default function PageBackground({
  children,
}: PageBackgroundProps) {
  return (
    <main
      className="min-h-screen"
      style={{
  background:
    "linear-gradient(to bottom, #d7f6cf 0%, #ebf7df 45%, #f2f7ef 100%)",
}}
    >
      {children}
    </main>
  );
}