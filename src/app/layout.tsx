import localFont from 'next/font/local'
import "./app.css"


import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from '@/Components/Header';
import ViewCanvas from '@/Components/viewcanvas';

const alpino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  display: 'swap',
  weight: "100 900",
  variable:"--font-alpino"
})
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className='bg-yellow-300'>
        <Header/>
        <main>

        {children}
        <ViewCanvas/>
        </main>
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
