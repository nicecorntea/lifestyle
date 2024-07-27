import React from 'react';
import Head from 'next/head';

const list = [
  {
    name: '2급, 1급, 강사, 센터장 양성을 위한 자격증과정 운영',
    text: '생활습관교정전문가를 양성하고 정부, 지자체, 관공서 기업에 생활습관교육 서비스 제공합니다. 다양한 레벨의 전문가 양성을 통해 폭넓은 서비스 제공이 가능합니다.',
  },
  {
    name: '정부, 관공서, 기업에 좋은생활습관코칭 교육',
    text: '정부 기관, 관공서, 기업을 대상으로 맞춤형 좋은 생활습관 코칭 교육을 제공합니다. 조직의 특성에 맞는 프로그램을 개발하여 효과적인 교육을 실시합니다.',
  },
  {
    name: '좋은생활습관센터 운영',
    text: '지역 사회에 좋은 생활습관을 보급하기 위한 센터를 운영합니다. 센터를 통해 지역 주민들에게 직접적인 교육과 상담 서비스를 제공하여 건강한 생활 문화를 조성합니다.',
  },
];

const EducationItem = ({ item }: { item: any }) => {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h3 className='mb-2 text-xl font-semibold'>{item.name}</h3>
      <p className='text-gray-600'>{item.text}</p>
    </div>
  );
};

const EducationAndServicesPage = () => {
  return (
    <>
      <Head>
        <title>교육 & 서비스 | 생활습관코칭</title>
        <meta
          name='description'
          content='생활습관교정전문가 양성 및 교육 서비스 제공'
        />
      </Head>
      <div className='min-h-screen bg-gray-100'>
        <main className='container px-4 py-12 mx-auto'>
          <h1 className='mb-12 text-4xl font-bold text-center'>
            교육 & 서비스
          </h1>
          <p className='mb-12 text-xl text-center text-gray-700'>
            생활습관교정전문가를 양성하고 정부, 지자체, 관공서 기업에
            생활습관교육 서비스 제공
          </p>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {list.map((item, index) => (
              <EducationItem key={index} item={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default EducationAndServicesPage;
