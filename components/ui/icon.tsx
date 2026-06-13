import { cn } from "@/lib/utils";
import {
  FiMapPin,
  FiCalendar,
  FiDroplet,
  FiPackage,
  FiChevronDown,
} from "react-icons/fi";
import { GiSprout } from "react-icons/gi";
import { BiRuler } from "react-icons/bi";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  MapPin: FiMapPin,
  Calendar: FiCalendar,
  Sprout: GiSprout,
  Ruler: BiRuler,
  Droplet: FiDroplet,
  Package: FiPackage,
  ChevronDown: FiChevronDown,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 20 }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md p-1",
        className
      )}
    >
      <IconComponent size={size} />
    </span>
  );
}
