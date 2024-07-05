import Link from 'next/link';
import React, { ReactNode } from 'react';

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
    label: '설립취지',
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

function WelcomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className='flex flex-col justify-center w-full lg:flex-row'>
        {links.map((link, index) => (
          <>
            <Link href={link.href} className='btn'>
              {link.label}
            </Link>
            {index !== links.length - 1 && (
              <div className='divider lg:divider-horizontal'></div>
            )}
          </>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default WelcomeLayout;
