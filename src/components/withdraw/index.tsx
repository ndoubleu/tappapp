import { useState } from 'react';
import StatusComponent from '../tap/status';
import classNames from 'classnames';
import CustomButton from '../button';

export default function Taps() {
  const [deposit, setDoposit] = useState(true)
  
  return (
    <div className="relative w-full h-full flex flex-col gap-4 items-center">
      <StatusComponent withButton={false}/>

      <div className="rounded-[24px] w-full bg-block min-h-[54px] h-[54px] grid grid-cols-2 grid-rows-1">
        <div
          className={classNames(
            'flex flex-nowrap justify-center items-center rounded-[24px] text-m font-bold h-full cursor-pointer',
            { 'bg-blockActive': deposit }
          )}
          onClick={() => {
            setDoposit(true);
          }}
        >
          Deposit
        </div>
        <div
          className={classNames(
            'flex flex-nowrap justify-center items-center rounded-[24px] text-m font-bold h-full cursor-pointer',
            { 'bg-blockActive': !deposit }
          )}
          onClick={() => {
            setDoposit(false);
          }}
        >
          Withdraw
        </div>
      </div>

      <span className='text-base opacity-60'>
        To transfer GPU to the app, you need to connect your TON wallet
      </span>

      <CustomButton title="Connect Wallet" onClick={()=>{console.log('Clicked')}}/>
      
  </div>
  );
}
