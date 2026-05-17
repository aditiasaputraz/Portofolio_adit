/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import sertif1 from "./assets/certificates/sertif1.jpeg";
import sertif2 from "./assets/certificates/sertif2.jpeg";
import sertif3 from "./assets/certificates/sertif3.jpeg";
import sertif4 from "./assets/certificates/sertif4.jpeg";
import heroFoto from "./assets/foto.jpeg";
import aboutFoto from "./assets/foti.jpeg";
import confetti from 'canvas-confetti';
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  Menu,
  X,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  ExternalLink,
  Code2,
  Smartphone,
  Layout,
  Gamepad2,
  Cpu,
  Award,
  ChevronRight,
  Monitor,
  Palette,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Star,
  ArrowRight,
  Code
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "./lib/utils";
import React, { useEffect, useState, useRef } from "react";

// --- Custom Hooks ---
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return mousePosition;
};

// --- Components ---

const Magnetic = ({ children }: { children: React.ReactNode; key?: React.Key }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.4, y: y * 0.4 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

// --- Types ---
interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
  tags: string[];
}

interface Skill {
  name: string;
  icon: React.ReactNode;
}

// --- Data ---
const projects: Project[] = [
  {
    title: "Aplikasi Toko Online Laravel",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
    link: "#",
    tags: ["Laravel", "MySQL", "Tailwind"]
  },
  {
    title: "Game Android Hitung Cepat",
    category: "Game Development",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60",
    link: "#",
    tags: ["Java", "Android Studio"]
  },
  {
    title: "Sistem SPK Laptop/HP",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    link: "#",
    tags: ["PHP", "Expert System"]
  },
  {
    title: "Aplikasi Pemesanan Hotel",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
    link: "#",
    tags: ["Android", "Firebase"]
  },
  {
    title: "Zombie Tilt Escape",
    category: "Game Development",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60",
    link: "#",
    tags: ["Unity", "C#"]
  }
];

const skills: Skill[] = [
  { name: "HTML", icon: <Layout className="w-6 h-6" /> },
  { name: "CSS", icon: <Layers className="w-6 h-6" /> },
  { name: "JavaScript", icon: <Code2 className="w-6 h-6" /> },
  { name: "PHP", icon: <Cpu className="w-6 h-6" /> },
  { name: "Laravel", icon: <Monitor className="w-6 h-6" /> },
  { name: "MySQL", icon: <Layers className="w-6 h-6" /> },
  { name: "Android Studio", icon: <Smartphone className="w-6 h-6" /> },
  { name: "Java", icon: <Code2 className="w-6 h-6" /> }
];

const certificates = [
  {
    title: "Juara Lomba Mobile Apps",
    issuer: "Universitas Indonesia",
    year: "2024",
    pdfUrl: "/certificates/sertif1.pdf",
    image: sertif1
  },
  {
    title: "Laravel Expert",
    issuer: "Dicoding",
    year: "2023",
    pdfUrl: "/certificates/sertif2.pdf",
    image: sertif2
  },
  {
    title: "Game Development",
    issuer: "Google Dev Study",
    year: "2023",
    pdfUrl: "https://drive.google.com/file/d/1cs5HUr4VFey0pSVzEBUxj-e1QcIrslEA/view?usp=sharing",
    image: sertif3
  },
  {
    title: "Web Development",
    issuer: "Skill Academy",
    year: "2023",
    pdfUrl: "/certificates/sertif4.pdf",
    image: sertif4
  }
];

const designs = [
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1613909209432-7b48851c7b9c?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1541462608141-ad60197356cc?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1551218808-94e220e03194?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1561070791-2dc2696369dd?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&auto=format&fit=crop&q=60"
];

// --- Components ---

