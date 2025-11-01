import Hero from '@/components/Hero';
import GenreCards from '@/components/GenreCards';
import RecordCards from '@/components/RecordCards';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <GenreCards />
      <RecordCards />
    </main>
  );
}
