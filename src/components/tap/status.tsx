import React from 'react';
import Plus from '@/assets/icons/plus';
import Image from 'next/image';
import tCurrency from '@images/tCurrency.png';
import Link from 'next/link';

interface StatusComponentProps {
  withButton?: boolean;
}

const StatusComponent: React.FC<StatusComponentProps> = ({ withButton }) => {
  const content = (
    <Link href="/withdraw" className='flex flex-nowrap justify-center bg-primary text-secondary items-center p-2 rounded-[21.5px] cursor-pointer w-[118px] h-[40px] gap-2'>
      <Plus />
      <span>Withdraw</span>
    </Link>
  );

  return (
    <div className="flex flex-nowrap justify-between rounded-[12px] bg-block border border-blockActive p-4 text-sm w-full relative z-10">
      <div className='flex flex-nowrap gap-2 items-center'>
        <Image src={tCurrency} alt="Currency" className='my-auto' draggable={false} />
        <span>15.72 GPU</span>
      </div>
      {
        withButton &&
        <Link href="/withdraw" className='flex flex-nowrap justify-center bg-primary text-secondary items-center p-2 rounded-[21.5px] cursor-pointer w-[118px] h-[40px] gap-2'>
          <Plus />
          <span>Withdraw</span>
        </Link>
      }
    </div>
  );
};

export default StatusComponent;
