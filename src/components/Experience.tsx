import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
    {
        role: "Analyst - Backend Developer",
        company: "DELOITTE",
        period: "Feb 2024 - Present",
        description: [
            "Built and optimized microservices with Java, Spring Boot, improving efficiency by 4–5%.",
            "Enhanced observability by integrating Splunk, reducing incident resolution time by 15–20%.",
            "Optimized MongoDB/MySQL queries for faster execution and ensured seamless data consistency."
        ]
    },
    {
        role: "Associate Software Engineer Trainee",
        company: "THIS",
        period: "Aug 2023 - Feb 2024",
        description: [
            "Implemented CI/CD pipelines with Docker, Kubernetes, Ansible, and Terraform.",
            "Deployed applications on AWS, optimizing infrastructure for performance and cost efficiency."
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-20 relative">
            <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-tight">
                Experience
            </h2>

            <div className="max-w-4xl mx-auto px-4 relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-neo-border -translate-x-1/2" />

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-8 md:left-1/2 top-0 w-6 h-6 bg-neo-accent border-4 border-neo-border rounded-full -translate-x-1/2 z-10 shadow-[0_0_0_4px_#e2e8f0]" />

                            {/* Content */}
                            <div className="ml-16 md:ml-0 md:w-1/2">
                                <div className={`bg-white border-2 border-neo-border shadow-neo rounded-neo p-6 relative ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} hover:translate-y-[-4px] hover:shadow-neo-lg transition-all duration-300`}>
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <div className={`flex items-center gap-2 text-sm font-bold text-neo-primary mt-1 mb-4 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        <Briefcase size={16} />
                                        <span>{exp.company}</span>
                                        <span className="text-slate-400">|</span>
                                        <Calendar size={16} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <ul className={`text-slate-700 text-sm space-y-2 list-disc list-inside ${idx % 2 === 0 ? '' : 'md:[&_li]:list-none'}`}>
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
