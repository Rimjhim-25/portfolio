import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { PortfolioActions } from "./PortfolioActions";

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const wiggleAnimation = {
  rotate: [0, -5, 5, -5, 0],
  transition: {
    duration: 0.5
  }
};

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground">
            BSc Data Science Student
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
        >
          <motion.span 
            className="block text-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Rimjhim
          </motion.span>
          <motion.span 
            className="block text-primary"
            whileHover={wiggleAnimation}
          >
            Mahata
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Pre-final year student at Asansol Engineering College, passionate about data science, 
          full-stack development, and building impactful digital experiences.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-secondary transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Resume & PDF download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-4"
        >
          <PortfolioActions variant="hero" />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}