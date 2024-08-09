import CustomButton from '../button';

export default function GPUComponent () {
  return (
    <div className='flex flex-col gap-2 w-full'>
     <div className='w-full bg-red-gradient rounded-[24px] grid grid-cols-2 grid-rows-2 p-4 gap-2 mb-2'>
      <div className='text-sm'>Current hashrate</div>
      <div className='text-sm'>After buying more GPUs</div>
      <div className='text-base font-bold'>0.00 Gh/s</div>
      <div className='text-base font-bold'>0.00 Gh/s</div>
     </div>
    </div>
  );
};