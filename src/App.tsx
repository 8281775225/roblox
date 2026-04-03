/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Gamepad2, Zap, Users, Trophy, ChevronRight, Star, Shield, Rocket } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neon-blue/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Gamepad2 className="text-neon-blue w-8 h-8" />
          <span className="font-display font-bold text-xl tracking-tighter neon-text-blue">NEON NEXUS</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-neon-blue transition-colors font-medium">Features</a>
          <a href="#gallery" className="text-gray-300 hover:text-neon-pink transition-colors font-medium">Gallery</a>
          <a href="#stats" className="text-gray-300 hover:text-neon-green transition-colors font-medium">Stats</a>
          <a 
            href="https://www.roblox.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-neon-blue text-black font-bold rounded-full hover:neon-glow-blue transition-all transform hover:scale-105"
          >
            PLAY NOW
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-pink/20 rounded-full blur-[120px]" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1 rounded-full border border-neon-purple/50 text-neon-purple text-sm font-bold mb-6 tracking-widest uppercase">
          The Ultimate Roblox Experience
        </span>
        <h1 className="text-6xl md:text-8xl font-display font-black mb-6 tracking-tighter">
          STEP INTO THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink neon-text-blue">
            NEON NEXUS
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Battle, build, and explore in a vibrant cyberpunk world. Join millions of players in the most visually stunning Roblox game ever created.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="https://www.roblox.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 bg-neon-blue text-black font-black text-lg rounded-xl hover:neon-glow-blue transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            PLAY ON ROBLOX <ChevronRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/watch?v=YU2pLJiptzA"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 border-2 border-neon-pink text-neon-pink font-black text-lg rounded-xl hover:bg-neon-pink/10 transition-all flex items-center justify-center cursor-pointer"
          >
            WATCH TRAILER
          </motion.a>
        </div>
      </motion.div>
    </div>

    {/* Decorative Grid */}
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
         style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, colorClass }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-${colorClass}/50 transition-all group`}
  >
    <div className={`w-14 h-14 rounded-xl bg-black border border-${colorClass}/30 flex items-center justify-center mb-6 group-hover:neon-glow-${colorClass} transition-all`}>
      <Icon className={`w-8 h-8 text-${colorClass}`} />
    </div>
    <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const Features = () => (
  <section id="features" className="py-24 bg-black relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-black mb-4">GAME FEATURES</h2>
        <div className="h-1 w-24 bg-neon-blue mx-auto rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Zap} 
          title="High Speed Combat" 
          description="Experience fluid, fast-paced action with unique abilities and neon-powered weapons."
          colorClass="neon-blue"
        />
        <FeatureCard 
          icon={Users} 
          title="Massive Multiplayer" 
          description="Team up with friends or compete in 50-player arenas for ultimate dominance."
          colorClass="neon-pink"
        />
        <FeatureCard 
          icon={Trophy} 
          title="Global Rankings" 
          description="Climb the leaderboards and earn exclusive neon skins and badges."
          colorClass="neon-green"
        />
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">WORLD GALLERY</h2>
          <p className="text-gray-400">Explore the breathtaking landscapes of Neon Nexus.</p>
        </div>
        <button className="text-neon-pink font-bold flex items-center gap-2 hover:underline">
          VIEW ALL SCREENSHOTS <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
          >
            <img 
              src={`https://picsum.photos/seed/roblox${i}/800/450`} 
              alt={`Gallery ${i}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-bold tracking-wider">SECTOR {i * 100}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section id="stats" className="py-24 bg-black border-y border-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-display font-black text-neon-blue mb-2">10M+</div>
          <div className="text-gray-500 uppercase tracking-widest text-sm font-bold">Visits</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-display font-black text-neon-pink mb-2">98%</div>
          <div className="text-gray-500 uppercase tracking-widest text-sm font-bold">Rating</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-display font-black text-neon-green mb-2">50K</div>
          <div className="text-gray-500 uppercase tracking-widest text-sm font-bold">Active</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-display font-black text-neon-purple mb-2">200+</div>
          <div className="text-gray-500 uppercase tracking-widest text-sm font-bold">Items</div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-black border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Gamepad2 className="text-neon-blue w-6 h-6" />
          <span className="font-display font-bold text-lg tracking-tighter">NEON NEXUS</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Discord</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">YouTube</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Roblox Group</a>
        </div>
        <p className="text-gray-600 text-sm">
          © 2026 Neon Nexus Studios. Not affiliated with Roblox Corp.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-neon-blue selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Gallery />
        
        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-pink/10" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8">READY TO JOIN THE NEXUS?</h2>
            <motion.a
              href="https://www.roblox.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 242, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-6 bg-white text-black font-black text-2xl rounded-2xl transition-all cursor-pointer"
            >
              PLAY NOW FOR FREE
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
