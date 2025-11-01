import Navigation from './Navigation';

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <Navigation />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/cyber_wonder_bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Enhanced Cyber Light Trails */}
      <div className="absolute inset-0 z-10 opacity-60">
        {/* Horizontal light streaks */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-80 animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse delay-2000"></div>
        
        {/* Diagonal light trails */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-60 animate-pulse delay-500 transform rotate-12"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-400 to-transparent opacity-70 animate-pulse delay-1500 transform -rotate-12"></div>
        
        {/* Moving light particles */}
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-cyan-400 rounded-full blur-sm animate-ping shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-1/4 right-20 w-2 h-2 bg-red-400 rounded-full blur-sm animate-ping delay-700 shadow-lg shadow-red-400/50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-cyan-300 rounded-full blur-sm animate-ping delay-1200 shadow-lg shadow-cyan-300/50"></div>
        
        {/* Enhanced glow effects */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-normal text-white mb-6 tracking-tight uppercase drop-shadow-2xl" style={{fontFamily: 'Silkscreen, monospace'}}>
          Beyond Binary
        </h1>
        <h2 className="text-2xl md:text-3xl text-red-400 mb-8 font-bold uppercase tracking-widest drop-shadow-lg" style={{fontFamily: 'Megrim, sans-serif'}}>
          Record Collection
        </h2>
      </div>
    </section>
  );
}
