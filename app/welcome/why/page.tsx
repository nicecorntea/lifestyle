import React from 'react';
import Head from 'next/head';

const prospects = [
  {
    title: '생활 습관 코칭의 전망1',
    content: [
      '생활 습관 코칭은 코칭을 받는 사람의 건강하고 행복한 삶을 유지하는 바른생활 습관의 지속가능성을 높여 줍니다. 생활 습관은 7가지 카테고리로 나누어 적절한 수면, 최적의 영양, 충분한 운동, 중독예방 및 관리, 스트레스 관리, 좋은 인간관계, 성공에 대한 목표 의식과 실천 습관입니다.',
      '또한 생활 습관 코칭은 개인이 자신의 목표를 구체적으로 설정하고 이를 달성하기 위해 단계적인 계획, 시간 관리, 실천 방법의 전략을 세우는 매우 필수적이며. 또한 동기 부여를 제공하여 목표를 달성하는 과정에서의 자존감과 자신감을 높이는 효과가 있습니다.',
      '생활 습관 코칭은 바른생활 습관을 내재화하여 지속시키는 가장 핵심적인 역할을 할 것이며 국민에게 평균 기대수명까지 건강하고 높은 삶의 질을 제공하는 첨병 역할을 할 것입니다.',
    ],
  },
  {
    title: '생활 습관 코칭의 전망2',
    content: [
      '6070 세대 1700만명의 본격적인 실버 돌입으로 좋은 생활습관에 대한 필요성이 절실히 요구. MZ 세대들의 가장 중요한 자기개발을 건강관리로 인식.',
      '국내와 글로벌 웰니스 시장이 폭발적으로 성장하고 있으며 그 중심에 좋은 생활습관이 있음. 연평균12.1%성장. 글로벌 7297조. 대한민국124조 ( 국제웰니스연구소 2023)',
      '국가 재정의 대대적인 투자로 (사회복지예산122조 2024년도)정부운영 웰니스센터 및 좋은생활습관에 대한 활동이 강화되고 있음',
      '국가의 미래인 청소년에게 건강한 생활습관 조기교육을 함으로서 건강한 삶을 영위할 수 있는 원동력을 제공한다.',
    ],
  },
];

const ProspectSection = ({ section }: { section: any }) => {
  return (
    <div className='p-6 mb-8 bg-white rounded-lg shadow-md'>
      <h2 className='mb-4 text-2xl font-bold'>{section.title}</h2>
      {section.content.map((paragraph: any, index: number) => (
        <p key={index} className='mb-4 text-gray-700'>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

const CoachingProspectsPage = () => {
  return (
    <>
      <Head>
        <title>생활 습관 코칭의 전망 | 생활습관코칭</title>
        <meta
          name='description'
          content='생활 습관 코칭의 현재와 미래 전망에 대한 분석'
        />
      </Head>
      <div className='min-h-screen bg-gray-100'>
        <main className='container px-4 py-12 mx-auto'>
          <h1 className='mb-12 text-4xl font-bold text-center'>
            생활 습관 코칭의 전망
          </h1>

          <div className='max-w-3xl mx-auto'>
            {prospects.map((section, index) => (
              <ProspectSection key={index} section={section} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default CoachingProspectsPage;
