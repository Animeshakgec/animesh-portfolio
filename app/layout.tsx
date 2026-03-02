import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Animesh Agarwal - Software Developer',
  description: 'Portfolio of Animesh Agarwal - Software Developer specializing in full-stack development with React, Node.js, and modern web technologies.',
  keywords: ['Software Developer', 'Full Stack Developer', 'React', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Animesh Agarwal' }],
  openGraph: {
    title: 'Animesh Agarwal - Software Developer',
    description: 'Portfolio of Animesh Agarwal - Software Developer',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
