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
            className={`bg-white dark:bg-slate-800 border-2 border-neo-border dark:border-white shadow-neo dark:shadow-[5px_5px_0px_0px_#ffffff] rounded-neo p-6 transition-all ${className || ''}`}
        >
            {title && <h3 className="text-xl font-bold mb-4 border-b-2 border-neo-border dark:border-white pb-2 inline-block dark:text-white">{title}</h3>}
            {children}
        </motion.div>
    )
}
