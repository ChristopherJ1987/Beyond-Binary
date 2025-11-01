import Navigation from '@/components/Navigation';
import Link from 'next/link';

// Sample tech records
const techRecords = [
  {
    id: "q-cli-exploration",
    title: "Exploring Amazon Q CLI: An AI-Powered Development Journey",
    description: "A deep dive into Amazon Q CLI capabilities, MCP servers, and how AI is transforming the development workflow.",
    tags: ["q-cli", "ai-ml", "development"],
    readTime: 8,
    date: "2025-10-14"
  },
  {
    id: "oracle-ai-study-guide",
    title: "Oracle AI Foundations Study Guide",
    description: "Comprehensive notes and insights from preparing for the Oracle AI Foundations certification exam.",
    tags: ["oracle-certification", "ai-ml", "study-guide"],
    readTime: 12,
    date: "2025-10-13"
  }
];

const genreInfo = {
  tech: {
    title: "Tech Records",
    description: "AI, ML, and development insights",
    emptyImage: "💻",
    bgClass: "bg-gray-900",
    contentBg: "bg-gray-50"
  },
  vegan: {
    title: "Vegan Records", 
    description: "Plant-based lifestyle and ethics",
    emptyImage: "🌱",
    bgClass: "bg-green-100",
    contentBg: "bg-white"
  },
  // Add other genres as needed
};

export async function generateStaticParams() {
  return [
    { slug: 'tech' },
    { slug: 'vegan' }
  ];
}

export default async function GenrePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const genre = genreInfo[slug as keyof typeof genreInfo] || genreInfo.tech;
  const records = slug === 'tech' ? techRecords : [];

  if (slug === 'tech') {
    return (
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        {/* Binary Code Background */}
        <div className="absolute inset-0 opacity-30 text-green-400 font-mono text-sm leading-relaxed overflow-hidden">
          <div className="absolute animate-pulse">
            {Array.from({ length: 40 }, (_, i) => (
              <div key={i} className="whitespace-nowrap">
                {Array.from({ length: 150 }, () => Math.random() > 0.5 ? '1' : '0').join(' ')}
              </div>
            ))}
          </div>
        </div>
        
        <Navigation />
        <div className="pt-20 relative z-10">
          <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-t-3xl min-h-screen">
            <div className="border-l-4 border-green-400 pl-6 mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Audiowide, sans-serif'}}>{genre.title}</h1>
              <p className="text-gray-600 text-lg">{genre.description}</p>
            </div>

            {records.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {records.map((record) => (
                  <Link
                    key={record.id}
                    href={`/records/${record.id}`}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-green-400"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {record.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-mono"
                          style={{fontFamily: 'Nova Mono, monospace'}}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-800" style={{fontFamily: 'Nova Mono, monospace'}}>
                      {record.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {record.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                      <span>{record.date}</span>
                      <span>{record.readTime} min read</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">{genre.emptyImage}</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2" style={{fontFamily: 'Syncopate, sans-serif'}}>No records found</h3>
                <p className="text-gray-500">Check back for future updates in this genre.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default genre page for non-tech genres
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-cyan-400 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-400 rounded-full blur-md animate-ping"></div>
      </div>
      
      <Navigation />
      <div className="pt-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-t-3xl min-h-screen">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 capitalize" style={{fontFamily: 'Audiowide, sans-serif'}}>{slug} Records</h1>
          
          <div className="text-center py-16">
            <div className="text-6xl mb-4">{genre.emptyImage}</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2" style={{fontFamily: 'Syncopate, sans-serif'}}>No records found</h3>
            <p className="text-gray-500">Check back for future updates in the {slug} genre.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
