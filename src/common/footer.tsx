export default function Footer() {
  return (
    <div className="fixed bottom-2 flex flex-col items-center w-full">
        <div className="grid grid-cols-5 grid-rows-[1fr] bg-block rounded-[24px] border border-blockActive p-[4px]">
            <button className="flex flex-col items-center rounded-[21px] cursor-pointer hover:bg-blockActive p-4 focus:bg-blockActive aspect-square">
                <span className="text-xl">🌽</span>
                <span className="text-base">Farm</span>
            </button>
            <button className="flex flex-col items-center rounded-[21px] cursor-pointer hover:bg-blockActive p-4 focus:bg-blockActive aspect-square">
                <span className="text-xl">👥</span>
                <span className="text-base">Team</span>
            </button>
            <button className="flex flex-col items-center rounded-[21px] cursor-pointer hover:bg-blockActive p-4 focus:bg-blockActive aspect-square">
                <span className="text-xl">👆</span>
                <span className="text-base">Tap</span>
            </button>
            <button className="flex flex-col items-center rounded-[21px] cursor-pointer hover:bg-blockActive p-4 focus:bg-blockActive aspect-square">
                <span className="text-xl">💰</span>
                <span className="text-base">Earn</span>
            </button>
            <button className="flex flex-col items-center rounded-[21px] cursor-pointer hover:bg-blockActive p-4 focus:bg-blockActive aspect-square">
                <span className="text-xl">🏅</span>
                <span className="text-base">Top</span>
            </button> 
        </div>
    </div>
  );
}