import Image from "next/image";
import  GPU  from '@images/gpu.png'
import Fan from '@images/fan.png'
import avatar1 from '@images/avatar1.png'
import avatar2 from '@images/avatar2.png'
import { IoIosArrowForward } from "react-icons/io";
export default function Main() {
  return (
    <main
      className='w-screen min-h-screen flex flex-col items-center justify-center select-none'
    >
     <div className="flex flex-col items-center gap-4">
        <Image src={GPU} alt="GPU" draggable={false}/>
        <span className="opacity-70 font-regular">Your balance</span>
        <span className="font-bold text-4xl">3.14 GPU</span>
        <div className="flex flex-nowrap gap-4">
            <div className="bg-block p-4 border border-blockActive rounded w-[120px] h-[43px] rounded-[21.5px] flex flex-nowrap justify-center items-center cursor-pointer gap-2">
                <span className="font-bold text-primary">&darr;</span>
                <span>Deposit</span>
            </div>
            <div className="bg-block p-4 border border-blockActive rounded w-[120px] h-[43px] rounded-[21.5px] flex flex-nowrap justify-center items-center cursor-pointer gap-2">
                <span className="font-bold text-primary">&uarr;</span>
                <span>Withdraw</span>
            </div>
        </div>
        <div className="bg-block border border-blockActive rounded flex flex-col w-full rounded-[24px]">
            <div className="flex flex-col p-4">
                <div className="flex flex-nowrap gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-m mb-2">Profit per 1 min</span>
                        <span className="text-2xl font-bold">0.0000 GPU</span>
                        <span className="opacity-40 text-m">0.00 Gh/s</span>
                    </div>
                    <div className="flex flex-nowrap p-4 bg-primary gap-2 rounded-[13px]">
                        <Image src={Fan} alt="fan" draggable={false} className="m-auto"/>
                        <span className="text-m text-secondary font-bold m-auto">Buy GPUs <br/> to mine</span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="h-[8px] w-full bg-blockActive rounded-[13px]">
                    <div className="h-full w-3/5 bg-primary rounded-[13px]"></div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-nowrap justify-between hover:bg-blockActive p-4 rounded-[24px]">
                    <div className="flex flex-nowrap gap-2">
                        <Image src={avatar1} alt="avatar"/>
                        <div className="flex flex-col gap-2">
                            <span className="text-xl">My farm: 0 GPUs</span>
                            <span className="text-m">0 GPU/min</span>
                        </div>
                    </div>
                    <IoIosArrowForward className="my-auto text-bold"/>
                </div>
                <div className="flex flex-nowrap justify-between hover:bg-blockActive p-4 rounded-[24px]">
                    <div className="flex flex-nowrap gap-2">
                        <Image src={avatar2} alt="avatar"/>
                        <div className="flex flex-col gap-2">
                            <span className="text-xl">Join squad</span>
                            <span className="text-m">0 GPU/min</span>
                        </div>
                    </div>
                    <IoIosArrowForward className="my-auto text-bold"/>
                </div>
            </div>
            <div>

            </div>
        </div>
     </div>
    </main>
  );
}
