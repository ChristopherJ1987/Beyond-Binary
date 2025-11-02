import Hero from '@/components/Hero';
import GenreCards from '@/components/GenreCards';
import RecordCards from '@/components/RecordCards';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <div className="relative bg-black/20 backdrop-blur-[1px]">
        <GenreCards />
        <RecordCards />
      </div>
    </main>
  );
}
