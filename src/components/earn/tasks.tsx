import tCurrency from '@images/tCurrency.png';
import Image from 'next/image';
import CustomButton from '../button';
const tasks = [
  {
    icon: '🗓',
    title: 'Join the chat',
    subtitle: '+512 GPU ',
    button: {
      title: 'Start',
      onClick: ()=>{console.log('Clicked')},
    },
  },
  {
    icon: '🗓',
    title: 'Subscribe to M2M Telegram',
    subtitle: '+120 GPU ',
    button: {
      title: 'Start',
      onClick: ()=>{console.log('Clicked')},
    },
  },
  {
    icon: '🗓',
    title: 'Follow M2M on X',
    subtitle: '+420 GPU ',
    button: {
      title: 'Start',
      onClick: ()=>{console.log('Clicked')},
    },
  },
];


export default function Tasks () {
  return (
    <div className="flex flex-col gap-2 w-full">
        <span className="text-xl font-bold">Tasks <span className="opacity-60">3</span></span>
        <div className="content flex flex-col gap-2">
          {
            tasks.map((task,i)=>(
              <div key={i} className="flex flex-nowrap justify-between items-center p-4 bg-block rounded-[24px]">
                <div className="flex flex-nowrap gap-2 items-center">
                  <span className="text-3xl">{task.icon}</span>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-sm">{task.title}</span>
                    <div className="flex flex-nowrap gap-2">
                      <Image src={tCurrency} alt="currency" className='my-auto' width={18} height={18}/>
                      <span className='text-sm'>{task.subtitle}</span>
                    </div>
                  </div>
                </div>
                <CustomButton title={task.button.title} onClick={task.button.onClick}/>
              </div>
            ))
          }
        </div>
    </div>
  );
};