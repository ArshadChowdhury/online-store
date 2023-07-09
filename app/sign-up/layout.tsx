export default function SignupLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-h-screen max-w-7xl mx-auto">{children}</section>
  );
}
