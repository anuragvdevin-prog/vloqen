import { Briefcase, Rocket, Users, TrendingUp } from "lucide-react";

const features = [
  {
    title: "End-to-End Solutions",
    description: "Technology and creative services under one roof.",
    icon: Briefcase,
  },
  {
    title: "Fast Delivery",
    description: "Efficient execution without compromising quality.",
    icon: Rocket,
  },
  {
    title: "Experienced Team",
    description: "Skilled developers, designers, and creative professionals.",
    icon: Users,
  },
  {
    title: "Scalable Growth",
    description: "Built to support long-term business success.",
    icon: TrendingUp,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[linear-gradient(180deg,rgba(20,184,166,0.04),transparent)] transition-colors duration-300 dark:bg-[linear-gradient(180deg,rgba(45,212,191,0.07),transparent)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-400">
            WHY VLOQEN
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Why Businesses Choose Us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-400">
            We help businesses grow through technology, creativity, and execution excellence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-rose-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-600 to-teal-500 text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;