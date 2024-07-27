import React from 'react';
import Head from 'next/head';

const list = [
  {
    name: '본인 희망 및 고객 대상 좋은 생활습관 코칭 및 프로토콜 제공',
    text: '생활습관 교정이 필요한 사람들에게 개별 코칭을 통한 맞춤형 프로토콜을 제공합니다 (생코프로토콜). 이를 통해 개인의 특성과 상황에 맞는 효과적인 생활습관 개선을 지원합니다.',
  },
  {
    name: '정부 및 기업 고객 대상 코칭상담',
    text: '정부 기관이나 기업을 대상으로 특화된 코칭 상담 서비스를 제공합니다. 조직의 특성과 목표에 맞는 프로그램을 개발하여 구성원들의 건강한 생활습관 형성을 돕습니다.',
  },
  {
    name: '보건소 및 학교 대상 코칭 상담 진행',
    text: '보건소와 학교를 대상으로 맞춤형 코칭 상담 프로그램을 운영합니다. 지역 주민과 학생들의 건강 증진을 위한 실질적인 생활습관 개선 방안을 제시하고 실천을 독려합니다.',
  },
];

const CoachingItem = ({ item }: { item: any }) => {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h3 className='mb-2 text-xl font-semibold'>{item.name}</h3>
      <p className='text-gray-600'>{item.text}</p>
    </div>
  );
};

const CoachingConsultationPage = () => {
  return (
    <>
      <Head>
        <title>코칭상담 | 생활습관코칭</title>
        <meta
          name='description'
          content='생성형 AI 및 응용 프로토콜, 스트레칭 프로그램을 활용한 코칭상담 서비스'
        />
      </Head>
      <div className='min-h-screen bg-gray-100'>
        <main className='container px-4 py-12 mx-auto'>
          <h1 className='mb-12 text-4xl font-bold text-center'>코칭상담</h1>
          <p className='mb-12 text-xl text-center text-gray-700'>
            생성형 AI 및 응용 프로토콜, 스트레칭 프로그램을 활용한 다양한 대상별
            코칭 상담 서비스
          </p>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {list.map((item, index) => (
              <CoachingItem key={index} item={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default CoachingConsultationPage;
