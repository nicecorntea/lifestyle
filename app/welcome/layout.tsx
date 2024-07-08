import { ReactNode } from 'react';
import Nav from './Nav';

function WelcomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Nav />
      <section className='w-full max-w-2xl pt-10 mx-auto'>{children}</section>
    </div>
  );
}

export default WelcomeLayout;
