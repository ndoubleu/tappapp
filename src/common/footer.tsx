import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="fixed bottom-2 flex flex-col items-center w-full">
      <div className="grid grid-cols-5 grid-rows-[1fr] bg-block rounded-[24px] border border-blockActive p-[4px] gap-[4px]">
        <Link href="/"
          className={`flex flex-col items-center rounded-[21px] cursor-pointer hover:bg-blockActive p-4 focus:bg-blockActive aspect-square ${
            currentPath === '/farm' || currentPath === '/' ? 'bg-blockActive' : ''
          }`}
        >
          <span className="text-xl">🌽</span>
          <span className="text-base">Farm</span>
        </Link>
        <Link href="/team"
          className={`flex flex-col items-center rounded-[21px] cursor-pointer hover:bg-blockActive p-4 focus:bg-blockActive aspect-square ${
            currentPath === '/team' ? 'bg-blockActive' : ''
          }`}
        >
          <span className="text-xl">👥</span>
          <span className="text-base">Team</span>
        </Link>
        <Link href="tap"
          className={`flex flex-col items-center rounded-[21px] cursor-pointer hover:bg-blockActive p-4 focus:bg-blockActive aspect-square ${
            currentPath === '/tap' ? 'bg-blockActive' : ''
          }`}
        >
          <span className="text-xl">👆</span>
          <span className="text-base">Tap</span>
        </Link>
        <Link href="earn"
          className={`flex flex-col items-center rounded-[21px] cursor-pointer hover:bg-blockActive p-4 focus:bg-blockActive aspect-square ${
            currentPath === '/earn' ? 'bg-blockActive' : ''
          }`}
        >
          <span className="text-xl">💰</span>
          <span className="text-base">Earn</span>
        </Link>
        <Link href="top"
          className={`flex flex-col items-center rounded-[21px] cursor-pointer hover:bg-blockActive p-4 focus:bg-blockActive aspect-square ${
            currentPath === '/top' ? 'bg-blockActive' : ''
          }`}
        >
          <span className="text-xl">🏅</span>
          <span className="text-base">Top</span>
        </Link>
      </div>
    </div>
  );
}
