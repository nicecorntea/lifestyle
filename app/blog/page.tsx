import { categories, articles } from './_assets/content';
import CardArticle from './_assets/components/CardArticle';
import CardCategory from './_assets/components/CardCategory';
import config from '@/config';
import { getSEOTags } from '@/libs/seo';

export const metadata = getSEOTags({
  title: `${config.appName} 뉴스`,
  description: '국제생활습관의학협회 최신 소식을 모아놓고 있습니다.',
  canonicalUrlRelative: '/blog',
});

export default async function Blog() {
  const articlesToDisplay = articles
    .sort(
      (a, b) =>
        new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
    )
    .slice(0, 6);
  return (
    <>
      <section className='max-w-xl mx-auto mt-12 mb-24 text-center md:mb-32'>
        {/* <h1 className='mb-6 text-3xl font-extrabold tracking-tight lg:text-5xl'>
          {config.appName} 소식
        </h1> */}
        <p className='text-lg leading-relaxed opacity-80'>
          국제생활습관의학협회 최신 소식
        </p>
      </section>

      <section className='grid gap-8 mb-24 lg:grid-cols-2 md:mb-32'>
        {articlesToDisplay.map((article, i) => (
          <CardArticle
            article={article}
            key={article.slug}
            isImagePriority={i <= 2}
          />
        ))}
      </section>

      <section>
        <p className='mb-8 text-2xl font-bold tracking-tight text-center lg:text-4xl md:mb-12'>
          Browse articles by category
        </p>

        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {categories.map((category) => (
            <CardCategory key={category.slug} category={category} tag='div' />
          ))}
        </div>
      </section>
    </>
  );
}
