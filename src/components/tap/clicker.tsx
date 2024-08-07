import Tap from '@images/tap.png';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
export const defaultOptions = {
  reverse: false,
  max: 35,
  startX: 0,
  startY: 0,
  perspective: 1000,
  scale: 1,
  speed: 300,
  transition: true,
  axis: false,
  reset: false,
  "reset-to-start": true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  glare: false,
  "max-glare": 1,
  "glare-prerender": false,
  "mouse-event-element": null,
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
  gyroscopeMinAngleY: -45,
  gyroscopeMaxAngleY: 45,
};
type ClickerComponentProps = {
  count: number,
  setCount: (count: number)=>void;
  setDrawerOpen: (isOpen: boolean)=>void;
};

export default function ClickerComponent({count, setCount, setDrawerOpen}: ClickerComponentProps) {

  return (
    <div className='relative w-full h-full flex flex-col justify-between'>
      <div className='absolute inset-0 m-auto flex flex-col justify-center items-center'>
        <div className='relative'>
          <Tilt options={defaultOptions}>
           <Image src={Tap} alt="Tap" className='cursor-pointer z-1' onClick={()=>{setCount(count+1)}}/>
          </Tilt>
        </div>
      </div>
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
        <div className='flex flex-nowrap gap-2 justify-between items-center text-xl bg-black p-2 bg-opacity-25 rounded-[10px] cursor-pointer z-2 relative' onClick={()=>{setDrawerOpen(true)}}>
          <span>🚀</span>
          <span>Boost</span>
        </div>      
      </div>
    </div>
  );
}
