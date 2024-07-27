'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: '/welcome/introduce',
    label: '인사말',
  },
  {
    href: '/welcome/why',
    label: '생활습관코칭의 전망',
  },
  {
    href: '/welcome/org',
    label: '조직도',
  },
  {
    href: '/welcome/business',
    label: '주요사업',
  },
];
function Nav() {
  const path = usePathname();
  const currentPath = path.split('/').slice(-1);

  return (
    <div
      role='tablist'
      className='w-full pt-4 mx-auto max-w-7xl tabs tabs-sm md:tabs-lg tabs-bordered'
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
