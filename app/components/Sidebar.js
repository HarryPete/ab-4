import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3 } },
    exit: { x: "100%", transition: { duration: 0.3 } }
};

const Sidebar = ({ setShowSidebar }) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".sidebar-container")) {
                setShowSidebar(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowSidebar]);

    return (
        <motion.div
            className="absolute top-0 right-0 z-10 h-[100vh] flex flex-col gap-6 pl-2 border bg-white w-96 items-center justify-center shadow-lg sidebar-container"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
        >
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href='/projects' className="text-lg font-semibold w-2/3 rounded text-center p-2 hover:bg-green-600 hover:text-white">Projects</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href='/about' className="text-lg font-semibold w-2/3 rounded text-center p-2 hover:bg-green-600 hover:text-white">About</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href='' className="text-lg font-semibold w-2/3 rounded text-center p-2 hover:bg-green-600 hover:text-white">Contact</Link>
            </motion.div>
            <motion.button
                className="absolute top-5 right-5 text-3xl cursor-pointer font-semibold"
                style={{ color: 'var(--primary-color)' }}
                onClick={() => setShowSidebar(false)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                X
            </motion.button>
        </motion.div>
    );
};

export default Sidebar;