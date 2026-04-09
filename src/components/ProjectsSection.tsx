import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    emojis: ['🛒', '💳', '📦'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    emojis: ['📚', '🎥', '📝'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Dashboard analytics untuk social media dengan real-time data visualization dan reporting.',
    tags: ['React', 'Firebase', 'Tailwind'],
    emojis: ['📊', '📈', '💬'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'Tool untuk generate konten menggunakan AI dengan integrasi berbagai model language.',
    tags: ['Python', 'OpenAI', 'React'],
    emojis: ['🤖', '🧠', '✨'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Seri tutorial video editing dengan 100+ episode dan 10k+ subscribers.',
    tags: ['Premiere Pro', 'YouTube'],
    emojis: ['🎬', '📺', '🔥'],
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Film Pendek',
    description: 'Pembuatan film simpel.',
    tags: ['Premiere Pro', 'YouTube'],
    emojis: ['📷', '📺', '🔥'],
    isContent: true,
    youtube: '#',
  },
];

function EmojiCarousel({ emojis }: { emojis: string[] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % emojis.length);
  const prev = () => setIndex((prev) => (prev - 1 + emojis.length) % emojis.length);

  return (
    <div className="
      relative flex items-center justify-center h-40 rounded-[2rem]
      /* Glassmorphism Inner Card */
      bg-gradient-to-br from-[#f0f9f1] to-[#a8d5ba]/30
      dark:from-[#163d29] dark:to-[#0a2a1b]
      border border-white/40 dark:border-[#2d5a43]/50
      shadow-inner overflow-hidden group/carousel
    ">
      <button
        onClick={prev}
        className="absolute left-3 p-2 rounded-full z-10
        bg-white/80 hover:bg-[#2d5a43] hover:text-white
        dark:bg-[#061a11]/80 dark:hover:bg-[#a8d5ba] dark:hover:text-[#061a11]
        opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <motion.span
        key={index}
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-6xl drop-shadow-2xl"
      >
        {emojis[index]}
      </motion.span>

      <button
        onClick={next}
        className="absolute right-3 p-2 rounded-full z-10
        bg-white/80 hover:bg-[#2d5a43] hover:text-white
        dark:bg-[#061a11]/80 dark:hover:bg-[#a8d5ba] dark:hover:text-[#061a11]
        opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-3 flex gap-1.5">
        {emojis.map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? 'bg-[#2d5a43] dark:bg-[#a8d5ba] w-3' : 'bg-black/10 dark:bg-white/10'}`} />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        relative overflow-hidden py-24 md:py-32 px-4
        bg-gradient-to-b from-[#f0f9f1] via-[#e2f3e9] to-[#d1e9d6]
        dark:from-[#0a2a1b] dark:via-[#061a11] dark:to-[#04140c]
      "
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#86efac]/10 dark:bg-[#1a3c2a]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d5a43]/10 dark:bg-[#a8d5ba]/10 mb-4 border border-[#2d5a43]/20">
            <LayoutGrid className="w-3.5 h-3.5 text-[#2d5a43] dark:text-[#a8d5ba]" />
            <span className="text-[#2d5a43] dark:text-[#a8d5ba] font-bold uppercase tracking-[0.2em] text-[10px]">
              Portfolio Showcase
            </span>
          </div>

          <h2 className="
            text-4xl md:text-6xl mb-6
            font-['Cinzel'] font-bold
            text-[#1a3c2a] dark:text-[#e2f3e9]
          ">
            Projects <span className="text-[#3d7a5a] dark:text-[#86efac]">&</span> Karya
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#3d7a5a] to-transparent dark:via-[#86efac] mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="
                h-full p-6 rounded-[2.5rem] transition-all duration-500
                bg-white/40 backdrop-blur-xl border border-white/40
                shadow-[0_10px_40px_rgba(45,90,67,0.05)]
                hover:shadow-[0_20px_60px_rgba(45,90,67,0.15)]
                dark:bg-[#163d29]/40 dark:border-[#2d5a43]/50
              ">

                <EmojiCarousel emojis={project.emojis} />

                <div className="space-y-4 mt-6 px-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.isContent && (
                      <span className="
                        px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg
                        bg-[#2d5a43] text-[#f0f9f1]
                        dark:bg-[#a8d5ba] dark:text-[#061a11]
                      ">
                        Content
                      </span>
                    )}

                    <h3 className="
                      text-xl font-bold font-['Cinzel']
                      text-[#1a3c2a] dark:text-[#e2f3e9]
                      group-hover:text-[#3d7a5a] dark:group-hover:text-[#86efac]
                      transition-colors
                    ">
                      {project.title}
                    </h3>
                  </div>

                  <p className="
                    text-sm leading-relaxed
                    text-[#2d5a43]/80 dark:text-[#a8d5ba]/70
                    line-clamp-3
                  ">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          px-3 py-1 text-[11px] font-medium rounded-xl
                          bg-[#a8d5ba]/20 text-[#2d5a43] border border-[#a8d5ba]/30
                          dark:bg-[#2d5a43]/30 dark:text-[#a8d5ba] dark:border-[#2d5a43]/50
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex gap-3 pt-4 flex-wrap">
                    {project.github && (
                      <a href={project.github} className="
                        flex-1 flex items-center justify-center gap-2 text-xs font-bold px-4 py-3 rounded-2xl
                        bg-[#f0f9f1] text-[#1a3c2a] border border-[#a8d5ba]/40
                        hover:bg-[#2d5a43] hover:text-white transition-all duration-300
                        dark:bg-[#061a11] dark:text-[#a8d5ba] dark:hover:bg-[#a8d5ba] dark:hover:text-[#061a11]
                      ">
                        <Github className="h-4 w-4" />
                        CODE
                      </a>
                    )}

                    {project.demo && (
                      <a href={project.demo} className="
                        flex-1 flex items-center justify-center gap-2 text-xs font-bold px-4 py-3 rounded-2xl
                        bg-[#2d5a43] text-white
                        hover:bg-[#3d7a5a] shadow-lg shadow-[#2d5a43]/20
                        dark:bg-[#a8d5ba] dark:text-[#061a11]
                        transition-all duration-300
                      ">
                        <ExternalLink className="h-4 w-4" />
                        DEMO
                      </a>
                    )}

                    {project.youtube && (
                      <a href={project.youtube} className="
                        flex-1 flex items-center justify-center gap-2 text-xs font-bold px-4 py-3 rounded-2xl
                        bg-[#ef4444] text-white hover:bg-[#dc2626]
                        transition-all duration-300
                      ">
                        <Play className="h-4 w-4 fill-current" />
                        WATCH
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}