const Navbar = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean; toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-brand-green origin-left z-[60]"
      />
      <div className={cn(
        "glass px-6 md:px-10 py-4 md:py-5 rounded-[2.5rem] flex items-center justify-between relative w-full max-w-5xl pointer-events-auto transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
        isDarkMode ? "bg-black/90 border-white/10" : "bg-white/80 border-white/20"
      )}>
        <Magnetic>
          <div className={cn("text-2xl font-black font-heading tracking-tighter cursor-pointer", isDarkMode ? "text-brand-green" : "text-brand-dark")}>
            ADITIA<span className="text-brand-green">.</span>
          </div>
        </Magnetic>

        {/* Desktop Menu */}
        <div className={cn("hidden md:flex gap-10 items-center text-[10px] font-black uppercase tracking-[0.3em]", isDarkMode ? "text-white/40" : "text-slate-500")}>
          {["About", "Portfolio", "Skills", "Contact"].map((item) => (
            <Magnetic key={item}>
              <a href={`#${item.toLowerCase() === 'portfolio' ? 'portfolio-showcase' : item.toLowerCase()}`} className="hover:text-brand-green transition-colors">
                {item}
              </a>
            </Magnetic>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Magnetic>
            <button
              onClick={toggleDarkMode}
              className={cn(
                "p-3 rounded-2xl transition-all active:scale-90 border",
                isDarkMode ? "bg-white/5 border-white/10 text-brand-green" : "bg-slate-50 border-slate-100 text-slate-600 shadow-sm"
              )}
            >
              {isDarkMode ? <Zap className="w-4 h-4 fill-current" /> : <Layers className="w-4 h-4" />}
            </button>
          </Magnetic>

          <Magnetic>
            <a href="#contact" className="hidden sm:block btn-primary px-8 py-3.5">
              Hire Me
            </a>
          </Magnetic>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn("md:hidden p-2 transition-colors", isDarkMode ? "text-brand-green" : "text-slate-600")}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className={cn(
                "absolute top-full left-0 right-0 mt-4 glass p-6 rounded-3xl flex flex-col gap-4 text-center md:hidden shadow-2xl border transition-colors duration-500",
                isDarkMode ? "bg-black/90 border-brand-green/30" : "bg-white p-6 rounded-3xl"
              )}
            >
              <a onClick={() => setIsOpen(false)} href="#about" className={cn("py-2 font-bold hover:text-brand-green", isDarkMode ? "text-white" : "text-slate-700")}>About</a>
              <a onClick={() => setIsOpen(false)} href="#portfolio-showcase" className={cn("py-2 font-bold hover:text-brand-green", isDarkMode ? "text-white" : "text-slate-700")}>Portfolio</a>
              <a onClick={() => setIsOpen(false)} href="#skills" className={cn("py-2 font-bold hover:text-brand-green", isDarkMode ? "text-white" : "text-slate-700")}>Skills</a>
              <a onClick={() => setIsOpen(false)} href="#contact" className={cn("py-2 font-bold hover:text-brand-green", isDarkMode ? "text-white" : "text-slate-700")}>Contact</a>
              <div className="pt-2 border-t border-slate-100 mt-2">
                <a onClick={() => setIsOpen(false)} href="#contact" className="btn-primary block w-full text-center">Let's Talk</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const ShootingStars = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <AnimatePresence>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-10%", y: "-10%", opacity: 0 }}
            animate={{
              x: "110%",
              y: "110%",
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className={cn(
              "absolute h-px w-[100px] rotate-[45deg]",
              "bg-gradient-to-r from-transparent via-brand-green to-transparent"
            )}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const LightPillars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i * 25 + "%" }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            x: [i * 25 - 5 + "%", i * 25 + 5 + "%", i * 25 - 5 + "%"],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-brand-green/10 to-transparent blur-3xl shadow-[0_0_100px_rgba(52,211,153,0.1)]"
        />
      ))}
    </div>
  );
};

