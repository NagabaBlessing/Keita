import { Hero } from '../components/Hero';
import { MissionVision } from '../components/MissionVision';
import { CoreValues } from '../components/CoreValues';
import { Services } from '../components/Services';
import { Leadership } from '../components/Leadership';
import { Clients } from '../components/Clients';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <MissionVision />
      <CoreValues />
      <Services />
      <Leadership />
      <Clients />
      <Contact />
    </>
  );
}
