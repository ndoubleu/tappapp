import Hashrate from '@/assets/icons/hashrate';
import CustomButton from '../button';

export default function GPUComponent () {
  return (
    <div className='flex flex-col gap-4 w-full items-center'>
     <div className='w-full bg-red-gradient rounded-[24px] flex flex-nowrap gap-2 justify-between items-center mb-2 p-4 mb-4'>
      <div className='flex flex-col gap-2'>
        <span className='text-sm'>Your total hashrate</span>
        <span className='font-bold text-3xl'>
          0.00 Gh/s
        </span>
      </div>
      <div className='flex flex-col justify-center items-center h-full gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-[12px]'>
        <Hashrate/>
        <span className='text-sm'>195416th</span>
      </div>
     </div>
     <span className='text-xl'>Buy GPUs</span>
     <span className='text-sm opacity-40'>You need some GPUs to start minig</span>
     <CustomButton title='Buy' onClick={()=>{console.log('Clicked')}} classNames='w-full'/>
    </div>
  );
};