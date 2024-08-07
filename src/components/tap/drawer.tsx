import { CloseButton } from '@/assets/icons';
import { Drawer } from 'antd';
import CustomButton from '../button';
import Image from 'next/image';
import tCurrency from '@images/tCurrency.png';
const data = [
  {
    title: 'Free Daily Booster',
    content: [
      {
        icon: '⚡',
        title: 'Full energy',
        subtitle: <span className='font-medium opacity-60'>1/1 available</span>,
        button: {
          title: 'Get It',
          onclick: ()=>{console.log('clicked')}
        },
      },
    ],
  },
  {
    title: 'Boosters',
    content: [
      {
        icon: '🔋',
        title: 'Energy limit',
        subtitle: 
        <div className='flex flex-nowrap text-base gap-2'>
          <Image src={tCurrency} alt='currency' width={16} height={18} className='my-auto'/>
          <div className='flex flex-nowrap'>
            <span className='font-medium'>181 GPU •</span>
            <span className='font-medium opacity-60'>1 lvl</span>
          </div>
        </div>,
        button: {
          title: 'Level Up',
          onclick: ()=>{console.log('clicked')}
        },
      },
      {
        icon: '🤖',
        title: 'Multitap',
        subtitle: 
        <div className='flex flex-nowrap text-base gap-2'>
          <Image src={tCurrency} alt='currency' width={16} height={18} className='my-auto'/>
          <div className='flex flex-nowrap'>
            <span className='font-medium'>362 GPU •</span>
            <span className='font-medium opacity-60'>1 lvl</span>
          </div>
        </div>,
        button: {
          title: 'Level Up',
          onclick: ()=>{console.log('clicked')}
        },
      },
      {
        icon: '🏎',
        title: 'Recharging Speed',
        subtitle: 
        <div className='flex flex-nowrap text-base gap-2 items-center'>
          <Image src={tCurrency} alt='currency' width={16} height={18} className='my-auto'/>
          <div className='flex flex-nowrap'>
            <span className='font-medium'>181 GPU •</span>
            <span className='font-medium opacity-60'>1 lvl</span>
          </div>
        </div>,
        button: {
          title: 'Level Up',
          onclick: ()=>{console.log('clicked')}
        },
      },
    ],
  },
];

type DrawerComponentProps = {
  open: boolean;
  setOpen: (state: boolean) => void;
};

export default function DrawerComponent({ open, setOpen }: DrawerComponentProps) {
  
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      placement={'bottom'}
      closable={true}
      onClose={onClose}
      open={open}
      key={'bottom'}
      styles={{
        body: {padding: 0, color: 'white'},
        content: {background: 'transparent'}
    }}
    closeIcon={<CloseButton/>}
    className='max-w-[400px] mx-auto'
    classNames={{
        content: 'rounded-[12px] bg-block text-white',
        header: 'bg-block',
        body: 'bg-block p-2'
    }}
    height={600}
    >
    <div className='w-full h-full bg-block p-4 overflow-scroll'>
      <div className='h-full w-full flex flex-col gap-2'>
       {
        data.map((block, i) => (
          <div className='flex flex-col gap-4 mb-2' key={i}>
          <span className='text-2xl font-bold'>{block.title}</span>
            {
              block.content.map((element, j)=>(
                <div className='flex flex-nowrap justify-between items-center rounded-[21px]' key={j}>
                <div className='flex flex-nowrap gap-4 items-center'>
                  <div className='flex flex-col justify-center items-center text-3xl w-[72px] h-[72px] bg-blockActive rounded-[21px]'>
                    <span>{element.icon}</span>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <span className='text-sm font-bold'>{element.title}</span>
                    {element.subtitle}
                  </div>
                </div>
                <CustomButton title={element.button.title} onClick={element.button.onclick}/>
              </div>
              ))
            }
        </div>
        ))
       }
      </div>
    </div>
    </Drawer>
  );
}
