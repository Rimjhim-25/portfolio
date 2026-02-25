import { motion } from "motion/react";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import html2pdf from "html2pdf.js";

export function Contact() {
  const handleDownloadPDF = () => {
    const element = document.body;
    const opt = {
      margin: 0.5,
      filename: 'Rimjhim_Mahata_Portfolio.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-4 text-primary"
            whileHover={{ scale: 1.02, x: 10 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mb-8 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="bg-card border border-border rounded-lg p-8 md:p-12"
        >
          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center gap-4 w-full max-w-md">
              <motion.div 
                className="p-4 bg-primary/10 rounded-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <motion.a
                  href="mailto:rimjhimmahata@gmail.com"
                  className="text-foreground hover:text-primary transition-colors break-all"
                  whileHover={{ x: 5 }}
                >
                  rimjhimmahata@gmail.com
                </motion.a>
              </div>
            </div>

            <div className="w-full max-w-md">
              <div className="h-px bg-border"></div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="mailto:rimjhimmahata@gmail.com"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </motion.a>
              
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center text-muted-foreground"
        >
          <motion.p 
            className="mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Let's create something amazing together
          </motion.p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/Rimjhim-25"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rimjhim-mahata/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -360 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </div>
            </motion.a>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}