'use client';

import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ImageActionBanner } from '@/components/ImageActionBanner/ImageActionBanner';
import CardsCarousel from '../components/CardsCarousel/CardsCarousel';
import { TableReviews } from '../components/TableReviews/TableReviews';
import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu/HeaderMegaMenu';
import { HeroImageRight } from '@/components/HeroImageRight/HeroImageRight';
import { Geo } from '@/components/Geo/Geo';

export default function HomePage() {
  return (
    <>
<HeaderMegaMenu />
<HeaderSimple />
      <Welcome />
      <HeroImageRight />
      <CardsCarousel />
      <ColorSchemeToggle />
      <ImageActionBanner />
      <TableReviews />
      <Geo />
    </>
  );
}
