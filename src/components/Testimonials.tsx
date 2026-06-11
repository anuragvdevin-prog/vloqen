import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "TechNova Solutions",
    review: "Vloqen transformed our idea into a modern web application. The team delivered on time and exceeded expectations.",
  },
  {
    name: "Priya Verma",
    company: "BrandX Media",
    review: "The video editing and motion graphics quality was exceptional. Our campaign engagement increased significantly.",
  },
  {
    name: "Aman Gupta",
    company: "StartupHub",
    review: "Professional communication, clean development process, and excellent support throughout the project.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-teal-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl dark:text-white">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-400">
            Businesses trust Vloqen to deliver technology and creative solutions that drive real results.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-3xl border border-slate-200 bg-white/80 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-teal-500 dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-teal-500 text-teal-500" />
                ))}
              </div>

              <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-400">
                “{item.review}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 to-teal-500 font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;