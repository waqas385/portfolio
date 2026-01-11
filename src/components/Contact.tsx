import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-medium tracking-wide">Get In Touch</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life 
            with modern, scalable solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <motion.a
              href="mailto:waqas385@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-500 border border-border/50 hover:border-primary/30 text-center"
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">waqas385@gmail.com</p>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href="tel:+923324532213"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-500 border border-border/50 hover:border-primary/30 text-center"
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+92 332 4532213</p>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-500 border border-border/50 hover:border-primary/30 text-center"
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Lahore, Pakistan</p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-dark rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(175 70% 38%) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />

            <div className="relative z-10">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                I'm always open to discussing new projects, creative ideas, 
                or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:waqas385@gmail.com"
                  className="inline-flex items-center gap-2 bg-gradient-hero px-8 py-4 rounded-full text-primary-foreground font-semibold shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </a>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-4 mt-8">
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
