import { useState, ReactNode } from 'react';

interface ClickEffectProps {
  children: ReactNode;
  remain: number;
  setRemain: (count: number) => void;
  count: number;
  setCount: (count: number) => void;
}

const ClickEffect = ({ children, count, setCount, remain, setRemain }: ClickEffectProps) => {
  const [clicks, setClicks] = useState<{ x: number, y: number, id: number }[]>([]);
  const [clickHandled, setClickHandled] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (clickHandled) return;

    setClickHandled(true);
    handleEffect(e.clientX, e.clientY, e.currentTarget);
    setTimeout(() => setClickHandled(false), 100);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    handleEffect(touch.clientX, touch.clientY, e.currentTarget);
  };

  const handleEffect = (clientX: number, clientY: number, target: HTMLDivElement) => {
    const rect = target.getBoundingClientRect();

    if(remain>0){
      setCount(count + 1);
      setRemain(remain - 1);
      const newClick = { x: clientX - rect.left, y: clientY - rect.top, id: Date.now() + Math.random() };
      setClicks((prevClicks) => [...prevClicks, newClick]);

    setTimeout(() => {
      setClicks((prevClicks) => prevClicks.filter((click) => click.id !== newClick.id));
    }, 1000);
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseDown={handleClick}
      onTouchStart={handleTouchStart}
    >
      {children}
      {clicks.map((click) => (
        <span
          key={click.id}
          className="absolute text-4xl font-bold animate-flyUp pointer-events-none"
          style={{ left: click.x, top: click.y }}
        >
          +1
        </span>
      ))}
    </div>
  );
};

export default ClickEffect;
