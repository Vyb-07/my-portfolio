import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
    title?: string
}

export function Card({ children, className, title }: CardProps) {
    return (
        <motion.div
            whileHover={{ translateX: 2, translateY: 2, boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)' }}
            className={`bg-white border-2 border-neo-border shadow-neo rounded-neo p-6 transition-all ${className || ''}`}
        >
            {title && <h3 className="text-xl font-bold mb-4 border-b-2 border-neo-border pb-2 inline-block">{title}</h3>}
            {children}
        </motion.div>
    )
}
