export default function Earns() {
  return (
    <div className="relative w-full h-full flex flex-col gap-4 items-center">
      <div className="rounded-[24px] w-full bg-block h-[54px] grid grid-cols-2 grid-rows-1">
        <div className="flex flex-nowrap justify-center items-center rounded-[24px] text-m font-bold h-full cursor-pointer bg-blockActive ">
          🧸 Friends
        </div>
        <div className="flex flex-nowrap justify-center items-center rounded-[24px] text-m font-bold h-full cursor-pointer">
        🌔 Tasks
        </div>
      </div>
    </div>
  );
}
