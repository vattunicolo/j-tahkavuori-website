import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Aitio 417 · J. Tähkävuori Oy', description: 'Koe TPS:n kotiottelut omasta aitiosta Gatorade Centerissä. Aitio 417, 10 ottelulippua. Varaukset: Juhani Tähkävuori.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fi"><body>{children}</body></html>; }
