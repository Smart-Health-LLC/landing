import { Background } from '../background/Background';
import { SimpleHeroTwoColmn } from '../hero/SimpleHeroTwoColumn';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-black" additionalClasses="h-dvh">
    <Section yPadding="pt-20">
      <SimpleHeroTwoColmn
        headline="Some fancy shmancy words"
        subHeadline="The easiest way to build a React landing page in seconds."
      />
    </Section>
    <img className="" src="/assets/images/mobile_watches.png" alt="" />
  </Background>
);

export { Hero };
