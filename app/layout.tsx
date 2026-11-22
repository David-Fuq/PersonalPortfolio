// Pass-through root layout: <html> and <body> are rendered by app/[locale]/layout.tsx,
// which knows the active locale. Rendering them here too nests <html> inside <body>.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
