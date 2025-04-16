'use client';

import { ShopInfo } from '@/types/app';
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext<{
  shopInfo: ShopInfo | null;
}>({ shopInfo: null });

export const ShopContext = ({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData: ShopInfo | null;
}) => {
  const [data] = useState<ShopInfo | null>(initialData);

  return (
    <GlobalContext.Provider value={{ shopInfo: data }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
