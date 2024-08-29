import React from "react";
import Head from "next/head";
import Image from "next/image";
const educationContent = [
  {
    title: "생활습관코치로서의 필요한 전문 지식",
    items: [
      "국제생활습관코칭 개론",
      "음양은 우리 몸을 결정한다",
      "운동은 성장연장의 비밀",
      "회복과 면역력의 열쇠 수면",
      "마음과 건강과의 관계",
      "영혼에 깃드는 앎, 중독",
      "관계는 행복의 근원",
      "성공에도 필요한 습관",
      "질병발생의 다양한 기전",
    ],
  },
  {
    title: "코칭의 기술",
    items: [
      "생코 Chat GPT기반 자가진단",
      "코칭 및 상담 기법",
      "심리평가 도구의 활용",
    ],
  },
];

const EducationSection = ({ section }: { section: any }) => {
  return (
    <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-bold">{section.title}</h2>
      <ul className="pl-5 space-y-2 list-disc">
        {section.items.map((item: any, index: number) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const EducationContentPage = () => {
  return (
    <>
      <Head>
        <title>생활습관코칭 교육 내용 | 생활습관코칭</title>
        <meta
          name="description"
          content="생활습관코치 양성을 위한 전문 교육 내용 및 등록 정보"
        />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <main className="container px-4 py-12 mx-auto">
          <h1 className="mb-12 text-4xl font-bold text-center">
            생활습관코칭 교육 내용
          </h1>

          <div className="max-w-3xl mx-auto">
            <div className="p-6 mb-6 bg-white rounded-lg shadow-md relative h-[400px] sm:h-[700px]">
              <Image
                src={"/assets/edu/1.jpeg"}
                alt="education"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="p-6 mb-6 bg-white rounded-lg shadow-md relative h-[400px] sm:h-[700px]">
              <Image
                src={"/assets/edu/2.jpeg"}
                alt="education"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            {educationContent.map((section, index) => (
              <EducationSection key={index} section={section} />
            ))}

            <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-bold">교육 등록 방법</h2>
              <p className="mb-2">구글 폼 양식으로 신청</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc9NiYfcDZ-ApPrQmftOW5MTJrYmi3Q3SKBDLJ4DgDXV4uNWA/viewform?usp=sharing"
                className="block mb-2 text-blue-600 underline"
              >
                등록 링크
              </a>
              <p>전화 신청: 010-8833-3393</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-bold">교육비</h2>
              <p className="mb-2">2급(10시간) 33만원 1급(20시간) 99만원</p>
              <p className="mb-2">2급 & 1급 통합과정 143만원</p>
              <p className="mb-2">
                입금계좌번호: 국민은행 국제생활습관코칭협회
              </p>
              <p>852501-04-215897</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default EducationContentPage;
