import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, link: 'https://github.com/BasrengCintaku' },
    { icon: Instagram, link: 'https://instagram.com/diyooow._' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
      /* Background Sage & Emerald Gradient */
      bg-gradient-to-br from-[#f0f9f1] via-[#d1e9d6] to-[#e2f3e9]
      dark:from-[#04140c] dark:via-[#061a11] dark:to-[#0a2a1b]"
    >
      {/* 3D SCENE */}
      <ThreeScene />

      {/* PARALLAX BACKGROUND CASTLE (Dibuat lebih subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 dark:opacity-20 bg-cover bg-center scale-110 blur-[2px]"
          style={{
            backgroundImage:
              "url('https://www.pixelstalk.net/wp-content/uploads/images7/Fantasy-Landscape-HD-Wallpaper-Free-download.png')",
          }}
        />
        {/* Soft Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f0f9f1] via-transparent to-transparent dark:from-[#04140c]" />
      </div>

      {/* FOG EFFECT (Kristal Energi) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ['-20%', '20%', '-20%'], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 w-full h-full bg-[#86efac]/20 dark:bg-[#1a3c2a]/30 blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* TEXT CONTENT */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6
              bg-[#2d5a43] text-[#f0f9f1] dark:bg-[#a8d5ba] dark:text-[#061a11] shadow-lg shadow-emerald-900/10"
            >
              <Sparkles size={12} className="animate-pulse" />
              Selamat Datang di Kerajaan
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight
              text-[#1a3c2a] dark:text-[#e2f3e9]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Aldiof <br className="hidden md:block" />
              <span className="text-[#3d7a5a] dark:text-[#86efac]">Basten</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0
              text-[#2d5a43]/80 dark:text-[#a8d5ba]/80 leading-relaxed"
            >
              Arsitek digital yang membangun aplikasi web sekuat istana 
              dan seindah karya seni, menggabungkan <span className="text-[#1a3c2a] dark:text-[#86efac] font-bold">Teknologi</span> dengan <span className="text-[#1a3c2a] dark:text-[#86efac] font-bold">Estetika</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8"
            >
              <Button
                size="lg"
                className="rounded-2xl px-8 py-6 font-bold tracking-widest text-xs
                bg-[#2d5a43] hover:bg-[#1a3c2a] text-[#f0f9f1] transition-all duration-300
                dark:bg-[#a8d5ba] dark:hover:bg-[#86efac] dark:text-[#061a11] shadow-xl shadow-emerald-900/20"
              >
                PROJECTS
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl px-8 py-6 font-bold tracking-widest text-xs
                border-2 border-[#2d5a43] text-[#2d5a43] hover:bg-[#2d5a43] hover:text-white
                dark:border-[#a8d5ba] dark:text-[#a8d5ba] dark:hover:bg-[#a8d5ba] dark:hover:text-[#061a11]
                transition-all duration-300 bg-transparent"
              >
                CONTACT
              </Button>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center justify-center md:justify-start gap-5"
            >
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl transition-all border border-[#a8d5ba]/30
                  bg-white/50 dark:bg-[#163d29]/50 backdrop-blur-md
                  hover:bg-[#2d5a43] hover:text-[#f0f9f1] dark:hover:bg-[#a8d5ba] dark:hover:text-[#061a11]"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <item.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* PROFILE IMAGE (Visual Megah) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Dekorasi Bingkai Kristal */}
            <div className="absolute -inset-4 border-2 border-[#a8d5ba]/30 rounded-[3rem] animate-pulse pointer-events-none" />
            <div className="absolute -inset-8 border border-[#a8d5ba]/10 rounded-[4rem] pointer-events-none" />
            
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-[3.5rem] overflow-hidden 
              border-[8px] border-white/80 dark:border-[#163d29]/80 shadow-[0_30px_60px_rgba(26,60,42,0.3)]"
            >
              <img
                src="/profile.jpg"
                alt="Aldiof Basten"
                className="w-full h-full object-cover"
              />
              
              {/* Badge di atas Foto */}
              <div className="absolute top-4 right-4 p-3 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30">
                <span className="text-xl">👑</span>
              </div>
            </motion.div>

            {/* Floating Tag */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-6 md:-left-12 px-6 py-3 rounded-2xl
              bg-white/90 dark:bg-[#163d29] backdrop-blur-xl shadow-2xl border border-[#a8d5ba]/30"
            >
              <p className="font-['Cinzel'] font-bold text-[#1a3c2a] dark:text-[#86efac]">THE KING</p>
              <p className="text-[10px] tracking-widest font-bold opacity-60 text-[#2d5a43] dark:text-[#a8d5ba]">DEVELOPER</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* SCROLL BUTTON (Megah) */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity text-[#2d5a43] dark:text-[#a8d5ba]">
          Explore
        </span>
        <div className="p-3 rounded-full bg-white/50 dark:bg-[#163d29]/50 backdrop-blur-md border border-[#a8d5ba]/40 animate-bounce">
          <ArrowDown className="h-5 w-5 text-[#2d5a43] dark:text-[#a8d5ba]" />
        </div>
      </motion.button>
    </section>
  );
}