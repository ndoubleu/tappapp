import CustomButton from '../button';

interface BadgeComponentProps {
  badge: 'Hot' | 'Basic' | 'Rare' | 'Super rare' | 'Diamonds';
}

export default function BadgeComponent({ badge }: BadgeComponentProps) {
  const badgeStyles = {
    Hot: 'bg-[#EC5059]',
    Basic: 'bg-[#3D8B5D]',
    Rare: 'bg-[#1541B2]',
    'Super rare': 'bg-badge-gradient',
    Diamonds: 'bg-[#25BCB3]',
  };
  const badgeClass = badgeStyles[badge] || 'bg-gray-500';

  return (
    <div className={`px-2 py-1 ${badgeClass} text-white rounded absolute left-0 top-0 flex flex-col justify-center items-center`}>
      <span className='text-xs'>{badge}</span>
    </div>
  );
};
