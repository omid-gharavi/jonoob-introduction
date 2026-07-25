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
  icons: '/favicon.ico'
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
        className="min-h-dvh flex flex-col pt-8 px-48 max-lg:px-6 relative mx-auto max-w-desktop w-full">
        {children}
      </body>
    </html>
  );
}
