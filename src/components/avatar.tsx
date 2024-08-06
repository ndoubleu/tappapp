import React from 'react';
import Image from 'next/image';
interface AvatarProps {
  imagePath: string;
  classNames?: string;
}

const Avatar: React.FC<AvatarProps> = ({ imagePath, classNames }) => {
  return (
    <div className="aspect-square h-full overflow-hidden rounded-full">
      <Image 
        src={imagePath} 
        alt="Avatar" 
        className={`${classNames} m-auto object-cover w-full h-full`}
        width={50}
        height={50}
      />
    </div>
  );
};

export default Avatar;
