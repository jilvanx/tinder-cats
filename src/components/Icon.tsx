import { CatIcon } from '@/assets/icons/CatIcon';
import { CloseIcon } from '@/assets/icons/CloseIcon';
import { HeartIcon } from '@/assets/icons/HeartIcon';
import { MessageCircleIcon } from '@/assets/icons/MessageCircleIcon';
import { StarIcon } from '@/assets/icons/StarIcon';
import { TinderCatsIcon } from '@/assets/icons/TinderCatsIcon';
import { UserIcon } from '@/assets/icons/UserIcon';
import { ThemeColors } from '@/theme';

export type IconBase = {
  color?: ThemeColors;
};

type IconProps = {
  name: IconName;
} & IconBase;

export function Icon({ name, color }: IconProps) {
  const SVGIcon = iconRegistry[name];
  return <SVGIcon color={color} />;
}

const iconRegistry = {
  cat: CatIcon,
  'message-circle': MessageCircleIcon,
  user: UserIcon,
  'tinder-cats': TinderCatsIcon,
  star: StarIcon,
  close: CloseIcon,
  heart: HeartIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
