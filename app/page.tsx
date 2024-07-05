import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import HomeFeatures from '@/components/HomeFeatures';
import HomeNews from '@/components/HomeNews';
import HomeHero from '@/components/HomeHero';
export default function Page() {
  return (
    <>
      <main>
        {/* <Hero /> */}
        <HomeHero />
        {/* TODO */}
        {/* <FeaturedOn /> */}
        {/* <div>파트너사</div> */}
        <HomeFeatures />
        <HomeNews />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
