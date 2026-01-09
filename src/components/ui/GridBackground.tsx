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
        <div ref={containerRef} className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            {/* Base Grid */}
            <div
                className="absolute inset-0 z-0 bg-transparent"
                style={{
                    backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Hover Spotlight Effect */}
            <motion.div
                className="absolute z-10 w-64 h-64 bg-neo-primary/10 rounded-full blur-3xl pointer-events-none"
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

            {/* Dynamic Grid Lines Spotlight (Subtle) */}
            <div
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 40%)`,
                    WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 40%)`,
                    opacity: 1
                }}
            />
        </div>
    );
}
