import Navigation from '@/components/Navigation';

export default function AboutPage() {
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
        <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-t-3xl min-h-screen">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">About Beyond Binary</h1>
          
          <div className="prose prose-lg text-gray-600 space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-500">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Vision</h2>
              <p className="text-lg leading-relaxed">
                Welcome to my record collection - a curated space for discoveries, insights, and hidden gems that have impacted my life in meaningful ways. This collection serves as both a personal archive of important events and a learning resource, much like my Oracle AI Foundations Associate Exam Certification Study Guide.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Like browsing through vinyl records, each post is a unique find waiting to be explored. These records remind my future self of pivotal moments while sharing knowledge that might help others on similar journeys.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Journey</h2>
              <p className="text-lg leading-relaxed">
                At 38, my path to this hackathon has been anything but linear. For over a decade, I worked as a veterinary technician, caring for animals and learning the value of precision, empathy, and continuous learning. 
              </p>
              <p className="text-lg leading-relaxed mt-4">
                The transition from veterinary medicine to technology began when I enrolled in coding bootcamp - a leap of faith that opened up an entirely new world. Now, as I continue to navigate the technology field, I&apos;m still discovering where my interests and passions will ultimately lead me.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                This journey of constant learning and exploration is what Beyond Binary represents - moving beyond the simple binary choices of yes/no, on/off, to embrace the complex, nuanced, and beautifully messy reality of growth and discovery.
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What You&apos;ll Find Here</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">🔬 Tech Explorations</h3>
                  <p>AI, ML, development tools, and certification journeys</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">🌱 Life & Learning</h3>
                  <p>Personal growth, career transitions, and discoveries</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">📚 Study Resources</h3>
                  <p>Guides, notes, and insights from my learning adventures</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">🎯 Future Visions</h3>
                  <p>Dreams, goals, and maybe even that Iron Man suit</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Let&apos;s Connect</h2>
              <p className="text-lg leading-relaxed">
                Whether you&apos;re a fellow bootcamp graduate, someone exploring AI and technology, or just curious about this eclectic collection of thoughts and discoveries - welcome! 
              </p>
              <p className="text-lg leading-relaxed mt-4 font-medium text-indigo-600">
                Every record here represents a moment of learning, and I hope some of them resonate with your own journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
