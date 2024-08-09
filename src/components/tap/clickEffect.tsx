import { useState, useEffect, ReactNode } from 'react';

interface ClickEffectProps {
  children: ReactNode;
  remain: number;
  setRemain: (count: number) => void;
  count: number;
  setCount: (count: number) => void;
}

const ClickEffect = ({ children, count, setCount, remain, setRemain }: ClickEffectProps) => {
  const [clicks, setClicks] = useState<{ x: number, y: number, id: number }[]>([]);
  
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLDivElement;
      handleEffect(e.clientX, e.clientY, target);
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const target = e.currentTarget as HTMLDivElement;
      handleEffect(touch.clientX, touch.clientY, target);
    };

    const element = document.querySelector('.click-effect') as HTMLDivElement;
    if (element) {
      element.addEventListener('click', handleClick, { passive: false });
      element.addEventListener('touchstart', handleTouchStart, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener('click', handleClick);
        element.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, [count, remain, setCount, setRemain]);

  const handleEffect = (clientX: number, clientY: number, target: HTMLDivElement) => {
    const rect = target.getBoundingClientRect();

    if (remain > 0) {
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
      className="relative inline-block click-effect"
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
