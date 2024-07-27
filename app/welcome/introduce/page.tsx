import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const PresidentsMessagePage = () => {
  return (
    <>
      <Head>
        <title>회장단 인사말 | 국제생활습관코칭협회</title>
        <meta
          name='description'
          content='국제생활습관코칭협회 회장단의 인사말과 협회 설립 목적'
        />
      </Head>
      <div className='min-h-screen bg-gray-100'>
        <main className='container px-4 py-12 mx-auto'>
          <h1 className='mb-12 text-4xl font-bold text-center'>
            회장단 인사말
          </h1>

          <div className='max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md'>
            <div className='flex flex-col gap-8 md:flex-row'>
              <div className='md:w-1/3'>
                <Image
                  src='/assets/figures/person1.jpeg'
                  alt='협회장 이창현'
                  width={250}
                  height={400}
                  className='rounded-lg'
                />
              </div>
              <div className='md:w-2/3'>
                <p className='mb-4 text-gray-700'>
                  최근 AI는 의료서비스의 비약적인 발전을 가져 왔으며 우리나라의
                  소득과 지식수준의 향상은 건강에 대한 중요성을 나날이 부각
                  시키고 있습니다. 또한 건강한 음식 섭취와 규칙적인 운동으로
                  기대수명이 더욱 증대 되고 있습니다.
                </p>
                <p className='mb-4 text-gray-700'>
                  최근 WHO 보고서에서는 대한민국을 비롯한 선진국의 기대수명은
                  90세에 이르고 있어, 어느때 보다도 건강하고 높은 삶의질이
                  우선되고 있다는것을 실감 하고 있습니다.
                </p>
                <p className='mb-4 text-gray-700'>
                  따라서 좋은생활습관을 코칭하여 질환예방 및 최소화하고 삶의
                  질을 높여 기대수명까지 행복한 삶을 영위하기 위한 사명으로
                  &quot;국제생활습관코칭협회&quot;가 설립 되었습니다.
                </p>
                <p className='mb-4 text-gray-700'>
                  &quot;국제생활습관코칭협회&quot;는 지자체, 보건기관, 교육기관,
                  기업, 각종단체 등 좋은생활습관의 정착을 위해 협력할 것이며
                  이를 위한 다양한 프로그램을 제공할 것입니다.
                </p>
                <p className='font-semibold text-right'>협회장 이창현</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PresidentsMessagePage;
