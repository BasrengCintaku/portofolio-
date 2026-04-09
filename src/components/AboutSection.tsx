import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, ChevronDown, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const stats = [
    { icon: Code2, value: '10+', label: 'Projects' },
    { icon: Video, value: '10+', label: 'Content' },
  ];

  const accordion = [
    {
      title: 'Siapa Saya?',
      content:
        'Saya adalah Fullstack Developer yang fokus membangun web modern dengan pengalaman UI/UX yang nyaman dan performa tinggi.',
    },
    {
      title: 'Apa yang Saya Kerjakan?',
      content:
        'Saya mengembangkan aplikasi web, UI interaktif, serta membuat konten edukasi seputar teknologi dan programming.',
    },
    {
      title: 'Goals Saya?',
      content:
        'Membangun produk digital yang impactful dan bisa digunakan banyak orang, serta berkembang menjadi developer kelas global.',
    },
    {
      title: 'Apa Hobi Saya?',
      content: 'Kadang ngoding, kadang main game... biar balance kayak raja 😏',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden
      bg-gradient-to-b from-[#d1e9d6] via-[#e2f3e9] to-[#f0f9f1]
      dark:from-[#04140c] dark:via-[#061a11] dark:to-[#0a2a1b]"
    >
      {/* GLOW DECORATION */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#86efac]/20 dark:bg-[#1a3c2a]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#2d5a43] dark:text-[#86efac]" />
            <span className="text-[#2d5a43] dark:text-[#a8d5ba] font-bold uppercase tracking-[0.2em] text-xs">
              Mengenal Kerajaan
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1a3c2a] dark:text-[#e2f3e9]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Tentang Saya
          </h2>

          <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-transparent via-[#3d7a5a] to-transparent dark:via-[#86efac]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* VISUAL (CRYSTAL BOX) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="aspect-square rounded-[3rem] overflow-hidden relative
              bg-gradient-to-br from-[#a8d5ba] to-[#3d7a5a]
              dark:from-[#1a3c2a] dark:to-[#061a11]
              flex items-center justify-center text-8xl shadow-2xl"
            >
              {/* Overlay Glass Effect */}
              <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-[2px]" />
              <span className="relative z-10 drop-shadow-2xl">🏰</span>
              
              {/* Shimmer Line */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              />
            </motion.div>

            {/* FLOATING EXPERIENCE CARD */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-4 md:-right-8 p-6 rounded-[2rem]
              bg-white/80 dark:bg-[#163d29]/90 backdrop-blur-xl
              border border-[#a8d5ba]/50 dark:border-[#2d5a43]/50 shadow-2xl"
            >
              <p className="font-['Cinzel'] font-bold text-3xl text-[#1a3c2a] dark:text-[#86efac]">
                5+ <span className="text-sm align-middle">Tahun</span>
              </p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 text-[#2d5a43] dark:text-[#a8d5ba]">
                Pengalaman Digital
              </p>
            </motion.div>
          </motion.div>

          {/* TEXT & INTERACTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3
                className="text-3xl font-bold text-[#1a3c2a] dark:text-[#e2f3e9]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Aldiof Basten
              </h3>
              <p className="text-lg leading-relaxed text-[#2d5a43] dark:text-[#a8d5ba]/80">
                Membangun ekosistem digital yang harmonis antara <span className="font-bold border-b-2 border-[#3d7a5a]">estetika visual</span> dan <span className="font-bold border-b-2 border-[#3d7a5a]">kekuatan fungsional</span>.
              </p>
            </div>

            {/* ACCORDION (SAGE THEME) */}
            <div className="space-y-4">
              {accordion.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-[#a8d5ba]/30 dark:border-[#2d5a43]/50
                  bg-white/40 dark:bg-[#163d29]/40 backdrop-blur-sm transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left group"
                  >
                    <span className="font-bold text-[#1a3c2a] dark:text-[#e2f3e9] group-hover:text-[#3d7a5a] transition-colors">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#3d7a5a] dark:text-[#86efac] transition-transform duration-300 ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-5 text-[#2d5a43] dark:text-[#a8d5ba]/90 leading-relaxed text-sm"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* STATS CARDS */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl text-center
                  bg-[#2d5a43] dark:bg-[#a8d5ba] group transition-all duration-300 shadow-lg"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-3
                  text-[#f0f9f1] dark:text-[#061a11]" />

                  <p className="text-2xl font-bold font-['Cinzel']
                  text-[#f0f9f1] dark:text-[#061a11]">
                    {stat.value}
                  </p>

                  <p className="text-[10px] font-bold uppercase tracking-widest
                  text-[#a8d5ba] dark:text-[#2d5a43]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}