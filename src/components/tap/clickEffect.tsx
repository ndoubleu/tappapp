import { useState, ReactNode } from 'react';

interface ClickEffectProps {
  children: ReactNode;
}

const ClickEffect = ({ children }: ClickEffectProps) => {
  const [clicks, setClicks] = useState<{ x: number, y: number, id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    const newClick = { x: clientX - rect.left, y: clientY - rect.top, id: Date.now() };

    setClicks((prevClicks) => [...prevClicks, newClick]);
    setTimeout(() => {
      setClicks((prevClicks) => prevClicks.filter((click) => click.id !== newClick.id));
    }, 1000);
  };

  return (
    <div className="relative inline-block" onClick={handleClick}>
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
