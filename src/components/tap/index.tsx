import tCurrency from '@images/tCurrency.png';
import Tap from '@images/tap.png'
import Image from 'next/image';
import Plus from '@/assets/icons/plus';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
export default function Taps() {
  const [count, setCount] = useState(0);
  return (
    <div className="relative w-full h-full flex flex-col gap-4 items-center">
      <div className="flex flex-nowrap justify-between rounded-[12px] bg-block border border-blockActive p-4 text-sm w-full">
        <div className='flex flex-nowrap gap-2 items-center'>
          <Image src={tCurrency} alt="Currency" className='my-auto'/>
          <span>15.72 GPU</span>
        </div>
        <div className='flex flex-nowrap justify-center bg-primary text-secondary items-center p-2 rounded-[21.5px] cursor-pointer w-[118px] h-[40px] gap-2'>
          <Plus/>
          <span>
            Withdraw
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-[12px] bg-block border border-blockActive p-4 text-sm gap-4 cursor-pointer w-full">
        <div className='flex flex-nowrap justify-between font-bold text-base'>
          <span className=''>Finger Minig Round</span>
          <div className='flex flex-nowrap item-center gap-2'>
            <span>
              56s
            </span>
            <IoIosArrowDown className="my-auto text-bold"/>
          </div>
        </div>
        <div className="h-[8px] w-full bg-blockActive rounded-[13px]">
          <div className="h-full animate-expand bg-primary rounded-[13px]"></div>
        </div>
      </div>
      <div
        className="absolute"
        style={{
          width: '437px',
          height: '437px',
          left: 'calc(50% - 437px/2 + 1px)',
          top: 'calc(50% - 437px/2 + 47.5px)',
          background: 'radial-gradient(50% 50% at 50% 50%, #2FEAB2 0%, rgba(47, 234, 178, 0) 100%)',
          filter: 'blur(125px)'
        }}
      >
      </div>
      <div className='relative w-full h-full flex flex-col justify-between'>
        <Image src={Tap} alt="Tap" className='cursor-pointer absolute inset-0 m-auto z-1' onClick={()=>{setCount(count+1)}}/>
        <div className='flex flex-nowrap justify-center items-center text-4xl font-bold z-2 relative'>
          <span className=''>{count}</span>
          <span>👆</span>
        </div>
        <div className='flex flex-nowrap gap-2 justify-between items-center'>
          <div className='flex flex-nowrap justify-center items-center text-4xl font-bold z-2 relative'>
            <span>⚡</span>
            <div className='flex flex-col items-end text-2xl'>
              <span className=''>100</span>
              <span className='text-sm opacity-60 font-normal'>/100</span>
            </div>
          </div>
          <div className='flex flex-nowrap gap-2 justify-between items-center text-xl bg-black p-2 bg-opacity-25 rounded-[10px] cursor-pointer z-2 relative'>
            <span>🚀</span>
            <span>Boost</span>
          </div>      
        </div>
      </div>
  </div>
  );
}
