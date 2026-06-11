import { Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
        bg-white
        dark:bg-[#10221D]
        border-t
        border-slate-200
        dark:border-[#1F3A33]
        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Vloqen
            </h2>

            <p className="mt-4 text-slate-600 dark:text-[#A7C4BB] leading-relaxed">
              Building digital products, creative content, and future
              careers through technology, innovation, and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              {["Home", "Services", "Portfolio", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-600 transition hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Services
            </h3>

            <ul className="mt-4 space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Video Editing",
                "VFX",
                "Music Production",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-4 text-slate-600 dark:text-[#A7C4BB]">
              <p>contact@vloqen.com</p>
              <p>+91 98765 43210</p>
              <p>India</p>
            </div>

            {/* Social / Contact Icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="mailto:contact@vloqen.com"
                className="rounded-xl bg-slate-100 p-3 transition hover:scale-110 hover:bg-rose-100 dark:bg-slate-800 dark:hover:bg-rose-900/50"
              >
                <Mail size={18} />
              </a>

              <a
                href="tel:+919876543210"
                className="rounded-xl bg-slate-100 p-3 transition hover:scale-110 hover:bg-rose-100 dark:bg-slate-800 dark:hover:bg-rose-900/50"
              >
                <Phone size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-100 p-3 transition hover:scale-110 hover:bg-rose-100 dark:bg-slate-800 dark:hover:bg-rose-900/50"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="
            mt-12
            pt-8
            border-t
            border-slate-200
            dark:border-[#1F3A33]
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >
          <p className="text-sm text-slate-500 dark:text-[#A7C4BB]">
            © {new Date().getFullYear()} Vloqen. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="
                text-sm
                text-slate-500
                dark:text-[#A7C4BB]
                hover:text-teal-500
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                text-sm
                text-slate-500
                dark:text-[#A7C4BB]
                hover:text-teal-500
              "
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;