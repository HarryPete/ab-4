"use client"; // If using Next.js, add this line at the top
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiAmazonwebservices, SiCss3, SiFigma, SiFramer, SiHtml5, SiJavascript, 
  SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTypescript 
} from "react-icons/si";

const techStack = [
  { icon: SiHtml5, color: "text-orange-600", name: "HTML" },
  { icon: SiCss3, color: "text-blue-400", name: "CSS" },
  { icon: SiJavascript, color: "text-yellow-500", name: "JavaScript" },
  { icon: SiReact, color: "text-cyan-600", name: "React JS" },
  { icon: SiRedux, color: "text-blue-500", name: "Redux" },
  { icon: SiNextdotjs, color: "text-stone-500", name: "Next JS" },
  { icon: SiNodedotjs, color: "text-green-500", name: "Node JS" },
  { icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
  { icon: SiFigma, color: "text-sky-300", name: "Figma" },
  { icon: SiFramer, color: "text-white", name: "Framer" },
  { icon: SiTypescript, color: "text-sky-700", name: "Typescript" },
  { icon: SiAmazonwebservices, color: "text-amber-400", name: "AWS" },
];

// Parent animation (container)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Delay between each child animation
  },
};

// Individual card animation
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div 
      ref={ref}
      className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {techStack.map((tech, index) => {
        const IconComponent = tech.icon;
        return (
          <motion.div 
            key={index} 
            className="flex flex-col items-center bg-stone-900 rounded-xl shadow-md p-9"
            variants={itemVariants} 
            whileHover={{ scale: 1.05 }}
          >
            <IconComponent className={`${tech.color} text-5xl`} />
            <span className="text-sm mt-4 text-muted">{tech.name}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TechStack;
