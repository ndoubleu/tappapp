// components/Footer.tsx

import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const nav = [
  {
    icon: '🌽',
    title: 'Farm',
    url: '/'
  },
  {
    icon: '👥',
    title: 'Team',
    url: '/team'
  },
  {
    icon: '👆',
    title: 'Tap',
    url: '/tap'
  },
  {
    icon: '💰',
    title: 'Earn',
    url: '/earn'
  },
  {
    icon: '🏅',
    title: 'Top',
    url: '/top'
  }
];

export default function Footer() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="fixed bottom-2 flex flex-col items-center w-full px-2">
      <div className="grid grid-cols-5 grid-rows-[1fr] bg-block rounded-[24px] border border-blockActive p-[4px] gap-[4px]">
        {nav.map((item) => (
          <Link key={item.title} href={item.url}>
            <div
              className={`flex flex-col items-center rounded-[21px] cursor-pointer hover:bg-blockActive p-4 focus:bg-blockActive aspect-square ${
                currentPath === item.url ? 'bg-blockActive' : ''
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-base">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
