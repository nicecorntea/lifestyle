import config from '@/config';
import { Suspense } from 'react';

async function VideoComponent() {
  const waveURL =
    'https://ngg9gigad43voek8.public.blob.vercel-storage.com/wave-W6zrgNj2svVwhm3nso1kj6tk8oO1Zc.mp4';

  return (
    <video
      src={waveURL}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      className='object-cover w-full h-[calc(100dvh-64px)]'
      preload='none'
      aria-label='Video player'
    >
      <source src={waveURL} type='video/mp4' />
    </video>
  );
}

const Hero = () => {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <VideoComponent />
      </Suspense>
      <h1 className=''>국제 생활습관협회 공식홈페이지 오신 것을 환영합니다!</h1>
    </div>
  );
};

export default Hero;
