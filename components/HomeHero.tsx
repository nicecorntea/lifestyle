import config from '@/config';
import Image from 'next/image';
import React from 'react';
function HomeHero() {
  return (
    <div className='z-0 h-dvh hero'>
      <Image
        src={'/assets/hero.jpg'}
        loading='eager'
        alt='hero'
        style={{ objectFit: 'cover', marginTop: 80 }}
        fill
      />
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='text-center bg-opacity-80 hero-content bg-primary text-primary-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-2xl font-bold md:text-5xl'>
            {config.appName}
          </h1>
          <p className='mb-5'>
            맞춤형 프로그램, 전문가 조언, 커뮤니티 지원을 통해 건강하고 균형
            잡힌 생활을 이루도록 도와주는 습관 코칭 플랫폼입니다.
          </p>
          <button className='btn btn-fill-primary-content'>코칭하러가기</button>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
