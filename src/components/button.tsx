import { Button } from 'antd';
import React, { ReactNode, useState } from 'react';

interface AvatarProps {
  title: string;
  classNames?: string;
  icon?: ReactNode;
  onClick: ()=> void;
}

const CustomButton: React.FC<AvatarProps> = ({ title, classNames, icon, onClick }) => {


  return (
    <div className={` ${classNames}`}>
      <Button type="primary" icon={icon} className='py-[10px] px-[16px] text-secondary font-bold w-full h-full' onClick={onClick}>
        Search
      </Button>
    </div>
  );
};

export default CustomButton;
