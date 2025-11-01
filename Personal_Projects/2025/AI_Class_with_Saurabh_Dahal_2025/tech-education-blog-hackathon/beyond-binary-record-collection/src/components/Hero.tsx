import Navigation from './Navigation';

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      <Navigation />
      
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-cyan-400 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-400 rounded-full blur-md animate-ping"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Beyond Binary
        </h1>
        <h2 className="text-2xl md:text-3xl text-cyan-300 mb-8 font-light">
          Record Collection
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Welcome to my collection of discoveries, insights, and hidden gems. 
          Like browsing through vinyl records, each post is a unique find waiting to be explored.
        </p>
      </div>
    </section>
  );
}
