import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/BasrengCintaku',
      label: 'GitHub',
      active: true,
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/diyow._',
      label: 'Instagram',
      active: true,
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      active: false,
    },
    {
      icon: Youtube,
      href: '#',
      label: 'YouTube',
      active: false,
    },
  ];

  return (
    <footer
      className="relative py-12 overflow-hidden
      bg-[#f0f9f1] border-t border-[#a8d5ba]/30
      dark:bg-[#04140c] dark:border-[#2d5a43]/30"
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#3d7a5a] to-transparent dark:via-[#86efac]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* BRANDING / COPYRIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🏰</span>
              <span className="font-['Cinzel'] font-bold tracking-tighter text-[#1a3c2a] dark:text-[#e2f3e9]">
                KINGDOM <span className="text-[#3d7a5a] dark:text-[#86efac]">DIO</span>
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[#2d5a43]/60 dark:text-[#a8d5ba]/60">
              <span>© {currentYear} Created with</span>
              <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
              <span>by</span>
              <span className="text-[#1a3c2a] dark:text-[#86efac] font-['Cinzel']">Dio</span>
            </div>
          </motion.div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.active ? social.href : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={social.active ? { scale: 1.15, y: -4 } : {}}
                    className={`
                      p-3 rounded-2xl transition-all duration-300 border
                      ${social.active
                        ? `
                          bg-white dark:bg-[#163d29] border-[#a8d5ba]/50 dark:border-[#2d5a43]/50
                          text-[#1a3c2a] dark:text-[#86efac] shadow-sm hover:shadow-xl
                          hover:bg-[#2d5a43] hover:text-white dark:hover:bg-[#a8d5ba] dark:hover:text-[#061a11]
                        `
                        : `
                          bg-gray-100 dark:bg-[#061a11] border-transparent
                          text-gray-400 cursor-not-allowed opacity-40
                        `
                      }
                    `}
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-[#2d5a43]/40 dark:text-[#a8d5ba]/40"
            >
              <Sparkles size={10} />
              <span>Stay Humble, Keep Building</span>
            </motion.div>
          </div>

        </div>
      </div>
    </footer>
  );
}