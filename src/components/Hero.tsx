import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/20 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
          "
        >
          Building Digital Products,
          <br />
          Creative Content &
          <br />
          Future Careers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            mt-6
            text-base
            sm:text-lg
            md:text-xl
            text-slate-400
            max-w-3xl
            mx-auto
          "
        >
          From custom software and mobile apps to video editing,
          VFX, and music production, Vloqen helps brands transform
          ideas into impactful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
          "
        >
          <button className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition">
            Start Your Project
          </button>

          <button className="px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 transition">
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;