export default function Footer() {
  return (
    <div className="fixed bottom-2 flex flex-col items-center w-full">
        <div className="grid grid-cols-5 grid-rows-[1fr] bg-block rounded-[24px] border border-blockActive">
            <div className="flex flex-col items-center w-[72px] rounded-[24px] cursor-pointer hover:bg-blockActive p-4">
                <span className="text-xl">🌽</span>
                <span className="text-base">Farm</span>
            </div>
            <div className="flex flex-col items-center w-[72px] rounded-[24px] cursor-pointer hover:bg-blockActive p-4">
                <span className="text-xl">👥</span>
                <span className="text-base">Team</span>
            </div>
            <div className="flex flex-col items-center w-[72px] rounded-[24px] cursor-pointer hover:bg-blockActive p-4">
                <span className="text-xl">👆</span>
                <span className="text-base">Tap</span>
            </div>
            <div className="flex flex-col items-center w-[72px] rounded-[24px] cursor-pointer hover:bg-blockActive p-4">
                <span className="text-xl">💰</span>
                <span className="text-base">Earn</span>
            </div>
            <div className="flex flex-col items-center w-[72px] rounded-[24px] cursor-pointer hover:bg-blockActive p-4">
                <span className="text-xl">🏅</span>
                <span className="text-base">Top</span>
            </div> 
        </div>
    </div>
  );
}