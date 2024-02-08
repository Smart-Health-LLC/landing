import Footer from '../footer/Footer';
import Hero from '../hero/Hero';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Footer />
  </div>
);

export { Base };
