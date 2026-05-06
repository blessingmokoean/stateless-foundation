import { motion } from 'motion/react';
import { Heart, Music, Sun, Mail, Phone, Globe, PlayCircle } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-brand-500 p-2 rounded-full text-white">
              <Globe className="w-6 h-6" />
            </div>
            <span className="font-serif font-bold text-xl md:text-2xl text-brand-900 leading-tight">
              The Stateless<br />Foundation
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#mission" className="hidden md:block text-gray-600 hover:text-brand-600 font-medium transition-colors">Our Mission</a>
            <a href="#impact" className="hidden md:block text-gray-600 hover:text-brand-600 font-medium transition-colors">Impact</a>
            <a href="#contact" className="hidden md:block text-gray-600 hover:text-brand-600 font-medium transition-colors">Contact</a>
            <a 
              href="#donate" 
              className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              <span>Donate</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=2000" 
          alt="Children playing music" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/90 to-brand-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-ocean-600 font-bold uppercase tracking-wider text-sm mb-4 block">Music Therapy For Children</span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-900 mb-6 leading-tight">
            Touching Souls Melodies
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Teaching children how to play musical instruments for the therapeutic detoxing of bad energy, bringing good mood, joy, and healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#donate" 
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-brand-500/30"
            >
              <Heart className="w-5 h-5" />
              Make a Donation
            </a>
            <a 
              href="#mission" 
              className="bg-white hover:bg-gray-50 text-brand-900 border border-brand-200 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5" />
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Mission() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-900 mb-6">Detoxing Bad Energy, One Note at a Time.</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At The Stateless Foundation, we believe in the profound healing power of music. Many children carry the weight of stress, trauma, or negative energy that they don't know how to express.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              By teaching them how to play musical instruments, we provide a safe, creative outlet. This practice acts as a therapeutic detox—clearing bad energy and replacing it with a lasting good mood, self-confidence, and peace.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-ocean-50 p-3 rounded-full text-ocean-600 mt-1">
                  <Music className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-brand-900">Therapeutic Healing</h3>
                  <p className="text-gray-600">Instruments become tools for emotional release and expression.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-full text-brand-600 mt-1">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-brand-900">Uplifting Spirits</h3>
                  <p className="text-gray-600">Group playing and melody creation brings community and a naturally elevated mood.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1593697821033-030301a2f646?auto=format&fit=crop&q=80&w=1200" 
                alt="Child playing guitar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ocean-900/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-100 rounded-full -z-10 blur-3xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactAndDonate() {
  return (
    <section id="contact" className="py-20 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div id="donate">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Support Our Cause</h2>
            <p className="text-brand-100 text-lg mb-8 leading-relaxed">
              Every instrument donated and every lesson funded helps a child detoxify bad energy and find joy through music. Stand with us to bring peace through music.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="font-serif text-2xl font-semibold mb-4">Make a Donation</h3>
              <p className="text-sm text-brand-100 mb-6">Your contribution goes directly towards buying instruments and funding therapy sessions for children in need.</p>
              <button className="w-full bg-brand-500 hover:bg-brand-400 text-brand-900 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Donate Now
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-brand-100 text-lg mb-8 leading-relaxed">
              Want to volunteer, donate an instrument, or learn more about our programs? We'd love to hear from you.
            </p>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-full">
                  <Mail className="w-8 h-8 text-brand-100" />
                </div>
                <div>
                  <p className="text-sm text-brand-200 uppercase tracking-wider font-semibold mb-1">Email Us</p>
                  <a href="mailto:blessingmokoean@gmail.com" className="text-xl font-medium hover:text-brand-400 transition-colors">
                    blessingmokoean@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-full">
                  <Phone className="w-8 h-8 text-brand-100" />
                </div>
                <div>
                  <p className="text-sm text-brand-200 uppercase tracking-wider font-semibold mb-1">Call Us</p>
                  <a href="tel:0663257362" className="text-xl font-medium hover:text-brand-400 transition-colors">
                    066 325 7362
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Globe className="w-6 h-6 text-brand-500" />
          <span className="font-serif font-bold text-xl text-white">The Stateless Foundation</span>
        </div>
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} The Stateless Foundation. All rights reserved.<br/>
          Bringing peace, good mood, and energy detox through music.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <ContactAndDonate />
      </main>
      <Footer />
    </div>
  );
}
