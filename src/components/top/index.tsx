import Image from "next/image";
import Cup from '@images/cup.png'
import classNames from "classnames";
import { useState } from "react";
import Avatar from "../avatar";
import tCurrency from '@images/tCurrency.png';
import { useRouter } from 'next/router';
interface TopsProps {
  users: any[];
}

const Tops: React.FC<TopsProps> = ({ users }) => {
  const router = useRouter();
  const [ isDays, setDays] = useState(true);
  return (
    <div className="relative w-full h-full flex flex-col gap-4 items-center">
      <div className='relative z-1'>
        <div
          style={{
          position: 'absolute',
          width: '286px',
          height: '286px',
          left: 'calc(50% - 286px / 2 + 0.5px)',
          top: 'calc(50% - 286px / 2 + 0.5px)',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0) 100%)',
          filter: 'blur(40px)',
        }}
        >

        </div>
        <Image src={Cup} alt="Cup" />
      </div>
      <span className="font-bold text-3xl relative z-2 tex-center">Top miners</span>
      <div className="rounded-[24px] w-full bg-block min-h-[54px] h-[54px] grid grid-cols-2 grid-rows-1">
        <div
          className={classNames(
            'flex flex-nowrap justify-center items-center rounded-[24px] text-m font-bold h-full cursor-pointer',
            { 'bg-blockActive': isDays }
          )}
          onClick={() => {
            setDays(true);
          }}
        >
          Day
        </div>
        <div
          className={classNames(
            'flex flex-nowrap justify-center items-center rounded-[24px] text-m font-bold h-full cursor-pointer',
            { 'bg-blockActive': !isDays }
          )}
          onClick={() => {
            setDays(false);
          }}
        >
          Week
        </div>
      </div>
      <div className="content w-dull bg-block rounded-[24px]">
      {
        users &&
        users.map((user, i) => (
          <div key={user.id} className='flex flex-nowrap gap-2 p-4 rounded-[24px] hover:bg-blockActive cursor-pointer'>
            <Avatar imagePath={user.avatar} classNames='m-auto'/>
            
            <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-2 w-full text-xs">
                <span className="col-span-2 text-m font-bold">{user.name}</span>
                <div className="col-start-4"></div>
                <div className="col-span-2 row-start-2 flex flex-nowrap gap-2">
                  <Image src={tCurrency} alt="currency" width={15} height={15} className="my-auto"/>
                  <span className="">{user.chart} GPU</span>
                  </div>
                <div className="col-start-3 row-start-2">{`${user.fee} Gh/s`}</div>
                <div className="col-start-4 row-start-1 row-end-3 flex flex-col justify-center items-end">
                  <span>{i+1}</span>
                  </div>
            </div>
    
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tops;