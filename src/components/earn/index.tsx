import React, { useState } from 'react';
import classNames from 'classnames';
import Tasks from './tasks';
import Friends from './friends';

interface EarnsProps {
  section: string;
}

const Earns: React.FC<EarnsProps> = ({ section }) => {
  const [isTasks, setTasks] = useState(section === 'tasks');

  return (
    <div className="relative w-full h-full flex flex-col gap-4 items-center">
      <div className="rounded-[24px] w-full bg-block min-h-[54px] h-[54px] grid grid-cols-2 grid-rows-1">
        <div
          className={classNames(
            'flex flex-nowrap justify-center items-center rounded-[24px] text-m font-bold h-full cursor-pointer',
            { 'bg-blockActive': !isTasks }
          )}
          onClick={() => setTasks(false)}
        >
          🧸 Friends
        </div>
        <div
          className={classNames(
            'flex flex-nowrap justify-center items-center rounded-[24px] text-m font-bold h-full cursor-pointer',
            { 'bg-blockActive': isTasks }
          )}
          onClick={() => setTasks(true)}
        >
          🌔 Tasks
        </div>
      </div>
      {isTasks ? <Tasks /> : <Friends />}
    </div>
  );
};

export default Earns;
