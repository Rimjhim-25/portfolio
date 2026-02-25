import { useState } from "react";
import { motion } from "motion/react";
import { FileText, Download, Loader2 } from "lucide-react";


interface PortfolioActionsProps {
  /** "hero" — larger pill buttons rendered in the Hero section
   *  "nav"  — compact buttons rendered in the Navigation bar      */
  variant?: "hero" | "nav";
}

export function PortfolioActions({ variant = "hero" }: PortfolioActionsProps) {
  const [isGenerating, setIsGenerating] = useState(false);



  // ── Hero variant (default) ────────────────────────────────────────────────
  return (
    <div className="flex flex-wrap items-center gap-3 justify-center">
      <motion.a
 href="/Rimjhim_Mahata_Resume.pdf"
 target="_blank"
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 className="flex items-center gap-2 px-6 py-3 text-sm font-semibold
            border-2 border-primary text-primary rounded-xl
            hover:bg-primary hover:text-primary-foreground
            transition-all duration-200 shadow-sm hover:shadow-md"
>
 <FileText className="w-4 h-4" />
 View Resume
</motion.a>

   
    </div>
  );
}

