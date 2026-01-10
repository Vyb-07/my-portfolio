import { motion, useScroll, useTransform } from 'framer-motion'
import heroImage from '../assets/hero.png'

export function Hero() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -100])

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-neo-bg dark:bg-slate-900 transition-colors duration-300">
            {/* Abstract Background Shapes */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-20 left-10 w-32 h-32 bg-neo-accent rounded-full border-2 border-neo-border dark:border-white opacity-50 blur-sm dark:opacity-20"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-20 right-10 w-48 h-48 bg-neo-primary rounded-neo border-2 border-neo-border dark:border-white opacity-20 rotate-12 dark:opacity-20"
            />

            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div>
                        <span className="inline-block px-4 py-2 bg-neo-accent text-neo-text font-bold border-2 border-neo-border dark:border-white rounded-full mb-4 shadow-neo-sm">
                            Back end Dev
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black leading-tight text-neo-text dark:text-white">
                            HI, I'M <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-primary to-neo-accent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">
                                VAIBHAV
                            </span>
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium max-w-lg">
                        I build scalable, secure, and high-performance backends. Currently coding at Deloitte.
                    </p>
                    <div className="flex gap-4">
                        <a href="#contact" className="px-8 py-3 bg-neo-border text-white font-bold rounded-neo border-2 border-transparent hover:bg-slate-800 dark:bg-white dark:text-neo-text dark:hover:bg-slate-200 transition-colors shadow-neo dark:shadow-[4px_4px_0px_0px_#ffffff] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none">
                            Contact Me
                        </a>
                        <a href="#projects" className="px-8 py-3 bg-white text-neo-text font-bold rounded-neo border-2 border-neo-border hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-slate-700 transition-colors shadow-neo dark:shadow-[4px_4px_0px_0px_#ffffff] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none">
                            View Work
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-neo overflow-hidden border-4 border-neo-border dark:border-white shadow-neo-lg dark:shadow-[8px_8px_0_0_#fff] bg-white">
                        <img src={heroImage} alt="Vaibhav Gudali" className="w-full h-auto object-cover max-h-[600px] z-10 relative" />
                        {/* Circle Cutout Effect */}
                        <div className="absolute inset-0 bg-neo-accent/20 z-20 mix-blend-multiply opacity-0 dark:opacity-100 pointer-events-none" />
                    </div>
                    {/* Decorative rectangle behind image */}
                    <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-neo-primary rounded-neo border-4 border-neo-border dark:border-white" />
                </motion.div>
            </div>
        </div>
    )
}
