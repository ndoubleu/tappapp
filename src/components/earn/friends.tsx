
import tCurrency from '@images/tCurrency.png';
import Image from 'next/image';
import Copy from '@/assets/icons/copy';
export default function Friends () {
  return (
    <>
    <div className="grid grid-cols-6 grid-rows-2 w-full bg-block p-4 rounded-[24px] gap-2">
        <div className="col-span-3 flex flex-nowrap text-2xl font-bold gap-2">
            <Image src={tCurrency} alt="currency" className='my-auto'/>
            <span>+200 GPU</span>
        </div>
        <div className="col-start-4 text-2xl font-bold opacity-40 text-center">+</div>
        <div className="col-span-2 col-start-5 font-bold text-2xl">
            <span>👷5%</span>
        </div>
        <div className="col-span-3 row-start-2 text-sm font-bold opacity-60">From every new user who make 10k GPU</div>
        <div className="col-span-2 col-start-5 row-start-2 text-sm font-bold opacity-60">For every income</div>
    </div>
    <div className='min-h-[63px] h-[63px] w-full flex flex-nowrap justify-center items-center text-xl font-bold bg-primary rounded-[14px] text-secondary gap-2 cursor-pointer mb-4'>
        <Copy/>
        <span>Copy link</span>
    </div>
    <div className='flex flex-col gap-2 w-full h-full'>
        <span className='font-bold text-2xl px-4'>0 referrals</span>
        <div className='flex flex-nowrap px-4 gap-2'>
            <Image src={tCurrency} alt="currency" className='my-auto' width={30} height={30}/>
            <span className='text-base font-medium'>0 GPU</span>
            <span className='text=base font-medium opacity-50'>total earned</span>
        </div>
        <div className='w-full h-full bg-block rounded-[24px]'>

        </div>
    </div>
    </>
  );
};