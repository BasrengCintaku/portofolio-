import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3'
          : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`
          relative flex items-center justify-between px-6 h-16 md:h-18 rounded-[2rem]
          transition-all duration-500 border backdrop-blur-xl
          ${isScrolled 
            ? 'bg-white/70 border-[#a8d5ba]/30 shadow-[0_8px_32px_rgba(26,60,42,0.1)] dark:bg-[#061a11]/80 dark:border-[#2d5a43]/40' 
            : 'bg-transparent border-transparent'
          }
        `}>
          
          {/* LOGO */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <span className="text-2xl drop-shadow-lg">🏰</span>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 border-t border-r border-[#3d7a5a] dark:border-[#86efac] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span 
              className={`text-xl font-bold tracking-tighter uppercase font-['Cinzel'] ${
                isDark ? 'text-[#e2f3e9]' : 'text-[#1a3c2a]'
              }`}
            >
              Kingdom <span className="text-[#3d7a5a] dark:text-[#86efac]">Dio</span>
            </span>
          </motion.a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`
                  px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] font-['Cinzel']
                  transition-all duration-300 relative group
                  ${isDark ? 'text-[#a8d5ba] hover:text-[#86efac]' : 'text-[#2d5a43] hover:text-[#1a3c2a]'}
                `}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span 
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#3d7a5a] dark:bg-[#86efac] rounded-full group-hover:w-4 transition-all"
                />
              </motion.a>
            ))}

            <div className="h-6 w-[1px] bg-[#a8d5ba]/30 mx-4" />

            {/* THEME TOGGLE */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-xl hover:bg-[#a8d5ba]/20 transition-colors ${
                isDark ? 'text-[#86efac]' : 'text-[#2d5a43]'
              }`}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center gap-2 md:hidden">
             <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-xl ${isDark ? 'text-[#86efac]' : 'text-[#2d5a43]'}`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isDark ? 'text-[#e2f3e9]' : 'text-[#1a3c2a]'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 p-4 rounded-[2rem] border backdrop-blur-2xl shadow-2xl md:hidden
            bg-white/90 dark:bg-[#061a11]/95 border-[#a8d5ba]/30 dark:border-[#2d5a43]/50"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    w-full text-left px-6 py-4 rounded-2xl font-['Cinzel'] font-bold text-xs tracking-widest
                    transition-colors flex items-center justify-between group
                    ${isDark ? 'text-[#a8d5ba] hover:bg-[#2d5a43]/30' : 'text-[#2d5a43] hover:bg-[#a8d5ba]/20'}
                  `}
                >
                  {item.label}
                  <Sparkles size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}