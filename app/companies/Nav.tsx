'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: '/companies',
    label: '임원사 현황',
  },
  {
    href: '/companies',
    label: '회원사목록',
  },
];
function Nav() {
  const path = usePathname();
  const currentPath = path.split('/').slice(-1);

  return (
    <div
      role='tablist'
      className='w-full max-w-2xl pt-4 mx-auto tabs tabs-bordered'
    >
      {links.map((link, index) => (
        <Link
          href={link.href}
          role='tab'
          className={`tab ${
            path == link.href ? 'tab-active text-primary-content font-bold' : ''
          }`}
          key={index}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default Nav;
