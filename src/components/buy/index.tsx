import { useState } from 'react';
import StatusComponent from '../tap/status';
import classNames from 'classnames';
import MoreComponent from './more';
import GPUComponent from './gpu';

export default function BuyComponent() {
  const [gpu, setGpu] = useState(false)
  
  return (
    <div className="relative w-full h-full flex flex-col gap-4 items-center">
      <div className="rounded-[24px] w-full bg-block min-h-[54px] h-[54px] grid grid-cols-2 grid-rows-1">
        <div
          className={classNames(
            'flex flex-nowrap justify-center items-center rounded-[24px] text-m font-bold h-full cursor-pointer',
            { 'bg-blockActive': !gpu },
            { 'opacity-60': gpu }
          )}
          onClick={() => {
            setGpu(false);
          }}
        >
          Buy more
        </div>
        <div
          className={classNames(
            'flex flex-nowrap justify-center items-center rounded-[24px] text-m font-bold h-full cursor-pointer',
            { 'bg-blockActive': gpu },
            { 'opacity-60': !gpu }
          )}
          onClick={() => {
            setGpu(true);
          }}
        >
          My GPUs
        </div>
      </div>
      {
        gpu ? <GPUComponent/> : <MoreComponent/>
      }
  </div>
  );
}
