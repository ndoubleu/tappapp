import { CloseButton } from '@/assets/icons';
import { Drawer } from 'antd';
import { AiOutlineClose } from "react-icons/ai";
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
    <div className='w-full h-full bg-block p-4 flex flex-col gap-2'>
        <span className='text-2xl font-bold'>Free Daily Booster</span>
    </div>
    </Drawer>
  );
}
