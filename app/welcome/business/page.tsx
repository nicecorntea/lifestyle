import FeaturesListicle from '@/components/FeaturesListicle';
function Page() {
  return (
    <div className='w-full space-y-10'>
      <h1 className='mb-12 text-2xl font-extrabold tracking-tight text-center sm:text-3xl md:text-6xl md:mb-24'>
        주요사업
      </h1>
      <FeaturesListicle />
    </div>
  );
}

export default Page;
