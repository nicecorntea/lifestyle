import { Suspense } from 'react';
import HeaderBlog from './_assets/components/HeaderBlog';
import Footer from '@/components/Footer';

export default async function LayoutBlog({ children }: { children: any }) {
  return (
    <div>
      {/* <Suspense>
        <HeaderBlog />
      </Suspense> */}

      <main className='max-w-6xl min-h-screen p-8 mx-auto'>{children}</main>

      <div className='h-24' />

      <Footer />
    </div>
  );
}
