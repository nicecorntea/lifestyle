import Image from 'next/image';
import config from '@/config';

const CTA = () => {
  return (
    <section className='relative min-h-screen overflow-hidden hero'>
      <Image
        src='/assets/cta.jpg'
        alt='Background'
        className='object-cover w-full'
        fill
      />
      <div className='relative hero-overlay bg-neutral bg-opacity-70'></div>
      <div className='relative p-8 text-center hero-content text-neutral-content'>
        <div className='flex flex-col items-center max-w-xl p-8 md:p-0'>
          <h2 className='mb-4 text-2xl font-bold tracking-tight md:text-5xl md:mb-12'>
            국제생활습관코칭협회
          </h2>
          <p className='mb-12 text-lg opacity-80 md:mb-16'>함께 나아가요!</p>

          <button className='btn btn-primary btn-wide'>코칭하러가기</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
