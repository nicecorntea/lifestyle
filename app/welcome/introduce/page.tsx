import Image from 'next/image';

function Page() {
  return (
    <div className='flex flex-col w-full h-full space-y-10'>
      <h1 className='mb-12 text-2xl font-extrabold tracking-tight text-center sm:text-3xl md:text-6xl md:mb-24'>
        협회장인사말
      </h1>
      {/* <h1 className='text-4xl text-center'>협회장인사말</h1> */}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 auto-rows-fr'>
        <div className='relative bg-gray-300 sm:h-[800px] bg-opacity-70'>
          <Image
            src={'/assets/figures/person1.jpeg'}
            alt='person'
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className='font-semibold sm:text-xl text-base-content/80'>
          안녕하십니까, 국제생활습관협회 회장으로서 여러분께 인사드립니다.
          생활습관의학을 기반으로 한 생활습관 코칭은 시민들이 올바른 습관을
          형성하도록 깊이 있는 학습을 제공합니다. 이를 통해 우리는 건강한 육체와
          맑은 정신을 유지하며, 현대인의 평균 수명을 증가시키고 삶의 질을
          향상시키는 목표를 실현하고자 합니다. 또한, 질병 발생을 최소화하고
          예방함으로써 개인과 공동체의 웰빙을 극대화할 수 있습니다. 국제
          생활습관 코칭 협회는 이러한 사명을 가지고 생활습관의 중요성을
          강조하며, 시민들이 올바른 생활습관을 형성할 수 있도록 최선을 다하고
          있습니다. 여러분의 적극적인 참여와 성원이 우리 협회가 이 목표를
          달성하는 데 큰 힘이 됩니다. 앞으로도 지속적인 관심과 지원을
          부탁드리며, 함께 건강한 미래를 만들어 갑시다. 감사합니다.
          국제생활습관협회 회장
        </div>
      </div>
    </div>
  );
}

export default Page;
