import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark py-8 border-t border-border/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="font-display text-xl font-bold text-primary-foreground">
            <span className="text-gradient">W</span>aqas Ahmed
          </div>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in Lahore
          </p>

          <div className="flex gap-6">
            <a href="#skills" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
