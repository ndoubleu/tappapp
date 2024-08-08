import CustomButton from '../button';

export default function Deposit () {
  return (
    <>
      <span className='text-base opacity-60'>
        To transfer GPU to the app, you need to connect your TON wallet
      </span>

      <CustomButton title="Connect Wallet" onClick={()=>{console.log('Clicked')}}/>
    </>
  );
};