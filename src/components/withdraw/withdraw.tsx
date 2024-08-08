import CustomButton from '../button';

export default function Withdraw () {
  return (
    <>
      <span className='text-base opacity-60'>
        You do not have any GPUs yet. Link your TON wallet and start earning GPU
      </span>

      <CustomButton title="Connect Wallet" onClick={()=>{console.log('Clicked')}}/>
    </>
  );
};