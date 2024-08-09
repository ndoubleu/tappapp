import { StaticImageData } from "next/image";
import  Image  from "next/image";
import { useState } from "react";
import tCurrency from '@images/tCurrency.png';
import {Ton} from "@/assets/icons";
import BadgeComponent from "./badge";
export interface ButtonData {
    price: string;
    priceTon: string;
  }



export interface CardItem {
    image: StaticImageData;
    title: string;
    subtitle: string;
    button: ButtonData;
    badge?: 'Hot' | 'Basic' | 'Rare' | 'Super rare' | 'Diamonds';
  }

export const MoreCards: React.FC<CardItem> = (props) => {
  const [count, setCount] = useState(0);
  const {image, title, subtitle, button, badge} = props;
    return (
      <div className='grid grid-cols-4 grid-rows-2 w-full p-4 bg-block rounded-[24px] gap-2'>
        <div className="w-full h-full flex flex-col justify-center items-center relative">
         {
          badge &&
          <BadgeComponent badge={badge}/>
         }
        <div
          style={{
          position: 'absolute',
          width: '72px',
          height: '72px',
          left: 'calc(50% - 72px / 2 + 0.5px)',
          top: 'calc(50% - 72px / 2 + 0.5px)',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0) 100%)',
          filter: 'blur(40px)',
        }}
        >

        </div>
          <Image src={image.src} alt="GPU" className="w-full" width={72} height={46}/>
        </div>
        <div className="col-span-2 flex flex-col w-full">
          <span className="text-base font-bold">{title}</span>
          <span className="text-sm">{subtitle}</span>
        </div>
        <div className="flex flex-nowrap justify-center gap-2 items-center cursor-pointer">
          <div className="rounded-full bg-blockLighter p-2 w-[25px] text-center" onClick={()=>{if(count>0){setCount(count-1)}}}>
            -
          </div>
          <span>{count}</span>
          <div className="rounded-full bg-white text-block p-2 cursor-pointer w-[25px] text-center" onClick={()=>{setCount(count+1)}}>
            +
          </div>
        </div>
        <div className="col-span-4 rounded-[14px] bg-blockLighter w-full h-full flex flex-col justify-center items-center gap-2 p-4 cursor-pointer">
          <div className="flex flex-nowrap text-xs gap-4">
            <span className="font-bold">Buy for</span>
            <div className="flex flex-nowrap gap-2">
              <Image src={tCurrency} alt="currency" width={15} height={15}/>
              <span>{button.price} GPU</span>
            </div>
          </div>
          <div className="flex flex-nowrap gap-4 items-center">
            <Ton/>
            <span>~ {button.priceTon} TON</span>
          </div>
        </div>

      </div>
    );
  };
  