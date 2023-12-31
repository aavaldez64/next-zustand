
import Link from 'next/link';
import type { IconType } from 'react-icons';

interface Props {
  href: string;
  Icon: IconType;
  title: string;
  subTitle: string
}


export const SideMenuItem = ({ href, Icon, title, subTitle }: Props) => {
  return (
    <Link
      key={ href }
      href={ href }
    >
      <div>
        <Icon />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{ title }</span>
        <span className="text-sm text-white/50 hidden md:block">{ subTitle }</span>
      </div>
    </Link>
  );
}