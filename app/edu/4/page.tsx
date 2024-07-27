import React from 'react';
import Head from 'next/head';

const list = [
  {
    name: '사회캠페인으로 좋은생활습관 정착',
    text: '지역사회에서 좋은생활습관의 중요성을 알리고 실천을 독려하는 다양한 캠페인을 진행합니다. 이를 통해 건강한 생활문화를 확산시키고 사회 전반의 삶의 질 향상에 기여합니다.',
  },
  {
    name: '청소년과 대학생들에게 장학금을 지원하여 좋은생활습관인재 양성',
    text: '미래 세대의 건강한 성장을 위해 청소년과 대학생을 대상으로 장학 프로그램을 운영합니다. 좋은생활습관에 대한 이해와 실천력을 갖춘 인재를 발굴하고 육성합니다.',
  },
  {
    name: '대학학과 개설 및 평생학습 프로그램을 운영',
    text: '좋은생활습관 관련 대학 학과 개설을 지원하고, 일반인을 위한 평생학습 프로그램을 운영합니다. 이를 통해 전문가 양성과 대중의 인식 개선을 동시에 추구합니다.',
  },
];

const SocialWorkItem = ({ item }: { item: any }) => {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h3 className='mb-2 text-xl font-semibold'>{item.name}</h3>
      <p className='text-gray-600'>{item.text}</p>
    </div>
  );
};

const SocialWorkAndScholarshipPage = () => {
  return (
    <>
      <Head>
        <title>사회사업 & 장학 | 생활습관코칭</title>
        <meta
          name='description'
          content='좋은생활습관 정착을 위한 사회사업 및 장학 프로그램'
        />
      </Head>
      <div className='min-h-screen bg-gray-100'>
        <main className='container px-4 py-12 mx-auto'>
          <h1 className='mb-12 text-4xl font-bold text-center'>
            사회사업 & 장학
          </h1>
          <p className='mb-12 text-xl text-center text-gray-700'>
            지역사회에 필요한 자원 및 인재양성을 위한 재원을 제공하여
            좋은생활습관을 정착시킵니다
          </p>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {list.map((item, index) => (
              <SocialWorkItem key={index} item={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default SocialWorkAndScholarshipPage;
