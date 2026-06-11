import { motion } from "framer-motion";
import { Code, Database, Laptop, Video, Sparkles, Music } from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    type: "Remote • Internship/Fresher",
    icon: Code,
  },
  {
    title: "Backend Developer",
    type: "Remote • Full-Time",
    icon: Database,
  },
  {
    title: "Full Stack Developer",
    type: "Remote • Full-Time",
    icon: Laptop,
  },
  {
    title: "Video Editor",
    type: "Remote • Freelance",
    icon: Video,
  },
  {
    title: "VFX Artist",
    type: "Remote • Freelance",
    icon: Sparkles,
  },
  {
    title: "Music Producer",
    type: "Remote • Freelance",
    icon: Music,
  },
];

const Careers = () => {
  return (
    <section id="careers" className="py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-teal-500">
            Careers
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Join The Vloqen Team
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-400">
            We are always looking for passionate developers, designers, editors, and creative professionals who want to build amazing things.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => {
            const Icon = job.icon;

            return (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-600/15 to-teal-500/15 text-teal-500">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                  {job.title}
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-400">{job.type}</p>

                <button className="mt-6 rounded-xl bg-gradient-to-r from-rose-600 to-teal-500 px-5 py-3 font-semibold text-white transition hover:opacity-90">
                  Apply Now
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-2xl border border-teal-500 px-8 py-4 font-semibold text-teal-500 transition hover:bg-teal-500 hover:text-white">
            View All Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;