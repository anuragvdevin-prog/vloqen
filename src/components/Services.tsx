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
    description:
      "Modern, scalable websites and web applications.",
    icon: Code2,
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with seamless UX.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered interfaces that drive engagement.",
    icon: Palette,
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions for business growth.",
    icon: MonitorCog,
  },
  {
    title: "Video Editing",
    description:
      "Professional editing for brands and creators.",
    icon: Video,
  },
  {
    title: "Motion Graphics",
    description:
      "Eye-catching animated visual content.",
    icon: Clapperboard,
  },
  {
    title: "VFX",
    description:
      "High-quality visual effects and compositing.",
    icon: Sparkles,
  },
  {
    title: "Music Production",
    description:
      "Original music, mixing, mastering, and sound design.",
    icon: Music,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        py-24
        bg-slate-50
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            Technology Meets Creativity
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-lg
              text-slate-600
              dark:text-slate-400
            "
          >
            We combine software development with creative
            production to help businesses grow faster and
            stand out in competitive markets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  p-8
                  rounded-3xl
                  bg-white
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-slate-800
                  hover:border-violet-500
                  transition-all
                  duration-300
                  shadow-sm
                  hover:shadow-xl
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-violet-100
                    dark:bg-violet-500/20
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon
                    size={28}
                    className="
                      text-violet-600
                      dark:text-violet-400
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-slate-900
                    dark:text-white
                    mb-3
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-slate-600
                    dark:text-slate-400
                    leading-relaxed
                  "
                >
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