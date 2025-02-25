import { Benefits } from '@/components/home/Benefits';
import { Faq } from '@/components/home/Faq';
import { Main } from '@/components/home/Main';
import { WorkoutCard } from '@/components/home/WorkoutCard';

export default function Home() {
  return (
    <section>
      <Main />
      <Benefits />
      <WorkoutCard />
      <Faq />
    </section>
  );
}
