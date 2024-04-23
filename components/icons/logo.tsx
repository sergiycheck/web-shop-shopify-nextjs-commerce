import clsx from 'clsx';
import Image from 'next/image';

export default function LogoIcon(props: React.ComponentProps<'img'>) {
  return (
    <Image
      src="/icons/logo.jpeg"
      alt="BaskTech logo"
      {...props}
      className={clsx(props.className)}
      width={16}
      height={16}
    ></Image>
  );
}
