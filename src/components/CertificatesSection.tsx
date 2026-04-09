import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    title: 'Certified Bug Creator',
    issuer: 'Stack Overflow Survivors Guild',
    date: '2025',
    credentialId: 'BUG-404-NOTFOUND',
    image: '🐛',
    link: '#',
  },
  {
    title: 'Professional Console Logger',
    issuer: 'DevTools Society',
    date: '2024',
    credentialId: 'LOG-999-SPAM',
    image: '🖥️',
    link: '#',
  },
  {
    title: 'Frontend Overthinker',
    issuer: 'CSS Anxiety Org',
    date: '2024',
    credentialId: 'CSS-OVERFLOW-001',
    image: '🎨',
    link: '#',
  },
  {
    title: 'Midnight Debugging Expert',
    issuer: '3AM Coders Association',
    date: '2023',
    credentialId: 'NIGHT-DEBUG-777',
    image: '🌙',
    link: '#',
  },
  {
    title: 'Responsive Layout Fighter',
    issuer: 'Flexbox Warriors',
    date: '2023',
    credentialId: 'FLEX-CHAOS-123',
    image: '📱',
    link: '#',
  },
  {
    title: 'Certified Ctrl+C Engineer',
    issuer: 'Copy Paste Institute',
    date: '2022',
    credentialId: 'CTRL-C-CTRL-V',
    image: '📋',
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="
        relative overflow-hidden py-24 md:py-32 px-4 font-sans
        /* Background Gradient sesuai gambar 1 & 2 */
        bg-gradient-to-br from-[#fdfbf0] via-[#e8f5e9] to-[#d1e9d6]
        dark:from-[#061a11] dark:via-[#0a2a1b] dark:to-[#04140c]
      "
    >
      {/* Dekorasi Gradient Lingkaran (Blur Effect) agar persis screenshot */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#86efac] dark:bg-[#163d29] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#a8d5ba] dark:bg-[#064e3b] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a8d5ba]/30 dark:bg-[#2d5a43]/30 border border-[#2d5a43]/10 dark:border-[#a8d5ba]/10 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#2d5a43] dark:text-[#a8d5ba]" />
            <span className="text-[#2d5a43] dark:text-[#a8d5ba] text-xs font-bold uppercase tracking-[0.2em]">
              Aseli Ini
            </span>
          </div>

          <h2 className="
            text-4xl md:text-6xl mb-6
            font-bold font-[Cinzel]
            text-[#1a3c2a] dark:text-[#e2f3e9]
            tracking-tight
          ">
            Sertifikat <span className="text-[#3d7a5a] dark:text-[#86efac]">&</span> Lisensi
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#2d5a43] to-transparent dark:via-[#86efac] mx-auto rounded-full" />
        </motion.div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div
                className="
                  h-full p-8 rounded-[2rem]
                  /* Card Gradient sesuai kotak 'Siapa Saya?' */
                  bg-gradient-to-b from-[#ccf2d9]/80 to-[#a8d5ba]/50
                  dark:from-[#163d29]/90 dark:to-[#0a2a1b]/90
                  backdrop-blur-md
                  border border-white/40 dark:border-[#2d5a43]/50
                  shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                  dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]
                  transition-all duration-300
                "
              >
                {/* ICON DENGAN GLOW */}
                <div className="
                  w-16 h-16 flex items-center justify-center rounded-2xl mb-6
                  bg-gradient-to-br from-[#f0f9f1] to-[#a8d5ba]
                  dark:from-[#2d5a43] dark:to-[#061a11]
                  shadow-inner relative
                ">
                  <span className="text-3xl z-10">{cert.image}</span>
                  <div className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* CONTENT */}
                <div className="space-y-4">
                  <div>
                    <h3 className="
                      text-xl font-bold font-[Cinzel]
                      text-[#1a3c2a] dark:text-[#e2f3e9]
                      leading-tight mb-1
                    ">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#3d7a5a] dark:text-[#a8d5ba]/80 italic">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1a3c2a]/10 dark:border-[#e2f3e9]/10">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-[#2d5a43] dark:text-[#a8d5ba]/60">
                        <Calendar className="h-4 w-4" />
                        <span>Diterbitkan: {cert.date}</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-[#1a3c2a]/5 dark:bg-white/5 font-mono text-[11px] text-[#4a7a5f] dark:text-[#a8d5ba]/50 break-all leading-relaxed">
                        ID: {cert.credentialId}
                      </div>
                    </div>
                  </div>

                  {/* BUTTON - FULL WIDTH DENGAN STYLE NEUMORPHIC SOFT */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl
                      bg-[#2d5a43] text-[#f0f9f1]
                      dark:bg-[#a8d5ba] dark:text-[#061a11]
                      font-bold text-sm tracking-wide
                      hover:shadow-lg hover:shadow-[#2d5a43]/20 dark:hover:shadow-[#86efac]/10
                      active:scale-[0.98]
                      transition-all duration-200
                    "
                  >
                    <ExternalLink className="h-4 w-4" />
                    VERIFIKASI SEKARANG
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}