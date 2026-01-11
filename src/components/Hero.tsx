import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone, Download } from "lucide-react";
import profileImage from "@/assets/waqas-profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(175 70% 38%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 38%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-hero rounded-full animate-pulse-glow" />
              <div className="absolute inset-2 bg-gradient-dark rounded-full" />
              <img
                src={profileImage}
                alt="Waqas Ahmed"
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-full"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-2 -right-2 bg-primary px-4 py-2 rounded-full shadow-glow"
            >
              <span className="text-primary-foreground font-display font-semibold text-sm">16+ Years</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-primary font-display font-medium tracking-wide mb-3">Hello, I'm</p>
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-primary-foreground mb-4">
                Waqas Ahmed
              </h1>
              <h2 className="text-2xl lg:text-3xl font-display font-semibold text-gradient mb-6">
                Senior Software Engineer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Accomplished Software Engineer with expertise in full-stack development, 
              system architecture, and agile methodologies. Passionate about leveraging 
              cutting-edge technologies to solve complex problems and drive business growth.
            </motion.p>

            {/* Location & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Lahore, Pakistan
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +92 332 4532213
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="mailto:waqas385@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-hero px-6 py-3 rounded-full text-primary-foreground font-semibold shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 border-2 border-primary/30 px-6 py-3 rounded-full text-primary-foreground font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                View Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:waqas385@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
