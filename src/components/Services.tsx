import {
  Code2,
  Smartphone,
  Palette,
  MonitorSmartphone,
  Video,
  Clapperboard,
  Sparkles,
  Music,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: Code2,
    description: "Modern, scalable websites and web applications.",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Cross-platform mobile apps with seamless UX.",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "User-centered interfaces that drive engagement.",
  },
  {
    title: "Custom Software",
    icon: MonitorSmartphone,
    description: "Tailored software solutions for business growth.",
  },
  {
    title: "Video Editing",
    icon: Video,
    description: "Professional editing for brands and creators.",
  },
  {
    title: "Motion Graphics",
    icon: Clapperboard,
    description: "Eye-catching animated visual content.",
  },
  {
    title: "VFX",
    icon: Sparkles,
    description: "High-quality visual effects and compositing.",
  },
  {
    title: "Music Production",
    icon: Music,
    description: "Original music, mixing, mastering, and sound design.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-violet-400 font-medium">
            OUR SERVICES
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Technology Meets Creativity
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400">
            We combine software development with creative
            production to help businesses grow faster and
            stand out in competitive markets.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900/50
                  p-6
                  hover:border-violet-500
                  transition-all
                  duration-300
                "
              >
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;