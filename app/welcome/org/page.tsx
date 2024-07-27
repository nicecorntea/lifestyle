import React from 'react';
import Head from 'next/head';

const organizationStructure = [
  {
    title: '협회장',
    name: '이창현',
  },
  {
    title: '고문단',
    name: '김경태 임은진 최중언 함석찬 ',
  },
  {
    title: '부협회장',
    name: '이영좌 김선희',
  },
  {
    title: '자문단',
    name: '김달영 김배년 김종한 김지혜 서혜정 소현아 송인욱 안관홍 안영준 정혜민 채덕자 채수봉 허순애',
  },
  {
    title: '위원회',
    committees: [
      { name: '사무국트파트장', head: '' },
      { name: 'IT 파트', head: '허만권' },
      { name: '수면 & 중독파트', head: '이정귀 정혜민 최숙정' },
      { name: '영양&음용 파트', head: '김윤희 윤지현 김희순' },
      { name: '마음, 관계 파트', head: '김세희 서혜정 유경란' },
      { name: '성공&취업파트', head: '김경태 허순애 채덕자' },
      { name: '대외홍보파트', head: '변성원 안영준' },
    ],
  },
];

const OrganizationCard = ({
  title,
  name,
  committees,
}: {
  title: string;
  name: string;
  committees: any;
}) => (
  <div className='p-6 mb-4 bg-white rounded-lg shadow-md'>
    <h3 className='mb-2 text-xl font-bold'>{title}</h3>
    {name && <p className='text-gray-700'>{name}</p>}
    {committees && (
      <ul className='pl-5 list-disc'>
        {committees.map((committee: any, index: number) => (
          <li key={index} className='text-gray-700'>
            {committee.name}: {committee.head}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const OrganizationStructurePage = () => {
  return (
    <>
      <Head>
        <title>조직도 | 국제생활습관코칭협회</title>
        <meta name='description' content='국제생활습관코칭협회의 조직 구조' />
      </Head>
      <div className='min-h-screen bg-gray-100'>
        <main className='container px-4 py-12 mx-auto'>
          <h1 className='mb-12 text-4xl font-bold text-center'>조직도</h1>

          <div className='max-w-3xl mx-auto'>
            {organizationStructure.map((item, index) => (
              <OrganizationCard
                key={index}
                committees={item.committees}
                name={item.name}
                title={item.title}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default OrganizationStructurePage;
