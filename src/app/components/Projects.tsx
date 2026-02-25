import { motion } from "motion/react";
import { ExternalLink, Github, Heart, Gamepad2 } from "lucide-react";

const projects = [
  {
    title: "Vaidiki",
    description: "A comprehensive women-centric healthcare application designed to provide personalized health tracking, resources, and support for women's wellness journey. Features include health monitoring, educational content, and community support.",
    icon: Heart,
    tags: ["Healthcare", "Mobile App", "User Experience", "Data Science"],
    color: "primary",
    link: "https://vaidiki-i66a.vercel.app/"
  },
  {
    title: "Pacman Game",
    description: "A classic arcade game reimagined with modern web technologies. Features smooth animations, multiple levels, score tracking, and responsive controls for an engaging gaming experience.",
    icon: Gamepad2,
    tags: ["Game Development", "JavaScript", "Canvas", "Animation"],
    color: "primary",
    link: "https://pacman-game-y8d2.vercel.app/"
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
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
            Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 group cursor-pointer"
              >
                <div className="mb-6">
                  <motion.div 
                    className="p-4 bg-primary/10 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-primary" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl mb-3"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors border border-primary/20"
                  >
                    View Project
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </motion.a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}