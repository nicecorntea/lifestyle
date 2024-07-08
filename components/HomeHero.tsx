import config from '@/config';
import Image from 'next/image';
import React from 'react';
function HomeHero() {
  return (
    <div className='relative w-full h-dvh hero'>
      <Image
        src={'/assets/hero.jpg'}
        loading='eager'
        alt='hero'
        style={{ objectFit: 'cover', objectPosition: 'top', zIndex: -1 }}
        fill
      />
      <div className='hero-overlay bg-opacity-10'></div>
      <div className='text-center rounded sm:p-10 bg-opacity-80 hero-content bg-primary text-primary-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-4xl font-bold sm:text-5xl'>
            {config.appName}
          </h1>
          <p className='mb-5 font-semibold md:text-xl'>
            맞춤형 프로그램, 전문가 조언, 커뮤니티 지원을 통한
            <br /> 건강하고 균형 잡힌 생활습관 코칭 플랫폼
          </p>
          <button className='btn btn-fill-primary-content'>코칭하러가기</button>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
