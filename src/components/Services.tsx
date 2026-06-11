import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  MonitorCog,
  Video,
  Clapperboard,
  Sparkles,
  Music,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern, scalable websites and web applications.",
    icon: Code2,
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps with seamless UX.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "User-centered interfaces that drive engagement.",
    icon: Palette,
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions for business growth.",
    icon: MonitorCog,
  },
  {
    title: "Video Editing",
    description: "Professional editing for brands and creators.",
    icon: Video,
  },
  {
    title: "Motion Graphics",
    description: "Eye-catching animated visual content.",
    icon: Clapperboard,
  },
  {
    title: "VFX",
    description: "High-quality visual effects and compositing.",
    icon: Sparkles,
  },
  {
    title: "Music Production",
    description: "Original music, mixing, mastering, and sound design.",
    icon: Music,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[linear-gradient(180deg,rgba(244,63,94,0.05),transparent)] transition-colors duration-300 dark:bg-[linear-gradient(180deg,rgba(251,113,133,0.08),transparent)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Technology Meets Creativity
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            We combine software development with creative production to help businesses grow faster and stand out in competitive markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 to-teal-500 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;