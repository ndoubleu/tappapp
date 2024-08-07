import Image from 'next/image';
import Squads from '@images/squads.png';
import Avatar from '../avatar';
import { useRouter } from 'next/router';
interface TeamsProps {
  users: any[];
}

const Teams: React.FC<TeamsProps> = ({ users }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className='relative'>
        <div
          style={{
          position: 'absolute',
          width: '286px',
          height: '286px',
          left: 'calc(50% - 286px / 2 + 0.5px)',
          top: '0px',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0) 100%)',
          filter: 'blur(40px)',
        }}
        >

        </div>
        <Image src={Squads} alt="Squads" />
      </div>
      <span className='text-3xl text-center font-bold'>Join the squad</span>
      <span className='text-m text-center font-bold opacity-60'>These squads are waiting for you. Would you like to join one of them?</span>
      <span className='text-m text-primary font-bold cursor-pointer' onClick={()=>{router.reload()}}>Refresh</span>
      <div className='flex flex-col rounded-[24px] bg-block w-full'>
        {
        users &&
        users.map(user => (
          <div key={user.id} className='flex flex-nowrap gap-2 p-4 rounded-[24px] hover:bg-blockActive cursor-pointer'>
            <Avatar imagePath={user.avatar} classNames='m-auto'/>
            
            <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-2 w-full text-xs">
                <span className="col-span-2 text-m font-bold">{user.name}</span>
                <div className="col-start-3 bg-blockLighter rounded-[4px] flex flex-col justify-center items-center">
                  <span className='text-sm font-bold'>{user.level || 0} lvl</span>
                </div>
                <div className="col-start-4"></div>
                <span className="col-span-2 row-start-2">📈 {`+${user.chart}% GPU`}</span>
                <div className="col-start-3 row-start-2">{`Fee: ${user.fee}%`}</div>
                <div className="col-start-4 row-start-2">{user.friends} 👥</div>
            </div>
    
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
