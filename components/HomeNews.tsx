import React from 'react';

function HomeNews() {
  const news = [
    {
      title: '국제생활습관협회, 첫 발을 내딛다',
      description:
        '오늘 국제생활습관협회가 공식 창단식을 갖고, 전 세계인의 건강하고 균형 잡힌 생활습관을 촉진하기 위한 첫 발걸음을 내디뎠습니다. 이번 창단식에는 각국의 건강 전문가들이 참석하여 협회의 비전과 목표를 공유했습니다.',
    },
    {
      title: '국제생활습관협회, 첫 기수 회원 모집 시작',
      description:
        '국제생활습관협회가 첫 기수 회원을 모집합니다. 전 세계 다양한 생활습관 개선 프로그램에 참여할 수 있는 기회를 제공하며, 참가자들은 건강한 라이프스타일을 선도하는 글로벌 네트워크의 일원이 될 수 있습니다. 모집 기간은 8월 1일부터 8월 31일까지입니다.',
    },
    {
      title: '국제생활습관협회, 첫 워크숍 성공리에 마쳐',
      description:
        '국제생활습관협회가 첫 번째 워크숍을 성공적으로 개최했습니다. 이번 워크숍에서는 건강 전문가들이 참여하여 다양한 생활습관 개선 방법을 공유하고, 참가자들은 실질적인 건강 관리 팁을 배울 수 있는 기회를 가졌습니다. 워크숍에 대한 참가자들의 만족도가 높아 향후 정기적인 개최가 기대됩니다.',
    },
  ];
  return (
    <section
      className='grid gap-5 px-5 py-24 mx-auto md:grid-cols-3 md:py-32 max-w-7xl bg-base-100'
      id='news'
    >
      {news.map((newsItem, i) => (
        <div className='h-full shadow-xl card bg-base-100' key={i}>
          <figure>
            {/* <img
              src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
              alt='Shoes'
            /> */}
            <div className='w-full h-52 skeleton'></div>
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{newsItem.title.slice(0, 20)}</h2>
            <p>{newsItem.description.slice(0, 50)}</p>
            <div className='justify-end card-actions'>
              <button className='btn btn-primary'>보러가기</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default HomeNews;
