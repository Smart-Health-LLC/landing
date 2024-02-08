import Footer from '../footer/Footer';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {/* <Hero
      // headline="Payments tool for software companies"
      // subHeadline="From checkout to global sales tax compliance, companies around the
      // world use Flowbite to simplify their payment stack."
    /> */}
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
