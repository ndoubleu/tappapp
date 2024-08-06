import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CloseButton: React.FC<any> = () => {
  return (
    <div className='p-1 bg-[#515151] rounded-full'>
        <AiOutlineClose className='text-block]'/>
    </div>
  );
};
export default React.memo(CloseButton);
