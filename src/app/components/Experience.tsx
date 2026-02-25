import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Naiyo24",
    description: "Developed and maintained full-stack web applications, working with modern technologies to deliver scalable solutions. Collaborated with cross-functional teams to implement new features and optimize existing codebase.",
    skills: ["React", "Node.js", "Database Management", "API Development"]
  },
  {
    title: "SEO Intern",
    company: "Cannibals Media",
    description: "Optimized website content and structure for search engines, conducted keyword research and analysis. Implemented SEO strategies that improved organic traffic and search rankings for client websites.",
    skills: ["SEO", "Content Strategy", "Analytics", "Digital Marketing"]
  }
];

const skillBadgeVariants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.1, 
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-4 text-primary"
            whileHover={{ scale: 1.02, x: 10 }}
          >
            Experience
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <motion.div 
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl mb-1">{exp.title}</h3>
                    <motion.p 
                      className="text-primary"
                      whileHover={{ x: 5 }}
                    >
                      {exp.company}
                    </motion.p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={skillBadgeVariants}
                    initial="rest"
                    whileHover="hover"
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}