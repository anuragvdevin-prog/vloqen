import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import {
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-slate-200
        dark:border-slate-800
        bg-white/80
        dark:bg-slate-950/80
        backdrop-blur-md
        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="
              text-3xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            Vloqen
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-slate-600
                  dark:text-slate-300
                  hover:text-violet-600
                  dark:hover:text-violet-400
                  transition
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="
                p-2
                rounded-lg
                border
                border-slate-300
                dark:border-slate-700
                hover:border-violet-500
                transition
              "
            >
              {theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* Login */}
            <button
              className="
                px-5
                py-2
                rounded-lg
                bg-violet-600
                text-white
                hover:bg-violet-700
                transition
              "
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              text-slate-900
              dark:text-white
            "
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              md:hidden
              bg-white
              dark:bg-slate-950
              border-t
              border-slate-200
              dark:border-slate-800
            "
          >
            <div className="flex flex-col gap-5 p-6">
              
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  {link.name}
                </a>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="
                  px-4
                  py-3
                  rounded-lg
                  border
                  border-slate-300
                  dark:border-slate-700
                "
              >
                {theme === "dark"
                  ? "Light Mode ☀️"
                  : "Dark Mode 🌙"}
              </button>

              {/* Login */}
              <button
                className="
                  px-5
                  py-3
                  rounded-lg
                  bg-violet-600
                  text-white
                "
              >
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;