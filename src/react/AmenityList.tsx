import { BedDouble, Check, Coffee, ShowerHead, Wind, Wifi } from 'lucide-react';

type AmenityListProps = {
  items: string[];
  className?: string;
};

function amenityIcon(label: string) {
  const normalized = label.toLocaleLowerCase();
  if (normalized.includes('wi-fi') || normalized.includes('wifi')) return Wifi;
  if (normalized.includes('cama') || normalized.includes('bed')) return BedDouble;
  if (normalized.includes('ducha') || normalized.includes('shower') || normalized.includes('baño') || normalized.includes('bathroom')) return ShowerHead;
  if (normalized.includes('café') || normalized.includes('cafe') || normalized.includes('coffee') || normalized.includes('desayuno') || normalized.includes('breakfast')) return Coffee;
  if (normalized.includes('aire acondicionado') || normalized.includes('air conditioning')) return Wind;
  return Check;
}

export default function AmenityList({ items, className = '' }: AmenityListProps) {
  return (
    <ul className={`amenity-list ${className}`.trim()}>
      {items.map((item) => {
        const Icon = amenityIcon(item);
        return (
          <li key={item}>
            <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
