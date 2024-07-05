import { Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import AnimationSample from '@/components/AnimationSample';
import AnimateLogo from '@/components/AnimateLogo';
import FeaturedOn from '@/components/FeaturedOn';
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
