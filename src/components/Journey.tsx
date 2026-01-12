import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

const journeyItems = [
    {
        type: "work",
        role: "Analyst - Backend Developer",
        company: "DELOITTE",
        period: "Feb 2024 - Present",
        description: [
            "Architected scalable microservices using Java & Spring Boot.",
            "Enhanced observability with Splunk integration.",
            "Engineered high-performance database queries."
        ],
        tags: ["Spring Boot", "Microservices", "Splunk"]
    },
    {
        type: "work",
        role: "Assoc. Software Engineer Trainee",
        company: "THIS",
        period: "Aug 2023 - Feb 2024",
        description: [
            "Built robust cloud-native infrastructure with Docker & K8s.",
            "Automated CI/CD pipelines to AWS.",
            "Collaborated on enterprise cloud solutions."
        ],
        tags: ["AWS", "Kubernetes", "Docker"]
    },
    {
        type: "education",
        role: "B.Tech, IT",
        company: "VVIT",
        period: "2019 - 2023",
        description: [
            "Where it all started. Discovered passion for code.",
            "Graduated with 8.34 CGPA.",
            "Silver Medalist in Cloud Computing (NPTEL)."
        ],
        tags: ["Java", "DSA", "Academia"]
    }
];

export function Journey() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"])

    return (
        <section ref={targetRef} id="journey" className="relative h-[400vh] z-20">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Fixed Title - Updated Color to match other sections */}
                {/* Removed mix-blend-difference, set explicit text colors */}
                <div className="absolute top-4 left-4 md:left-20 z-10 pointer-events-none">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-none text-black dark:text-white">
                        My Journey
                    </h2>
                    <p className="font-bold text-lg md:text-xl mt-2 text-neo-primary dark:text-neo-accent opacity-100">
                        &larr; Walking back in time
                    </p>
                </div>

                {/* Horizontal Track */}
                <motion.div style={{ x }} className="flex items-center pl-[20vw] h-full relative">

                    {/* Content Container */}
                    <div className="relative flex items-center h-full">

                        {/* The Main Horizontal Line - Shifted to 60% down to avoid title collision */}
                        <div className="absolute top-[60%] left-0 w-full h-2 bg-neo-text dark:bg-white -translate-y-1/2 z-0" />

                        {/* Initial Spacer */}
                        <div className="w-[10vw] flex-shrink-0" />

                        {journeyItems.map((item, idx) => {
                            const isAbove = idx % 2 === 0;
                            return (
                                <div key={idx} className="relative w-[500px] h-full flex-shrink-0 mx-10">
                                    {/* The Center Node on the Line */}
                                    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-neo-bg dark:bg-slate-900 border-4 border-neo-text dark:border-white rounded-full z-20 shadow-neo group hover:scale-125 transition-transform" />

                                    {/* Connector Line */}
                                    {/* Reduced height from h-32 to h-20 for better fit */}
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 w-1 bg-neo-text dark:bg-white z-0
                                        ${isAbove ? 'bottom-[40%] h-20' : 'top-[60%] h-20'}`}
                                    />

                                    {/* The Card - Absolutely Positioned */}
                                    <div
                                        className={`absolute left-0 w-full bg-white dark:bg-slate-800 border-4 border-neo-border dark:border-white shadow-neo dark:shadow-[6px_6px_0_0_#fff] rounded-neo p-8 z-10
                                        ${isAbove ? 'bottom-[40%] mb-20' : 'top-[60%] mt-20'}
                                        `}
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-2xl font-black text-neo-text dark:text-white leading-tight">{item.role}</h3>
                                            <span className="text-xs font-black bg-neo-text dark:bg-white text-white dark:text-neo-text px-2 py-1 rounded uppercase whitespace-nowrap">{item.period}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm font-bold text-neo-primary dark:text-neo-accent mb-4">
                                            {item.type === 'education' ? <GraduationCap size={18} /> : <Briefcase size={18} />}
                                            {item.company}
                                        </div>

                                        <ul className="space-y-2 mb-4">
                                            {item.description.map((desc, i) => (
                                                <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium text-sm">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-neo-accent rounded-full shrink-0" />
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 border border-neo-border dark:border-slate-500 rounded-md font-bold text-xs text-neo-text dark:text-white">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {/* Terminating Marker */}
                        <div className="relative mx-10 flex-shrink-0 flex items-center justify-center h-full">
                            <div className="absolute top-[60%] left-0 flex items-center -translate-y-1/2">
                                <div className="w-6 h-6 bg-neo-text dark:bg-white rounded-full z-20" />

                                <div className="ml-6 border-4 border-neo-text dark:border-white bg-neo-accent text-neo-text font-black px-6 py-4 rounded-neo shadow-neo dark:shadow-[6px_6px_0_0_#fff] whitespace-nowrap">
                                    THE BEGINNING
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
