import gpu1 from '@images/gpu1.png';
import { CardItem, MoreCards } from './moreCards';
const mock: CardItem[] = [
  {
    image: gpu1,
    title: 'AMD Saphire',
    subtitle: 'Power: 0.09 GH/s',
    button: {
      price: '24,551.14',
      priceTon: '1',
    },
    badge: 'Hot'
  },
  {
    image: gpu1,
    title: 'AMD Saphire',
    subtitle: 'Power: 0.09 GH/s',
    button: {
      price: '24,551.14',
      priceTon: '1',
    },
    badge: 'Basic'
  },
  {
    image: gpu1,
    title: 'AMD Saphire',
    subtitle: 'Power: 0.09 GH/s',
    button: {
      price: '24,551.14',
      priceTon: '1',
    },
    badge: 'Rare'
  },
  {
    image: gpu1,
    title: 'AMD Saphire',
    subtitle: 'Power: 0.09 GH/s',
    button: {
      price: '24,551.14',
      priceTon: '1',
    },
    badge: 'Super rare'
  },
  {
    image: gpu1,
    title: 'AMD Saphire',
    subtitle: 'Power: 0.09 GH/s',
    button: {
      price: '24,551.14',
      priceTon: '1',
    },
    badge: 'Diamonds'
  },
];
export default function MoreComponent () {
  return (
    <div className='flex flex-col gap-2 w-full'>
     <div className='w-full bg-green-gradient rounded-[24px] grid grid-cols-2 grid-rows-2 p-4 gap-2 mb-2'>
      <div className='text-sm'>Current hashrate</div>
      <div className='text-sm'>After buying more GPUs</div>
      <div className='text-base font-bold'>0.00 Gh/s</div>
      <div className='text-base font-bold'>0.00 Gh/s</div>
     </div>
     {
      mock.map((data, i)=>(
        <MoreCards key={i} {...data}/>
      ))
     }
    </div>
  );
};