import MobileFeatures from '@/sections/mobile/MobileFeatures';

import { Meta } from '../layout/Meta';
import Footer from '../sections/footer/Footer';
import Hero from '../sections/hero/Hero';
import { AppConfig } from '../utils/AppConfig';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <MobileFeatures />
    <Footer />
  </div>
);

export { Base };
