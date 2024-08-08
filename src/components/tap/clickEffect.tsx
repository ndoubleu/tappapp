import { useState, ReactNode } from 'react';

interface ClickEffectProps {
  children: ReactNode;
  count: number;
  setCount: (count: number) => void;
}

const ClickEffect = ({ children, count, setCount }: ClickEffectProps) => {
  const [clicks, setClicks] = useState<{ x: number, y: number, id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const touches = ('touches' in e) ? Array.from(e.touches) : [{ clientX: e.clientX, clientY: e.clientY }];

    const newClicks = touches.map((touch) => {
      const { clientX, clientY } = touch;
      setCount(count + 1);
      return { x: clientX - rect.left, y: clientY - rect.top, id: Date.now() + Math.random() };
    });

    setClicks((prevClicks) => [...prevClicks, ...newClicks]);

    newClicks.forEach((newClick) => {
      setTimeout(() => {
        setClicks((prevClicks) => prevClicks.filter((click) => click.id !== newClick.id));
      }, 1000);
    });
  };

  return (
    <div
      className="relative inline-block"
      onClick={handleClick as any}
      onTouchStart={handleClick as any}
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
