import MobileFeatures from '@/mobile/MobileFeatures';

import Footer from '../footer/Footer';
import Hero from '../hero/Hero';
import { Meta } from '../layout/Meta';
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
