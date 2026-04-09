import { motion } from "framer-motion";
import { Code, Palette, Database, Star } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code,
    items: [
      { name: "React", level: 85 },
      { name: "Tailwind", level: 90 },
      { name: "Next.js", level: 75 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "UI/UX",
    icon: Palette,
    items: [
      { name: "Figma", level: 80 },
      { name: "Design System", level: 75 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 65 },
      { name: "MongoDB", level: 60 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        relative overflow-hidden py-24 md:py-32 px-4
        /* Background selaras dengan screenshot About */
        bg-gradient-to-b from-[#d1e9d6] via-[#e2f3e9] to-[#f0f9f1]
        dark:from-[#04140c] dark:via-[#061a11] dark:to-[#0a2a1b]
      "
    >
      {/* Decorative Blur - Aksen Hijau */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#86efac] dark:bg-[#1a3c2a] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-4 h-4 text-[#2d5a43] dark:text-[#86efac] fill-current" />
            <span className="text-[#2d5a43] dark:text-[#a8d5ba] font-bold uppercase tracking-[0.3em] text-xs">
              Keahlian
            </span>
            <Star className="w-4 h-4 text-[#2d5a43] dark:text-[#86efac] fill-current" />
          </div>
          
          <h2 className="
            text-4xl md:text-5xl tracking-wide
            font-['Cinzel'] font-bold
            text-[#1a3c2a] dark:text-[#e2f3e9]
          ">
            Mastery Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3d7a5a] to-transparent dark:via-[#86efac] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="
                  group relative rounded-[2.5rem] p-8 transition-all duration-500
                  /* Card Style: Glassmorphism Soft Green */
                  bg-gradient-to-br from-white/60 to-[#a8d5ba]/20
                  dark:from-[#163d29]/60 dark:to-[#061a11]/40
                  backdrop-blur-xl border border-white/40 dark:border-[#2d5a43]/50
                  shadow-[0_20px_50px_rgba(45,90,67,0.05)]
                  hover:shadow-[0_20px_50px_rgba(45,90,67,0.15)]
                "
              >
                {/* ICON BOX */}
                <div className="
                  w-14 h-14 flex items-center justify-center rounded-2xl mb-6
                  bg-[#2d5a43] text-[#f0f9f1]
                  dark:bg-[#a8d5ba] dark:text-[#061a11]
                  shadow-lg transform group-hover:rotate-[10deg] transition-transform duration-300
                ">
                  <Icon size={28} />
                </div>

                {/* CATEGORY TITLE */}
                <h3 className="
                  text-xl mb-8
                  font-['Cinzel'] font-bold
                  text-[#1a3c2a] dark:text-[#e2f3e9]
                ">
                  {skill.title}
                </h3>

                {/* SKILLS LIST */}
                <div className="space-y-6">
                  {skill.items.map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-[#2d5a43] dark:text-[#a8d5ba]">
                          {item.name}
                        </span>
                        <span className="text-[#1a3c2a] dark:text-[#e2f3e9]">
                          {item.level}%
                        </span>
                      </div>

                      {/* CRYSTAL PROGRESS BAR */}
                      <div className="
                        w-full h-2.5 rounded-full overflow-hidden
                        bg-black/5 dark:bg-white/5 p-[1px]
                      ">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="
                            h-full rounded-full relative
                            bg-gradient-to-r from-[#3d7a5a] via-[#86efac] to-[#3d7a5a]
                            dark:from-[#2d5a43] dark:via-[#86efac] dark:to-[#2d5a43]
                          "
                        >
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-white/20 w-full animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtle Background Icon Decoration */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                  <Icon size={120} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}