'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface Record {
  id: string;
  title: string;
  description: string;
  genre: string;
  tags: string[];
  readTime: number;
  date: string;
}

// Sample data - will be replaced with real data later
const allRecords: Record[] = [
  {
    id: "q-cli-exploration",
    title: "Exploring Amazon Q CLI: An AI-Powered Development Journey",
    description: "A deep dive into Amazon Q CLI capabilities, MCP servers, and how AI is transforming the development workflow.",
    genre: "tech",
    tags: ["q-cli", "ai-ml", "development"],
    readTime: 8,
    date: "2025-10-14"
  },
  {
    id: "oracle-ai-study-guide",
    title: "Oracle AI Foundations Study Guide",
    description: "Comprehensive notes and insights from preparing for the Oracle AI Foundations certification exam.",
    genre: "tech",
    tags: ["oracle-certification", "ai-ml", "study-guide"],
    readTime: 12,
    date: "2025-10-13"
  },
  {
    id: "iron-man-ai-vision",
    title: "Building an Iron Man Suit: The AI Vision",
    description: "Exploring how current AI, ML, and robotics technologies could theoretically create Tony Stark's dream.",
    genre: "tech",
    tags: ["ai-ml", "robotics", "futurism"],
    readTime: 6,
    date: "2025-10-12"
  }
];

const genres = ["all", "tech", "vegan", "cooking", "gardening", "animals", "music", "movies", "gaming", "art", "travel"];

export default function RecordsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const filteredRecords = allRecords
    .filter(record => {
      const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           record.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           record.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesGenre = selectedGenre === "all" || record.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      if (sortBy === "recent") return new Date(b.date).getTime() - new Date(a.date).getTime();
      return a.title.localeCompare(b.title);
    });

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
        <h1 className="text-4xl font-bold text-gray-800 mb-8">All Records</h1>
        
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="🔍 Search records by title, description, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-500 bg-white shadow-sm"
          />
          
          <div className="flex gap-4">
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white shadow-sm font-medium"
            >
              {genres.map(genre => (
                <option key={genre} value={genre} className="text-gray-800">
                  {genre === "all" ? "All Genres" : genre.charAt(0).toUpperCase() + genre.slice(1)}
                </option>
              ))}
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white shadow-sm font-medium"
            >
              <option value="recent" className="text-gray-800">Most Recent</option>
              <option value="alphabetical" className="text-gray-800">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          {filteredRecords.length} record{filteredRecords.length !== 1 ? 's' : ''} found
        </p>

        {/* Records Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecords.map((record) => (
            <Link
              key={record.id}
              href={`/records/${record.id}`}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {record.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800 line-clamp-2">
                {record.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                {record.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <span>📅 {record.date}</span>
                  <span>⏱️ {record.readTime} min</span>
                </div>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                  {record.genre}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredRecords.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No records found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}
