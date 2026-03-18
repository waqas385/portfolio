import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "The Neo Solutions",
    location: "Lahore",
    period: "May 2024 - Present",
    description: "Managing & creating RESTful APIs for e-commerce and social apps using Nest.js, MySQL & PostgreSQL. Handling integrations with Stripe, payment gateways, and AWS S3.",
    technologies: ["Nest.js", "Node.js", "MySQL", "PostgreSQL", "AWS", "React"],
    current: true,
  },
  {
    title: "Senior Front-End Developer",
    company: "Netshore",
    location: "Lahore",
    period: "Jan 2017 - Jan 2024",
    description: "Part of Atea FE team working on eShop (B2B) e-commerce solution. Upgraded Vue.js from v2 to v3, conducted code reviews, and managed development build processes.",
    technologies: ["Vue.js", "JavaScript", "Java", "Webpack", "LESS", "A11Y"],
    current: false,
  },
  {
    title: "Senior Software Engineer",
    company: "Strategic Systems International",
    location: "Lahore",
    period: "Jun 2014 - Dec 2016",
    description: "Developed web applications for healthcare, job-router and ETL solutions. Led database design, KPI calculations, and data visualization implementations.",
    technologies: ["PHP", "Laravel", "MySQL", "FusionCharts", "ETL"],
    current: false,
  },
  {
    title: "Senior Software Engineer",
    company: "Nextbridge",
    location: "Lahore",
    period: "Feb 2010 - Jun 2014",
    description: "Developed PDF & HTML forms for MasterControl process solutions. Created REST APIs in PHP, managed database migrations, and maintained UI/UX for healthcare platforms.",
    technologies: ["PHP", "VB.Net", "REST APIs", "Yii", "MySQL"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-medium tracking-wide">Career Journey</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering impactful solutions across diverse industries, 
            from e-commerce to healthcare.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {/* Timeline dot */}
              <div className={`absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                exp.current 
                  ? "bg-primary border-primary animate-pulse-glow" 
                  : "bg-gradient-dark border-primary/50"
              }`} />

              {/* Content card */}
              <div className="bg-card/5 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-500 group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-primary-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  {exp.current && (
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
