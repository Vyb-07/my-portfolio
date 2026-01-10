import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function GridBackground() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                setMousePos({
                    x: e.clientX,
                    y: e.clientY
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-neo-bg dark:bg-slate-900 transition-colors duration-300">
            {/* Base Grid - Light Mode */}
            <div
                className="absolute inset-0 z-0 bg-transparent opacity-100 dark:opacity-0 transition-opacity duration-300"
                style={{
                    backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Base Grid - Dark Mode (White Lines) */}
            <div
                className="absolute inset-0 z-0 bg-transparent opacity-0 dark:opacity-40 transition-opacity duration-300"
                style={{
                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Hover Spotlight Effect */}
            <motion.div
                className="absolute z-10 w-64 h-64 bg-neo-primary/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none"
                animate={{
                    x: mousePos.x - 128,
                    y: mousePos.y - 128,
                }}
                transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                    mass: 0.1
                }}
            />
        </div>
    );
}
