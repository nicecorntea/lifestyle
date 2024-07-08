import { ReactNode } from 'react';
import Nav from './Nav';

function WelcomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col h-dvh'>
      <Nav />
      <section className='flex-1 w-full pt-10 mx-auto max-w-7xl'>
        {children}
      </section>
    </div>
  );
}

export default WelcomeLayout;
