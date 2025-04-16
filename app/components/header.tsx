'use client';

import { CDN_URL } from '@/config/constants';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between px-[0.75rem] h-20">
      <div className="flex gap-[0.75rem] items-center">
        <i className="pi pi-bars text-3xl p-2 cursor-pointer" />

        <img
          className="max-w-28 max-h-12 cursor-pointer hover:scale-110"
          src={`${CDN_URL}/Logos/6_e5755172-cdc3-4e2a-8b6f-47cd874eed97.png`}
          alt="logo"
        />
      </div>
      <div className="flex gap-2 items-center">
        <span className="h-10 w-10 flex items-center justify-center round-full">
          <i className="pi pi-user text-lg  cursor-pointer"></i>
        </span>
        <Link
          href="/cart"
          className="flex items-center justify-center rounded-full h-10 w-10 bg-[#f3f3f3b3]"
        >
          <i className="pi pi-shopping-bag text-lg cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
