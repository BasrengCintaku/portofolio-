import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, MessageSquare } from 'lucide-react';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

const FORMSPREE_URL = "https://formspree.io/f/meepnpdb";

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi').max(100),
  email: z.string().trim().email('Email tidak valid').max(255),
  subject: z.string().trim().min(1, 'Subjek harus diisi').max(200),
  message: z.string().trim().min(1, 'Pesan harus diisi').max(2000),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'basrengcapbasrial@gmail.com',
    href: 'mailto:basrengcapbasrial@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 896-2118-0758',
    href: 'https://wa.me/6289621180758',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrors({});
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => form.append(key, value));

      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Failed");

      toast({
        title: 'Pesan Terkirim ✨',
        description: 'Terima kasih! Pesanmu sudah sampai di istana.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: 'Gagal Mengirim',
        description: 'Ada gangguan teknis, coba lagi nanti ya.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden py-24 md:py-32 px-4
        bg-gradient-to-b from-[#f0f9f1] via-[#e2f3e9] to-[#d1e9d6]
        dark:from-[#0a2a1b] dark:via-[#061a11] dark:to-[#04140c]
      "
    >
      {/* Mesh Gradient Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#86efac]/20 dark:bg-[#1a3c2a]/40 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[#2d5a43] dark:text-[#a8d5ba] font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
            Mari Berhubungan
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Cinzel] mb-4 text-[#1a3c2a] dark:text-[#e2f3e9]">
            Hubungi Saya
          </h2>
          <div className="w-20 h-1.5 bg-[#3d7a5a] dark:bg-[#86efac] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE: INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold font-[Cinzel] text-[#1a3c2a] dark:text-[#e2f3e9]">
                Mari Berkolaborasi!
              </h3>
              <p className="text-[#2d5a43]/80 dark:text-[#a8d5ba]/70 leading-relaxed text-lg">
                Punya ide proyek menarik atau sekadar ingin menyapa? <br/>
                Pintu istana saya selalu terbuka untuk diskusi kreatif.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="
                    flex items-center gap-5 p-5 rounded-2xl
                    bg-white/40 backdrop-blur-md border border-[#a8d5ba]/30
                    hover:bg-[#a8d5ba]/20 hover:border-[#3d7a5a]/30
                    hover:translate-x-2
                    transition-all duration-300
                    dark:bg-[#163d29]/40 dark:border-[#2d5a43]/50
                  "
                >
                  <div className="p-3.5 rounded-xl bg-[#2d5a43] text-[#f0f9f1] dark:bg-[#a8d5ba] dark:text-[#061a11] shadow-lg">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2d5a43]/60 dark:text-[#a8d5ba]/50">
                      {info.label}
                    </p>
                    <p className="font-semibold text-[#1a3c2a] dark:text-[#e2f3e9]">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <form
              onSubmit={handleSubmit}
              className="
                relative z-10 space-y-5 p-8 rounded-[2.5rem] 
                bg-gradient-to-br from-white/80 to-[#f0f9f1]/50
                dark:from-[#163d29]/80 dark:to-[#0a2a1b]/80
                backdrop-blur-xl border border-white/40 dark:border-[#2d5a43]/40 shadow-2xl
              "
            >
              <div className="space-y-4">
                {[
                  { id: 'name', type: 'text', label: 'Nama Lengkap' },
                  { id: 'email', type: 'email', label: 'Alamat Email' },
                  { id: 'subject', type: 'text', label: 'Subjek' },
                ].map((field) => (
                  <div key={field.id}>
                    <input
                      name={field.id}
                      type={field.type}
                      placeholder={field.label}
                      value={(formData as any)[field.id]}
                      onChange={handleChange}
                      className="
                        w-full px-5 py-4 rounded-2xl 
                        bg-[#f0f9f1]/50 dark:bg-[#061a11]/50 
                        border border-[#a8d5ba]/30 dark:border-[#2d5a43]/50
                        focus:outline-none focus:ring-2 focus:ring-[#3d7a5a] dark:focus:ring-[#86efac]
                        placeholder:text-[#2d5a43]/40 dark:placeholder:text-[#a8d5ba]/30
                        text-[#1a3c2a] dark:text-[#e2f3e9] transition-all
                      "
                    />
                    {errors[field.id] && <p className="text-xs text-red-500 mt-1 ml-2">{errors[field.id]}</p>}
                  </div>
                ))}

                <div>
                  <textarea
                    name="message"
                    placeholder="Pesan Anda..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="
                      w-full px-5 py-4 rounded-2xl 
                      bg-[#f0f9f1]/50 dark:bg-[#061a11]/50 
                      border border-[#a8d5ba]/30 dark:border-[#2d5a43]/50
                      focus:outline-none focus:ring-2 focus:ring-[#3d7a5a] dark:focus:ring-[#86efac]
                      placeholder:text-[#2d5a43]/40 dark:placeholder:text-[#a8d5ba]/30
                      text-[#1a3c2a] dark:text-[#e2f3e9] transition-all resize-none
                    "
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1 ml-2">{errors.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl 
                  bg-[#2d5a43] dark:bg-[#a8d5ba] 
                  text-white dark:text-[#061a11]
                  font-bold text-lg shadow-xl shadow-[#2d5a43]/20 dark:shadow-[#000]/20
                  hover:scale-[1.02] active:scale-[0.98]
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-300
                "
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
            
            {/* Aesthetic Glow behind form */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#86efac]/20 to-transparent blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}