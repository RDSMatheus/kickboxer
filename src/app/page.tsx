import { Benefits } from '@/components/home/Benefits';
import { Main } from '@/components/home/Main';
import { WorkoutCard } from '@/components/home/WorkoutCard';

export default function Home() {
  return (
    <section>
      <Main />
      <Benefits />
      <WorkoutCard />
    </section>
  );
}
