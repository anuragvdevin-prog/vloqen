import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-rose-50 to-teal-50 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.16),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.18),_transparent_35%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(251,113,133,0.2),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.18),_transparent_35%)]" />
      <div className="absolute top-20 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-500/40 via-orange-400/35 to-teal-400/35 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-rose-600 via-orange-500 to-teal-500 bg-clip-text text-transparent dark:from-rose-400 dark:via-orange-400 dark:to-teal-400">
            Building Digital Products,
          </span>
          <br />
          Creative Content &
          <br />
          Future Careers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-base text-slate-600 sm:text-lg md:text-xl dark:text-slate-400"
        >
          From custom software and mobile apps to video editing, VFX, and music production, Vloqen helps brands transform ideas into impactful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-teal-500 px-8 py-4 font-semibold text-white shadow-lg shadow-rose-200 transition hover:scale-[1.02] hover:shadow-rose-300 dark:shadow-rose-950/40">
            Start Your Project
          </button>

          <button className="rounded-2xl border border-slate-300 bg-white/70 px-8 py-4 font-semibold text-slate-700 backdrop-blur transition hover:border-rose-500 hover:text-rose-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;