export default function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
  const [clickedCertIndex, setClickedCertIndex] = useState<number | null>(null);
  const [portfolioTab, setPortfolioTab] = useState<"projects" | "certificates" | "designs">("projects");
  const roles = ["Frontend Developer", "AI Enginer", "UI/UX Designer", "Desain Grafis"];

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [400, 1200], [0, 100]);
  const y4 = useTransform(scrollY, [400, 1200], [0, -80]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={cn("relative min-h-screen overflow-x-hidden font-sans transition-colors duration-500", isDarkMode ? "bg-[#050505] text-white" : "bg-brand-cream text-slate-800")}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <ShootingStars />
      <BackToTop isDarkMode={isDarkMode} />

      {/* Vertical Rail Text (Unique Design Element) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 z-[45] pointer-events-none">
        <div className={cn("h-24 w-px transition-colors duration-500", isDarkMode ? "bg-brand-green/20" : "bg-slate-200")} />
        <motion.div
          style={{ writingMode: 'vertical-rl' }}
          className={cn("text-[10px] uppercase tracking-[0.6em] font-black italic rotate-180 transition-colors duration-500", isDarkMode ? "text-brand-green/40" : "text-slate-300")}
        >
          SCROLL TO EXPLORE JOURNEY
        </motion.div>
        <div className={cn("h-24 w-px transition-colors duration-500", isDarkMode ? "bg-brand-green/20" : "bg-slate-200")} />
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 z-[45]">
        <div className={cn("text-[10px] font-black uppercase tracking-widest rotate-90 mb-4 transition-colors", isDarkMode ? "text-brand-green" : "text-slate-400")}>
          SEC-0{Math.floor(scrollY.get() / 800) + 1}
        </div>
        {[1, 2, 3, 4, 5].map((num, i) => (
          <motion.div
            key={i}
            className={cn(
              "w-3 h-3 rounded-full border transition-all cursor-pointer",
              isDarkMode ? "bg-black border-brand-green/20" : "bg-white border-slate-300"
            )}
            animate={{
              scale: Math.floor(scrollY.get() / 800) === i ? 1.5 : 1,
              backgroundColor: Math.floor(scrollY.get() / 800) === i
                ? (isDarkMode ? "rgba(52, 211, 153, 1)" : "rgba(15, 23, 42, 1)")
                : (isDarkMode ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)")
            }}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </div>

      {/* Background blobs */}
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-brand-green/20 blur-[100px] rounded-full z-0" />
      <div className="fixed bottom-0 -right-24 w-96 h-96 bg-brand-green/10 blur-[100px] rounded-full z-0" />

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 px-4 overflow-hidden">
        <LightPillars />
        {/* Parallax Blobs for Hero */}
        <motion.div style={{ y: y1 }} className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-green/10 blur-[100px] rounded-full z-0" />
        <motion.div style={{ y: y2 }} className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full z-0" />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-primary mb-6 inline-flex"
            >
              Available for Hire
            </motion.div>
            <h1 className={cn("text-6xl sm:text-7xl md:text-8xl lg:text-[11vw] font-heading font-black leading-[0.85] md:leading-[0.7] mb-8 md:mb-12 transition-colors tracking-tighter uppercase italic", isDarkMode ? "text-white" : "text-brand-dark")}>
              ADITIA <br />
              <span className="text-brand-green outline-text-green inline-block hover:text-brand-green transition-colors duration-500">SAPUTRA</span>
            </h1>
            <div className="h-20 mb-12 md:mb-20 overflow-hidden flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 30, skewY: 10 }}
                  animate={{ opacity: 1, y: 0, skewY: 0 }}
                  exit={{ opacity: 0, y: -30, skewY: -10 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={cn("text-lg sm:text-xl md:text-3xl font-black uppercase tracking-[0.3em] md:tracking-[0.4em] transition-colors text-center lg:text-left", isDarkMode ? "text-brand-green/60" : "text-slate-400")}
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="flex flex-col sm:flex-row gap-12 justify-center lg:justify-start items-center">
              <Magnetic>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('portfolio-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary px-14 py-5 flex items-center gap-4 group"
                >
                  <span className="relative z-10">Explore Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Magnetic>
              <Magnetic>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className={cn(
                    "px-10 py-5 rounded-2xl border backdrop-blur-xl flex items-center justify-center text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.15)]",
                    isDarkMode
                      ? "bg-white/5 border-white/10 text-white/60 hover:border-brand-green hover:text-brand-green hover:bg-brand-green/10"
                      : "bg-white/40 border-white/30 text-slate-600 hover:border-brand-green hover:text-brand-green hover:bg-white/60"
                  )}
                >
                  Connect Now
                </motion.a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center relative"
            style={{ perspective: "2000px" }}
          >
            <div className="relative w-80 h-96 md:w-[450px] md:h-[550px]">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-green/20 blur-[100px] rounded-full animate-pulse" />

              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 border-2 border-dashed border-brand-green/20 rounded-full"
              />

              {/* The "Kece" Card */}
              <motion.div
                whileHover={{
                  rotateY: 25,
                  rotateX: -15,
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                animate={{
                  y: [0, -25, 0],
                  rotateZ: [-1, 2, -1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={cn(
                  "relative w-full h-full glass rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)] group cursor-pointer transition-all duration-500",
                  isDarkMode ? "border-brand-green/50" : "border-white/80"
                )}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Image Container */}
                <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden bg-white/20">
                  <img
                    src={heroFoto}
                    alt="Avatar"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />

                  {/* Light Sweep Effect */}
                  <motion.div
                    animate={{ x: ['-100%', '300%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -rotate-45"
                  />
                </div>

                {/* Card overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute bottom-12 left-12 right-12 translate-z-10" style={{ transform: "translateZ(50px)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="glass px-6 py-3 rounded-2xl inline-block group-hover:bg-brand-green transition-colors duration-500">
                      <span className={cn("text-xs font-black uppercase tracking-[0.2em] group-hover:text-brand-dark transition-colors", isDarkMode ? "text-brand-green" : "text-brand-dark")}>Lead Dev</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em] mb-1">UI/UX Desainer</p>
                      <h3 className={cn("text-3xl font-black font-heading tracking-tighter uppercase italic group-hover:text-brand-green transition-colors duration-500", isDarkMode ? "text-white" : "text-brand-green")}>Aditia Saputra</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Exp</p>
                      <p className="text-xl font-heading font-black text-white italic uppercase tracking-tighter">Senior</p>
                    </div>
                  </div>
                </div>

                {/* Additional Profile Card elements: Floating Stats */}
                <div className="absolute top-24 right-8 flex flex-col gap-3 group-hover:translate-x-0 translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 px-4 py-6">
                  {[
                    { label: "Stability", val: "High" },
                    { label: "Clean", val: "Code" },
                    { label: "UX", val: "First" }
                  ].map((stat, i) => (
                    <div key={i} className="glass p-3 rounded-xl border border-white/10 flex flex-col items-end backdrop-blur-2xl">
                      <span className="text-[7px] font-black uppercase tracking-widest text-brand-green">{stat.label}</span>
                      <span className="text-[10px] font-bold text-white">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Orbiting elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute -top-6 -right-6 p-5 glass rounded-[2rem] shadow-2xl z-20 border-white/40"
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-12 -left-12 p-5 glass rounded-[2rem] shadow-2xl z-20 border-white/40"
              >
                <Smartphone className="w-8 h-8 text-brand-green" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Me (Editorial Card Layout) */}
      <section id="about" className={cn("py-20 md:py-32 px-4 relative flex items-center overflow-hidden transition-colors duration-500", isDarkMode ? "bg-black" : "bg-brand-cream/50")}>
        {/* Large decorative text in background */}
        <div className={cn("absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black uppercase pointer-events-none select-none z-0 tracking-tighter opacity-10 transition-all duration-700", isDarkMode ? "text-brand-green/20" : "text-brand-dark/5")}>
          ADITIA
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className={cn(
            "rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row transition-all duration-700 border",
            isDarkMode ? "bg-white/[0.02] border-white/5" : "bg-white border-white shadow-[0_40px_100px_rgba(0,0,0,0.05)]"
          )}>
            {/* Left: Image card with unique mask */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="lg:w-2/5 relative h-[350px] sm:h-[450px] lg:h-auto group overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={aboutFoto}
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply opacity-30" />

              {/* Floating identity */}
              <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 text-white">
                <p className="text-[10px] uppercase tracking-[0.4em] font-black opacity-60 mb-2">Digital Architect</p>
                <p className="text-2xl sm:text-3xl font-heading font-black italic uppercase tracking-tighter shadow-2xl">Saputra.A</p>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{
                  rotate: [0, 10, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-28 h-28 sm:w-40 sm:h-40 bg-brand-green p-4 sm:p-8 rounded-full flex items-center justify-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] rotate-12 z-20 pointer-events-none"
              >
                <span className="text-brand-dark font-heading font-black text-[10px] sm:text-sm uppercase leading-tight italic">Logical <br /> & <br /> Creative</span>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <div className="lg:w-3/5 p-8 sm:p-12 md:p-20 flex flex-col justify-center">
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className={cn("font-black uppercase tracking-[0.4em] text-[10px] mb-6 sm:mb-8", isDarkMode ? "text-brand-green" : "text-brand-green-dark")}
              >
                The Story
              </motion.p>
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={cn("text-5xl sm:text-6xl md:text-8xl font-heading font-black leading-[0.8] mb-8 sm:mb-12 tracking-tighter uppercase italic", isDarkMode ? "text-white" : "text-brand-dark")}
              >
                Engineering <br />
                <span className="text-brand-green">Visual</span> <br />
                Harmonies.
              </motion.h2>

              <div className={cn(
                "grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 font-medium",
                isDarkMode ? "text-white/40" : "text-slate-500"
              )}>

                <p className="leading-relaxed text-sm">
                  Halo! Saya <strong>Aditia Saputra</strong>, mahasiswa Sistem Informasi yang memiliki ketertarikan pada pengembangan web dan mobile. Saya berpengalaman menggunakan teknologi seperti Laravel, Java, dan Android Studio dalam membangun aplikasi.
                </p>

                <p className="leading-relaxed text-sm">
                  Saya berfokus pada pengembangan sistem yang efisien serta antarmuka yang sederhana, modern, dan mudah digunakan. Saya terus mengembangkan kemampuan dalam menggabungkan teknologi dan desain untuk menciptakan solusi digital yang lebih baik.
                </p>

              </div>

              <div className="mt-12 sm:mt-16 flex flex-wrap gap-3 sm:gap-4">
                {["Android", "Architecture", "Clean Code", "UX Strategy"].map((tag, i) => (
                  <span key={i} className={cn(
                    "px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all",
                    isDarkMode ? "bg-white/5 text-brand-green border border-white/5" : "bg-slate-50 text-brand-dark border border-slate-100 shadow-sm"
                  )}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Skills (Modern Bento Grid) */}
      <section id="skills" className={cn("py-24 px-4 relative overflow-hidden transition-colors duration-500", isDarkMode ? "bg-black" : "bg-slate-50")}>
        {/* Background Decorative patterns */}
        <div className={cn("absolute inset-0 opacity-[0.03] pointer-events-none", isDarkMode ? "opacity-[0.08]" : "opacity-[0.03]")} style={{ backgroundImage: `radial-gradient(${isDarkMode ? '#34D399' : '#000'} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <SectionTitle title="Expertise" subtitle="Methodology & Stack" isDarkMode={isDarkMode} />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
            {/* Large Primary Focus: Mobile */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-brand-dark rounded-[3rem] md:rounded-[4rem] p-8 sm:p-12 md:p-24 flex flex-col justify-between text-white overflow-hidden relative group shadow-2xl border border-white/5"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2rem] md:rounded-[2.5rem] bg-brand-green/20 flex items-center justify-center border border-brand-green/30 backdrop-blur-xl">
                    <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-brand-green" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-green block mb-1">Core Expertise</span>
                    <h4 className="text-xl md:text-2xl font-black uppercase tracking-widest italic">Mobile Native</h4>
                  </div>
                </div>
                <h3 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black mb-8 md:mb-10 leading-[0.8] md:leading-[0.75] tracking-tighter uppercase italic">
                  Crafting <br /> High-Perf <br /> Mobile <br /> Apps.
                </h3>
                <p className="text-white/40 text-sm sm:text-base md:text-xl leading-relaxed max-w-lg font-medium">
                  Specializing in Android Native (Java/Kotlin) development with a focus on performance and clean architecture.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3 mt-10 md:mt-12 relative z-10">
                {["Java", "Kotlin", "Android Studio", "MVVM", "Clean Architecture"].map((tag) => (
                  <div key={tag} className="px-6 py-2.5 bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 backdrop-blur-md hover:bg-brand-green hover:text-brand-dark transition-colors cursor-default">
                    {tag}
                  </div>
                ))}
              </div>

              {/* Abstract animated shape */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 45, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"
              />
            </motion.div>

            {/* Web Feature Card */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={cn(
                "md:col-span-4 rounded-[3rem] md:rounded-[4rem] p-8 sm:p-12 border shadow-xl flex flex-col justify-between group hover:shadow-brand-green/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative",
                isDarkMode ? "bg-slate-900 border-white/5" : "bg-white border-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
              )}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full -translate-y-12 translate-x-12 blur-2xl opacity-50 group-hover:scale-150 transition-all duration-1000" />

              <div className="relative z-10">
                <div className={cn("w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-8 md:mb-10 shadow-inner transition-transform group-hover:scale-110 duration-500", isDarkMode ? "bg-black/50" : "bg-slate-50")}>
                  <Monitor className="w-6 h-6 md:w-7 md:h-7 text-brand-green" />
                </div>
                <h4 className={cn("text-2xl md:text-3xl font-black font-heading mb-6 italic uppercase tracking-tighter", isDarkMode ? "text-white" : "text-brand-dark")}>Web <br /> Artisan.</h4>
                <p className={cn("text-sm md:text-base font-medium leading-relaxed mb-6", isDarkMode ? "text-white/40" : "text-slate-500")}>
                  Laravel expert dengan fokus pada REST API, security, dan database design yang efisien.
                </p>

                {/* Additional Content to fill space */}
                <div className="space-y-3 mb-6 bg-white/5 p-6 rounded-3xl border border-white/5">
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-green mb-4">Core Stack Details</p>
                  {[
                    { label: "Backend", val: "Laravel / Node" },
                    { label: "Database", val: "MySQL / MongoDB" },
                    { label: "Architecture", val: "N-Tier / Micro" },
                    { label: "Security", val: "OAuth / JWT" }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between group/row">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{row.label}</span>
                      <div className="flex-1 mx-4 border-b border-dotted border-white/10" />
                      <span className={cn("text-[10px] font-bold", isDarkMode ? "text-white/80" : "text-brand-dark/80")}>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 relative z-10 flex items-center justify-between pt-6 border-t border-slate-100/10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 transition-colors group-hover:text-brand-green tracking-widest">PHP / MySQL</span>
                <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-white group-hover:bg-brand-green group-hover:text-brand-dark transition-all duration-500">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Horizontal Grid */}
            <div className="md:col-span-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {[
                { name: "React", type: "Frontend", icon: <Layout className="w-5 h-5" /> },
                { name: "Unity", type: "Game Dev", icon: <Gamepad2 className="w-5 h-5" /> },
                { name: "Tailwind", type: "Styling", icon: <Palette className="w-5 h-5" /> },
                { name: "Git", type: "DevOps", icon: <Github className="w-5 h-5" /> },
                { name: "Figma", type: "Design", icon: <FileText className="w-5 h-5" /> },
                { name: "Vite", type: "Build", icon: <Zap className="w-5 h-5" /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                  whileHover={{ y: -5 }}
                  className={cn(
                    "p-8 rounded-[3rem] border flex flex-col items-center justify-center text-center gap-4 transition-all duration-500",
                    isDarkMode ? "bg-white/[0.03] border-white/5 hover:bg-white/[0.08]" : "bg-white border-white shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-xl"
                  )}
                >
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform", isDarkMode ? "bg-white/5" : "bg-slate-50")}>
                    {item.icon}
                  </div>
                  <div>
                    <h5 className={cn("font-black text-[11px] uppercase tracking-widest leading-none mb-1.5", isDarkMode ? "text-white" : "text-slate-800")}>{item.name}</h5>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">{item.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Brutalist Marquee Separator */}
        <div className={cn("mt-24 border-y-2 py-8 overflow-hidden relative z-10 rotate-[-1deg] scale-105 origin-center transition-colors duration-500", isDarkMode ? "bg-brand-green border-brand-dark" : "bg-brand-dark border-brand-green")}>
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap items-center"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                <span className={cn("text-4xl font-heading font-black uppercase tracking-tighter italic", isDarkMode ? "text-brand-dark" : "text-brand-green")}>Creativity Meets Logic</span>
                <Sparkles className={cn("w-10 h-10", isDarkMode ? "text-brand-dark/40" : "text-brand-green/40")} />
                <span className={cn("text-4xl font-heading font-black uppercase tracking-tighter italic", isDarkMode ? "text-brand-dark" : "text-brand-green")}>Handcrafted Excellence</span>
                <Zap className={cn("w-10 h-10", isDarkMode ? "text-brand-dark/40" : "text-brand-green/40")} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. The Process (New Section for Professionalism) */}
      <section id="process" className={cn("py-32 px-4 relative overflow-hidden transition-colors duration-500", isDarkMode ? "bg-[#050505]" : "bg-slate-50")}>
        <div className="container mx-auto max-w-6xl relative z-10">
          <SectionTitle title="The Creative Methodology" subtitle="How I build" isDarkMode={isDarkMode} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Empathize", desc: "Understanding the problem space and user psychological needs.", icon: <Globe className="w-6 h-6" /> },
              { num: "02", title: "Strategize", desc: "Defining architectural paths and selecting the optimal tech stack.", icon: <Layers className="w-6 h-6" /> },
              { num: "03", title: "Engineer", desc: "Writing resilient, clean code with a focus on performance.", icon: <Code className="w-6 h-6" /> },
              { num: "04", title: "Refine", desc: "Continuous iteration and polishing until excellence is achieved.", icon: <Sparkles className="w-6 h-6" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={cn(
                  "group p-8 md:p-10 rounded-[3rem] flex flex-col items-start relative transition-all duration-500 border",
                  isDarkMode ? "bg-white/[0.02] border-white/5 hover:bg-white/[0.05]" : "bg-white border-slate-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2"
                )}
              >
                <div className="flex justify-between items-start w-full mb-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-green">{item.num}</span>
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-brand-dark transition-all duration-500">
                    {item.icon}
                  </div>
                </div>
                <h4 className={cn("text-2xl font-heading font-black italic uppercase tracking-tighter mb-4", isDarkMode ? "text-white" : "text-brand-dark")}>
                  {item.title}
                </h4>
                <p className={cn("font-medium text-sm leading-relaxed", isDarkMode ? "text-white/30" : "text-slate-500")}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5, 6, & 7. Portfolio Showcase (Unified Design) */}
      <section id="portfolio-showcase" className={cn("py-32 px-4 relative overflow-hidden transition-colors duration-500", isDarkMode ? "bg-black" : "bg-slate-50")}>
        <div className="container mx-auto max-w-6xl relative z-10">
          <SectionTitle title="The Logic Gallery" subtitle="Selected Works" isDarkMode={isDarkMode} />

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-24 px-4">
            {[
              { id: "projects", label: "Projects", icon: <Layout className="w-5 h-5" /> },
              { id: "certificates", label: "Certificates", icon: <Award className="w-5 h-5" /> },
              { id: "designs", label: "Designs", icon: <Palette className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setPortfolioTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-4 px-10 py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 relative overflow-hidden",
                  portfolioTab === tab.id
                    ? (isDarkMode ? "bg-brand-green text-brand-dark shadow-2xl scale-110" : "bg-brand-dark text-white shadow-2xl scale-110")
                    : (isDarkMode ? "bg-white/5 text-white/40 hover:text-brand-green border border-white/5" : "bg-white text-slate-400 border border-slate-100 hover:border-brand-green hover:text-brand-green shadow-sm")
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={portfolioTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {portfolioTab === "projects" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} index={i} isDarkMode={isDarkMode} />
                  ))}
                </div>
              )}

              {portfolioTab === "certificates" && (
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
                  {certificates.map((cert, i) => (
                    <motion.div
                      key={i}
                      animate={
                        clickedCertIndex === i
                          ? { scale: 1.15, y: -20, zIndex: 20 }
                          : { scale: 1, y: 0, zIndex: 1 }
                      }
                      whileHover={
                        clickedCertIndex === null
                          ? { x: 0, scale: 1.02 }
                          : {}
                      }
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20
                      }}
                      onClick={() => {
                        setClickedCertIndex(i);

                        setTimeout(() => {
                          setSelectedCert(cert);

                          setTimeout(() => {
                            setClickedCertIndex(null);
                          }, 100);
                        }, 300);
                      }}
                      className={cn(
                        "flex-shrink-0 w-[320px] snap-center rounded-[2.5rem] overflow-hidden border cursor-pointer group transition-all duration-500",
                        isDarkMode
                          ? "bg-slate-900 border-white/5"
                          : "bg-white border-brand-green/10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-xl"
                      )}
                    >
                      {/* Image Certificate */}
                      <div className="h-52 relative overflow-hidden bg-white">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        <div className="absolute top-4 right-4 badge-primary py-1 px-3 text-[10px]">
                          {cert.year}
                        </div>
                      </div>

                      {/* Certificate Info */}
                      <div className="p-8">
                        <h4
                          className={cn(
                            "text-lg font-bold mb-1 leading-snug group-hover:text-brand-green transition-colors",
                            isDarkMode ? "text-white" : "text-brand-dark"
                          )}
                        >
                          {cert.title}
                        </h4>

                        <p
                          className={cn(
                            "text-sm font-semibold mb-4",
                            isDarkMode ? "text-white/40" : "text-slate-500"
                          )}
                        >
                          {cert.issuer}
                        </p>

                        <div className="flex items-center justify-between text-xs font-bold text-brand-green">
                          <span className="flex items-center gap-1">
                            Preview <FileText className="w-3 h-3" />
                          </span>

                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
              {portfolioTab === "designs" && (
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
                  {designs.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      viewport={{ once: true }}
                      className={cn(
                        "flex-shrink-0 w-[280px] md:w-[400px] aspect-[4/3] snap-center relative group overflow-hidden rounded-[2.5rem] border transition-all duration-500",
                        isDarkMode ? "bg-slate-900 border-white/5" : "bg-white border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-xl"
                      )}
                    >
                      <img src={img} alt="Design" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                        <div className="text-white text-center p-6 flex flex-col items-center">
                          <p className="font-black text-xs uppercase tracking-[0.3em] mb-2">Refined Composition</p>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 px-8 py-3 bg-brand-green text-brand-dark rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl transition-all"
                          >
                            View Details
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={cn(
                "w-full max-w-4xl h-[80vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl relative transition-colors duration-500",
                isDarkMode ? "bg-slate-900" : "bg-white"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={cn("p-6 border-b flex items-center justify-between relative z-10 transition-colors duration-500", isDarkMode ? "bg-slate-900 border-white/10" : "bg-white border-slate-100")}>
                <div>
                  <h3 className={cn("text-xl font-bold", isDarkMode ? "text-white" : "text-brand-dark")}>{selectedCert.title}</h3>
                  <p className={cn("text-sm font-semibold", isDarkMode ? "text-white/40" : "text-slate-500")}>{selectedCert.issuer} • {selectedCert.year}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className={cn("p-3 rounded-2xl transition-all active:scale-90", isDarkMode ? "bg-white/5 text-white/40 hover:text-white" : "bg-brand-cream text-slate-500 hover:bg-brand-green hover:text-white")}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* PDF Container */}
              <div className="flex-1 bg-slate-50 relative">
                <iframe
                  src={selectedCert.pdfUrl}
                  className="w-full h-full border-none"
                  title={selectedCert.title}
                />
                <div className="absolute inset-0 pointer-events-none border-t border-slate-100" />
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-brand-cream/30 flex justify-end">
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  Download / Open Full <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Testimonials (Minimal High-End) */}
      <section className={cn("py-40 px-4 transition-colors duration-500", isDarkMode ? "bg-[#080808]" : "bg-white")}>
        <div className="container mx-auto max-w-5xl text-center">
          <SectionTitle title="The Verification" subtitle="Testimonials" isDarkMode={isDarkMode} />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            className={cn(
              "rounded-[3rem] md:rounded-[4rem] p-8 sm:p-16 md:p-24 relative overflow-hidden transition-all duration-500 border",
              isDarkMode ? "bg-white/[0.02] border-white/5" : "bg-slate-50 border-slate-100"
            )}
          >
            <div className="text-brand-green mb-10 opacity-20">
              <Zap className="w-20 h-20 mx-auto fill-current" />
            </div>
            <p className={cn("text-2xl md:text-4xl italic font-heading font-black tracking-tighter mb-12 leading-[1.1] uppercase", isDarkMode ? "text-white" : "text-brand-dark")}>
              "Aditia is a very talented and dedicated developer. His expertise in system analysis and problem solving is truly impressive."
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-3xl bg-brand-green overflow-hidden flex items-center justify-center text-2xl shadow-xl">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Testimonial" />
              </div>
              <div className="flex flex-col items-center">
                <span className={cn("font-black uppercase tracking-[0.3em] text-[10px]", isDarkMode ? "text-brand-green" : "text-brand-dark")}>Dosen Pembimbing</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Universitas Terkemuka</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Contact Section (Minimalist High-End) */}
      <section id="contact" className={cn("py-40 px-4 relative overflow-hidden transition-colors duration-500", isDarkMode ? "bg-black" : "bg-white")}>
        <div className="container mx-auto max-w-6xl relative z-10">
          <SectionTitle title="The Creative Dialogue" subtitle="Get in touch" isDarkMode={isDarkMode} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className={cn("text-5xl md:text-7xl font-heading font-black tracking-tighter leading-none mb-12 uppercase italic", isDarkMode ? "text-white" : "text-brand-dark")}>
                Let's Build <br /> The <span className="text-brand-green">Next</span> Big <br /> Logic <span className="text-brand-green outline-text-green">Together.</span>
              </h3>

              <div className="flex flex-col gap-8">
                <a href="mailto:aditiasaputra0967@gmail.com" className="group flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-brand-dark transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Email Me</p>
                    <p className={cn("text-xl font-bold font-heading", isDarkMode ? "text-white" : "text-brand-dark")}>aditiasaputra0967@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className={cn("p-12 rounded-[3.5rem] border", isDarkMode ? "bg-slate-900/50 border-white/5" : "bg-slate-50 border-slate-100")}>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: <Linkedin />, label: "LinkedIn", color: "text-[#0077B5]", link: "#" },
                  { icon: <Github />, label: "GitHub", color: "text-slate-400", link: "#" },
                  { icon: <Instagram />, label: "Instagram", color: "text-pink-500", link: "#" },
                  { icon: <Globe />, label: "Dribbble", color: "text-brand-green", link: "#" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-4 p-8 rounded-3xl glass text-center group"
                  >
                    <div className={cn("w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110", social.color)}>
                      {social.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={cn("py-20 px-4 border-t transition-colors duration-500", isDarkMode ? "border-white/5 bg-black" : "border-slate-100 bg-[#FAFAFA]")}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
            <div className={cn("text-3xl font-black font-heading tracking-tighter", isDarkMode ? "text-brand-green" : "text-brand-dark")}>
              ADITIA<span className="text-brand-green">.</span>
            </div>
            <div className={cn("flex gap-10 text-[10px] font-black uppercase tracking-widest", isDarkMode ? "text-white/40" : "text-slate-400")}>
              <a href="#about" className="hover:text-brand-green transition-colors">About</a>
              <a href="#portfolio-showcase" className="hover:text-brand-green transition-colors">Work</a>
              <a href="#skills" className="hover:text-brand-green transition-colors">Expertise</a>
              <a href="#contact" className="hover:text-brand-green transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
            <p className={cn("text-[10px] font-bold uppercase tracking-widest opacity-40", isDarkMode ? "text-white" : "text-slate-800")}>
              © {new Date().getFullYear()} Aditia Saputra. All Rights Reserved.
            </p>
            <p className={cn("text-[10px] font-bold uppercase tracking-widest opacity-40", isDarkMode ? "text-white" : "text-slate-800")}>
              Based in Indonesia / Working Worldwide
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-brand-green text-slate-900 flex items-center justify-center shadow-2xl border-4 border-white"
        >
          <MessageCircle className="w-8 h-8" />
        </motion.button>
      </div>

      {/* Cursor Glow effect (Subtle) */}
      <CustomCursor isDarkMode={isDarkMode} />
    </div>
  );
}

// --- Internal Components ---

const BackToTop = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={cn(
            "fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[100] w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all border",
            isDarkMode ? "bg-brand-green border-brand-green/20 text-brand-dark" : "bg-brand-dark border-white/10 text-white"
          )}
        >
          <Zap className="w-6 h-6 rotate-180" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const CustomCursor = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['BUTTON', 'A', 'IMG'].includes(target.tagName) || target.closest('.cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-brand-green pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(52, 211, 153, 0.3)" : "rgba(52, 211, 153, 0.001)"
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <div
        className={cn(
          "fixed pointer-events-none z-[9998] w-[400px] h-[400px] blur-[100px] rounded-full hidden md:block transition-all duration-500",
          isDarkMode ? "bg-brand-green/10" : "bg-brand-green/5"
        )}
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          transition: 'left 0.2s ease-out, top 0.2s ease-out, background 0.5s ease'
        }}
      />
    </>
  );
};

const SectionTitle = ({ title, subtitle, isDarkMode }: { title: string; subtitle: string; isDarkMode?: boolean }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <div ref={ref} className="mb-20 md:mb-28 relative">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        className="flex items-center gap-6 mb-6"
      >
        <div className="w-16 h-[2px] bg-brand-green" />
        <p className={cn("font-black uppercase tracking-[0.5em] text-[10px]", isDarkMode ? "text-brand-green" : "text-brand-green-dark")}>
          {subtitle}
        </p>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn("text-6xl md:text-[100px] font-heading font-black tracking-tighter leading-[0.8] uppercase italic", isDarkMode ? "text-white" : "text-brand-dark")}
      >
        {title.split(' ').map((word, i) => (
          <React.Fragment key={i}>
            {word === "Logic" || word === "Creative" || word === "Visual" ? <span className="text-brand-green">{word}</span> : word}{' '}
            {i === 1 && <br className="hidden md:block" />}
          </React.Fragment>
        ))}
      </motion.h2>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isDarkMode?: boolean;
  key?: React.Key;
}

const ProjectCard = ({ project, index, isDarkMode }: ProjectCardProps) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative rounded-[3rem] overflow-hidden transition-all duration-700",
        isDarkMode ? "bg-slate-900/50 border border-white/5" : "bg-white border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
        />

        {/* Overlay with View Project Button */}
        <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col items-center justify-center p-10">
          <motion.a
            href={project.link}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-brand-green text-brand-dark rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-2xl transition-all"
          >
            <span>View Project</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Small corner index */}
        <div className="absolute top-8 right-8 mix-blend-difference">
          <span className="text-white text-xs font-black opacity-40 uppercase tracking-widest">/ 0{index + 1}</span>
        </div>
      </div>

      <div className="p-8 md:p-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[9px] font-black text-brand-green uppercase tracking-[0.4em] mb-3">/ {project.category}</p>
            <h3 className={cn("text-2xl md:text-3xl font-heading font-black italic uppercase tracking-tighter transition-colors", isDarkMode ? "text-white" : "text-brand-dark")}>
              {project.title}
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-6 md:mt-8">
          {project.tags.map((tag, i) => (
            <span key={i} className={cn(
              "text-[9px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full transition-all border",
              isDarkMode ? "bg-white/5 text-white/30 border-white/5 group-hover:border-brand-green/30 group-hover:text-brand-green" : "bg-slate-50 text-slate-400 border-slate-100 group-hover:border-brand-green/20 group-hover:text-brand-dark"
            )}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
