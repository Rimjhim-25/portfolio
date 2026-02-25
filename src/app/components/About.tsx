import { motion } from "motion/react";
import { GraduationCap, BookOpen } from "lucide-react";

const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate data science student with a strong foundation in full-stack development 
              and a keen interest in solving real-world problems through technology and data-driven solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My journey in tech has been enriched by hands-on experience in web development and digital 
              marketing, allowing me to bridge the gap between technical implementation and user-centric design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in continuous learning and am always excited to take on new challenges that push 
              the boundaries of what's possible with code and data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 bg-primary/10 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="mb-2">Education</h3>
                  <p className="text-muted-foreground">BSc Data Science</p>
                  <p className="text-sm text-muted-foreground">Asansol Engineering College</p>
                  <p className="text-sm text-primary mt-1">Pre-final Year</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 bg-primary/10 rounded-lg"
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.5 }}
                >
                  <BookOpen className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="mb-2">Specialization</h3>
                  <p className="text-muted-foreground">Data Science & Analytics</p>
                  <p className="text-sm text-muted-foreground mt-2">Full-Stack Development</p>
                  <p className="text-sm text-muted-foreground">Artificial Intelligence</p>
                  <p className="text-sm text-muted-foreground">SEO & Digital Marketing</p>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}