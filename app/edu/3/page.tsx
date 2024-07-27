import React from 'react';
import Head from 'next/head';

const list = [
  {
    name: '매년 학술대회를 개최하여 양질의 연구 데이터 발표',
    text: '좋은생활습관분야에 대한 최신 연구 결과를 공유하고 토론하는 연례 학술대회를 개최합니다. 이를 통해 전문가들 간의 지식 교류와 네트워킹을 촉진합니다.',
  },
  {
    name: '정부와 기업과 협업하여 사회복지 및 생활습관에 관한 연구',
    text: '정부 기관 및 기업과 협력하여 사회복지 향상과 건강한 생활습관 형성에 관한 심도 있는 연구를 수행합니다. 이를 통해 정책 수립과 기업의 건강 프로그램 개발에 기여합니다.',
  },
  {
    name: '좋은 연구자료는 도서로 출판',
    text: '연구 결과를 바탕으로 일반 대중과 전문가를 위한 다양한 도서를 출판합니다. 이를 통해 좋은생활습관에 대한 지식을 널리 보급하고 사회적 인식을 높입니다.',
  },
];

const AcademicItem = ({ item }: { item: any }) => {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h3 className='mb-2 text-xl font-semibold'>{item.name}</h3>
      <p className='text-gray-600'>{item.text}</p>
    </div>
  );
};

const AcademicAndPublicationPage = () => {
  return (
    <>
      <Head>
        <title>학술 & 도서출판 | 생활습관코칭</title>
        <meta
          name='description'
          content='좋은생활습관분야에 대한 학술연구 및 도서 출판'
        />
      </Head>
      <div className='min-h-screen bg-gray-100'>
        <main className='container px-4 py-12 mx-auto'>
          <h1 className='mb-12 text-4xl font-bold text-center'>
            학술 & 도서출판
          </h1>
          <p className='mb-12 text-xl text-center text-gray-700'>
            좋은생활습관분야에 대한 다양하고 깊은 학술연구를 하여 자료를
            집필하고 보급합니다
          </p>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {list.map((item, index) => (
              <AcademicItem key={index} item={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default AcademicAndPublicationPage;
