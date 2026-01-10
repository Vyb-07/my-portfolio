import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, CheckCircle, Copy } from 'lucide-react'
import { useState } from 'react'


export function Contact() {
    const [copied, setCopied] = useState(false)

    const copyEmail = () => {
        navigator.clipboard.writeText("vaibhavgudali@gmail.com")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 }
    }

    return (
        <section id="contact" className="py-20 px-4 text-neo-text dark:text-white">
            <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white mb-16 text-center uppercase tracking-tight">
                Let's Connect
            </h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4"
            >
                {/* Status Block */}
                <motion.div
                    variants={item}
                    className="md:col-span-2 bg-neo-text text-white p-8 rounded-neo border-2 border-neo-text shadow-neo flex flex-col justify-between min-h-[200px] group relative overflow-hidden"
                >
                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out]" />

                    <div className="flex items-center gap-3" >
                        <span className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                        </span>
                        <span className="font-bold border px-2 py-0.5 rounded-full text-xs tracking-wider">STATUS</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-black leading-none mb-2">AVAILABLE<br />to connect</h3>
                        <p className="text-gray-400 font-medium">Open to backend & full-stack roles.</p>
                    </div>
                </motion.div>

                {/* Email Block */}
                <motion.div
                    variants={item}
                    className="md:col-span-2 bg-white p-8 rounded-neo border-2 border-neo-border shadow-neo hover:shadow-neo-lg transition-all cursor-pointer group relative overflow-hidden"
                    onClick={copyEmail}
                    whileHover={{ y: -4 }}
                >
                    {/* Shine Effect - Dark for white background */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out]" />

                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                        {copied ? <CheckCircle className="text-green-500" /> : <Copy className='text-black' />}
                    </div>
                    <div className="h-full flex flex-col justify-between">
                        <div className="w-12 h-12 bg-neo-accent rounded-full border-2 border-neo-border flex items-center justify-center mb-4">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-500 mb-1">DROP A MAIL</p>
                            <h3 className="text-xl md:text-2xl font-black text-gray-600 truncate">vaibhavgudali@gmail.com</h3>
                            <p className="text-xs font-bold text-neo-primary mt-2">{copied ? "COPIED TO CLIPBOARD!" : "CLICK TO COPY"}</p>
                        </div>
                    </div>
                </motion.div>

                {/* LinkedIn */}
                <motion.a
                    variants={item}
                    href="https://linkedin.com/in/VaibhavGudali"
                    target="_blank"
                    className="md:col-span-1 bg-[#0077b5] text-white p-6 rounded-neo border-2 border-neo-border shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-4 group relative overflow-hidden"
                >
                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out]" />

                    <Linkedin size={48} className="group-hover:scale-110 transition-transform" />
                    <span className="font-bold">LINKEDIN</span>
                </motion.a>

                {/* GitHub */}
                <motion.a
                    variants={item}
                    href="https://github.com/Vyb-07"
                    target="_blank"
                    className="md:col-span-1 bg-[#181717] text-white p-6 rounded-neo border-2 border-neo-border shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-4 group relative overflow-hidden"
                >
                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out]" />

                    <Github size={48} className="group-hover:scale-110 transition-transform" />
                    <span className="font-bold">GITHUB</span>
                </motion.a>

                {/* Phone/Location or Extra */}
                <motion.div
                    variants={item}
                    className="md:col-span-2 bg-neo-accent p-6 rounded-neo border-2 border-neo-border shadow-neo flex items-center justify-between px-8 group relative overflow-hidden"
                >
                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out]" />

                    <div>
                        <p className="font-bold text-xs uppercase opacity-70 mb-1">Location</p>
                        <p className="font-black text-xl">India</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-xs uppercase opacity-70 mb-1">Phone</p>
                        <p className="font-black text-xl">+91 7032353043</p>
                    </div>
                </motion.div>

            </motion.div>

            {/* Custom Animation Style for Shine */}
            <style>{`
                @keyframes shine {
                    0% { left: -100%; }
                    100% { left: 200%; }
                }
            `}</style>
        </section>
    )
}
