import { Check, Wifi } from 'lucide-react';

type AmenityListProps = {
  items: string[];
  className?: string;
};

function amenityIcon(label: string) {
  return label.toLocaleLowerCase().includes('wi-fi') ? Wifi : Check;
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
