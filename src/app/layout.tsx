import type { Metadata } from "next";
import '@/styles/globals.css'
import localFont from 'next/font/local'

const IranYekan = localFont({
  src: [
    {
      path: '../../public/fonts/iranyekan/iranyekanwebregular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/iranyekan/iranyekanwebbold.woff2',
      weight: '600',
      style: 'normal'
    },
  ]
})

export const metadata: Metadata = {
  title: "جنوب ایران",
  description: "معرفی شهر های جنوب",
  authors: [{ name: 'Omid Gharavi', url: 'https://github.com/omid-gharavi' }],
  creator: 'Omid Gharavi',
  publisher: 'Omid Gharavi',
  keywords: ['جنوب ایران', 'معرفی شهر های جنوب', 'معرفی شهر های جنوبی ایران', 'جنوب ایران', 'سفر به جنوب ایران', 'سفر به جنوب', 'سفر به جنوب کشور', 'سفر به جنوب کشور ایران', 'سفر به جنوب کشور ایران', 'سفر به جنوب کشور ایران', 'سفر به جنوب کشور ایران', 'سفر به جنوب کشور ایران', 'سفر به جنوب کشور ایران', 'سفر به جنوب کشور ایران', 'سفر به جنوب کشور ایران', 'سفر به جنوب کشور ایران', 'سفر به جنوب کشور ایران'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${IranYekan.className} min-h-dvh antialiased`}
    >
      <body
        className="min-h-dvh flex flex-col relative mx-auto max-w-desktop w-full fade-in">
        {children}
      </body>
    </html>
  );
}
