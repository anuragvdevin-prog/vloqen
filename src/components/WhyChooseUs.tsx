import {
  Briefcase,
  Rocket,
  Users,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "End-to-End Solutions",
    description:
      "Technology and creative services under one roof.",
    icon: Briefcase,
  },
  {
    title: "Fast Delivery",
    description:
      "Efficient execution without compromising quality.",
    icon: Rocket,
  },
  {
    title: "Experienced Team",
    description:
      "Skilled developers, designers, and creative professionals.",
    icon: Users,
  },
  {
    title: "Scalable Growth",
    description:
      "Built to support long-term business success.",
    icon: TrendingUp,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-violet-400 font-medium">
            WHY VLOQEN
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Why Businesses Choose Us
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400">
            We help businesses grow through technology,
            creativity, and execution excellence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  p-6
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900/50
                  hover:border-violet-500
                  transition-all
                  duration-300
                "
              >
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-400">
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