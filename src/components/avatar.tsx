import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import noPhoto from '@images/no_photo.jpg';

interface AvatarProps {
  imagePath: string | StaticImageData;
  classNames?: string;
}

const Avatar: React.FC<AvatarProps> = ({ imagePath, classNames }) => {
  const [src, setSrc] = useState<string | StaticImageData>(imagePath);

  const handleError = () => {
    setSrc(noPhoto);
  };

  return (
    <div className="aspect-square h-full overflow-hidden rounded-full">
      <Image 
        src={src} 
        alt="Avatar" 
        className={`${classNames} m-auto object-cover w-full h-full`}
        width={50}
        height={50}
        onError={handleError}
      />
    </div>
  );
};

export default Avatar;
