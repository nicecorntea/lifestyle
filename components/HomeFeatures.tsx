'use client';

import { useState, useRef } from 'react';
import type { JSX } from 'react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  type?: 'video' | 'image';
  path?: string;
  format?: string;
  alt?: string;
  svg?: JSX.Element;
}

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: '맞춤형 프로그램',
    description:
      '맞춤형 프로그램, 전문가 조언, 커뮤니티 지원을 통해 건강하고 균형 잡힌 생활을 이루도록 도와주는 습관 코칭 플랫폼입니다.',
    type: 'image',
    path: '/assets/home1.jpg',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          d='M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25'
        />
      </svg>
    ),
  },
  {
    title: '전문가 조언',
    description:
      '건강과 웰빙을 위한 전문가의 조언을 받아 생활 습관을 개선하고 목표를 달성하세요.',
    type: 'image',
    path: '/assets/home2.jpg',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z'
        />
      </svg>
    ),
  },
  {
    title: '커뮤니티 지원',
    description:
      '비슷한 목표를 가진 사람들과의 커뮤니티에서 서로의 경험을 공유하고 응원받으세요.',
    type: 'image',
    path: '/assets/home3.jpg',
    alt: '커뮤니티 지원',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 12l-1.5-1.5 4.5-4.5L12 12zM12 12l4.5 4.5-1.5-1.5L12 12zM12 12L7.5 7.5l1.5-1.5L12 12z'
        />
      </svg>
    ),
  },
] as Feature[];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: Feature;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className='relative flex items-center w-full gap-2 py-5 text-base font-medium text-left md:text-lg'
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? 'text-primary' : ''}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? 'text-primary font-semibold' : ''
          }`}
        >
          <h3 className='inline sm:text-2xl'>{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className='pb-5 leading-relaxed sm:text-xl'>{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }: { feature: Feature }) => {
  const { type, path, format, alt } = feature;
  const style = 'rounded-2xl aspect-square w-full sm:w-[26rem]';
  const size = {
    width: 800,
    height: 500,
  };

  if (type === 'video') {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === 'image') {
    return (
      <div className='relative w-full h-96'>
        <Image
          src={path}
          alt={alt}
          fill
          // className={`${style} object-cover object-center`}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const HomeFeatures = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (
    <section
      className='py-24 mx-auto space-y-24 md:py-32 md:space-y-32 max-w-7xl bg-base-100 '
      id='features'
    >
      <div className='px-8'>
        <h2 className='mb-12 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-6xl md:mb-24'>
          건강하고 균형 잡힌 생활을 위한
          <span className='bg-primary text-primary-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap'>
            최고의 국제생활습관협회
          </span>
        </h2>
        <div className='flex flex-col gap-12 md:flex-row md:gap-24'>
          <div className='grid items-stretch grid-cols-1 gap-8 lg:grid-cols-2'>
            <ul className='w-full'>
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>
            <Media feature={features[featureSelected]} key={featureSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
