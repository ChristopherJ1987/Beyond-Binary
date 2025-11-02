import Link from 'next/link';

interface Genre {
  name: string;
  slug: string;
  icon: string;
  recordCount: number;
  description: string;
}

const genres: Genre[] = [
  {
    name: "Tech",
    slug: "tech",
    icon: "💻",
    recordCount: 2,
    description: "AI, ML, and development insights"
  },
  {
    name: "Vegan",
    slug: "vegan",
    icon: "🌱",
    recordCount: 0,
    description: "Plant-based lifestyle and ethics"
  },
  {
    name: "Cooking",
    slug: "cooking",
    icon: "👨‍🍳",
    recordCount: 0,
    description: "Recipes and culinary adventures"
  },
  {
    name: "Gardening",
    slug: "gardening",
    icon: "🌿",
    recordCount: 0,
    description: "Growing green spaces"
  },
  {
    name: "Animals",
    slug: "animals",
    icon: "🐾",
    recordCount: 0,
    description: "Our furry and feathered friends"
  },
  {
    name: "Music",
    slug: "music",
    icon: "🎵",
    recordCount: 0,
    description: "Sounds that move the soul"
  },
  {
    name: "Movies",
    slug: "movies",
    icon: "🎬",
    recordCount: 0,
    description: "Stories on the silver screen"
  },
  {
    name: "Gaming",
    slug: "gaming",
    icon: "🎮",
    recordCount: 0,
    description: "Digital worlds and adventures"
  },
  {
    name: "Art",
    slug: "art",
    icon: "🎨",
    recordCount: 0,
    description: "Creative expressions and beauty"
  },
  {
    name: "Travel",
    slug: "travel",
    icon: "✈️",
    recordCount: 0,
    description: "Journeys and discoveries"
  }
];

export default function GenreCards() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white" style={{fontFamily: 'Audiowide, sans-serif'}}>
          Explore by Genre
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {genres.map((genre) => (
            <Link
              key={genre.slug}
              href={`/genre/${genre.slug}`}
              className="group cursor-pointer bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="text-center flex flex-col h-full">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {genre.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base" style={{fontFamily: 'Syncopate, sans-serif'}}>
                  {genre.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 leading-relaxed flex-grow">
                  {genre.description}
                </p>
                <span className="inline-block px-2 md:px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium mt-auto" style={{fontFamily: 'Nova Mono, monospace'}}>
                  {genre.recordCount} records
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
