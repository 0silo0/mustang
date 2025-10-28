// app/page.tsx

import Advantages from '@/components/Home/Advantages';
import Services from '@/components/Home/Services';
import SpecialEquipmentCatalog from '@/components/Home/SpecialEquipmentCatalog';
import SwiperSection from '@/components/Home/SwiperSection';
import UrgentOrder from '@/components/Home/UrgentOrder';
import WhyProfitable from '@/components/Home/WhyProfitable';
import WorkProcess from '@/components/Home/WorkProcess';

export default function HomePage() {
  return (
    <main>
      <SwiperSection />
      <WhyProfitable />
      <SpecialEquipmentCatalog />
      <UrgentOrder />
      <Services />
      <Advantages />
      <WorkProcess />
    </main>
  );
}