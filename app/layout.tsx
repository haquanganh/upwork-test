import type { Metadata } from 'next';
import { Almarai } from 'next/font/google';
import { ShopContext } from '@/contexts/shop-context';
import { fetchShopInfo } from './api/app';
import { ShopInfo } from '@/types/app';
import './globals.css';
import Header from './components/header';
import Search from './components/search';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from './components/footer';
import BottomBar from './components/bottom-bar';
config.autoAddCss = false;

const almarai = Almarai({ weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'ezone',
  description: 'متجر الكتروني مختص بمنتجات الهواتف وكماليته',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shopInfoRes = await fetchShopInfo();
  const shopInfo = (await shopInfoRes.json()).Data as ShopInfo;
  return (
    <html lang="ar">
      <body className={`${almarai.className} antialiased`}>
        <ShopContext initialData={shopInfo}>
          <div className="bg-white">
            <div className="border-b-1 border-[#dbdbdb]">
              <div className="py-[.3rem] px-[1.4rem] bg-[#272a2a]">
                <p className="h-[1.6rem] text-white text-center text-sm"></p>
              </div>
              <Header />
              <Search />
            </div>
          </div>
          {children}
          <Footer />
          <BottomBar />
        </ShopContext>
      </body>
    </html>
  );
}
