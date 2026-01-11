import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["JavaScript", "TypeScript", "Vue.js", "React", "HTML/CSS", "jQuery", "Mustache", "Webpack", "Grunt"],
    color: "from-primary to-primary/70",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Nest.js", "PHP", "Laravel", "Java", "REST APIs", "CodeIgniter", "Yii"],
    color: "from-accent to-accent/70",
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MS SQL", "Database Design", "Migrations"],
    color: "from-primary to-accent",
  },
  {
    title: "DevOps & Tools",
    skills: ["AWS", "Git", "Linux", "Webpack", "NPM", "Yarn", "Jira", "DevOps"],
    color: "from-accent/80 to-primary/80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-medium tracking-wide">What I Do</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 16+ years of hands-on experience 
            across diverse projects and industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-500 h-full border border-border/50 hover:border-primary/30">
                {/* Gradient header bar */}
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color} mb-6 group-hover:w-full transition-all duration-500`} />
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * skillIndex, duration: 0.3 }}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
