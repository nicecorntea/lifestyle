'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: '/edu/1',
    label: '코칭상담',
  },
  {
    href: '/edu/2',
    label: '교육 & 서비스',
  },
  {
    href: '/edu/3',
    label: '학술 & 도서출판',
  },
  {
    href: '/edu/4',
    label: '사회사업 & 장학',
  },
];
function Nav() {
  const path = usePathname();
  const currentPath = path.split('/').slice(-1);

  return (
    <div
      role='tablist'
      className='w-full pt-4 mx-auto max-w-7xl tabs tabs-lg tabs-bordered'
    >
      {links.map((link, index) => (
        <Link
          href={link.href}
          role='tab'
          className={`tab  ${
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
