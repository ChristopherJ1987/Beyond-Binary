import Link from 'next/link';

interface Record {
  slug: string;
  title: string;
  description: string;
  genre: string;
  tags: string[];
  readTime: number;
  date: string;
  featured?: boolean;
}

// Sample data - will be replaced with real data later
const sampleRecords: Record[] = [
  {
    slug: "q-cli-exploration",
    title: "Exploring Amazon Q CLI: An AI-Powered Development Journey",
    description: "A deep dive into Amazon Q CLI capabilities, MCP servers, and how AI is transforming the development workflow.",
    genre: "tech",
    tags: ["q-cli", "ai-ml", "development"],
    readTime: 8,
    date: "2025-10-14",
    featured: true
  },
  {
    slug: "oracle-ai-study-guide",
    title: "Oracle AI Foundations Study Guide",
    description: "Comprehensive notes and insights from preparing for the Oracle AI Foundations certification exam.",
    genre: "tech",
    tags: ["oracle-certification", "ai-ml"],
    readTime: 12,
    date: "2025-10-13"
  }
];

export default function RecordCards() {
  const featuredRecord = sampleRecords.find(record => record.featured);
  const recentRecords = sampleRecords.filter(record => !record.featured).slice(0, 3);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white" style={{fontFamily: 'Audiowide, sans-serif'}}>
          Latest Records
        </h2>

        {/* Featured Record */}
        {featuredRecord && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-700" style={{fontFamily: 'Syncopate, sans-serif'}}>Featured Record</h3>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredRecord.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                    style={{fontFamily: 'Nova Mono, monospace'}}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4" style={{fontFamily: 'Nova Mono, monospace'}}>
                {featuredRecord.title}
              </h4>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                {featuredRecord.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm">
                  <span>📅 {featuredRecord.date}</span>
                  <span>⏱️ {featuredRecord.readTime} min read</span>
                  <span style={{fontFamily: 'Nova Mono, monospace'}}>🏷️ {featuredRecord.genre}</span>
                </div>
                <Link 
                  href={`/records/${featuredRecord.slug}`}
                  className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center sm:text-left"
                  style={{fontFamily: 'Nova Mono, monospace'}}
                >
                  Read Record
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Recent Records Grid */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-700" style={{fontFamily: 'Syncopate, sans-serif'}}>Recent Records</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentRecords.map((record) => (
              <Link
                key={record.slug}
                href={`/records/${record.slug}`}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {record.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      style={{fontFamily: 'Nova Mono, monospace'}}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-800 line-clamp-2" style={{fontFamily: 'Nova Mono, monospace'}}>
                  {record.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {record.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <span>📅 {record.date}</span>
                    <span>⏱️ {record.readTime} min</span>
                  </div>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium" style={{fontFamily: 'Nova Mono, monospace'}}>
                    {record.genre}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
