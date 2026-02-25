import { motion } from "motion/react";
import { Code, Server, Database, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "CSS", "JavaScript","TypeScript"],
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express","NestJS","Java"],
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500"
  },
  {
    title: "Tools & Platforms",
    icon: Server,
    skills: ["Git", "Google Cloud","AWS", "Vercel"],
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500"
  },
  {
    title: "AI/Data",
    icon: Brain,
    skills: ["Python", "Pandas", "Machine Learning"],
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
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
            Skills
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 group cursor-pointer"
              >
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
                  </motion.div>
                  <h3 className="text-xl">{category.title}</h3>
                </motion.div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * skillIndex }}
                      whileHover={{ x: 5, scale: 1.05 }}
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      • {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
