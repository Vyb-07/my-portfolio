import { motion } from 'framer-motion'

const skillCategories = [
    {
        title: "Backend Core",
        skills: ["Java 8+", "Spring Boot", "REST APIs", "Hibernate ORM", "JPA"],
        className: "col-span-12 md:col-span-6 lg:col-span-4 bg-white"
    },
    {
        title: "Database",
        skills: ["SQL", "MongoDB", "PostgreSQL"],
        className: "col-span-12 md:col-span-3 lg:col-span-4 bg-neo-accent"
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform"],
        className: "col-span-12 md:col-span-3 lg:col-span-4 bg-neo-primary text-white"
    },
    {
        title: "Tools & Others",
        skills: ["Git", "Jira", "Linux", "Maven", "Agile", "Scrum"],
        className: "col-span-12 md:col-span-6 bg-[#cbd5e1]"
    },
    {
        title: "Frontend",
        skills: ["React", "TypeScript", "Tailwind CSS"],
        className: "col-span-12 md:col-span-6 bg-white"
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-tight">
                Tech Stack
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4 px-4">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        className={`${category.className} border-2 border-neo-border rounded-neo p-6 shadow-neo hover:translate-y-[-4px] hover:shadow-neo-lg transition-all duration-300 relative overflow-hidden group`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        {/* Shine Effect Animation */}
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out]" />

                        <h3 className="text-xl font-black mb-4 uppercase tracking-wider">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className={`px-3 py-1 text-sm font-bold border-2 border-neo-border rounded-md ${category.className.includes('text-white') ? 'bg-white/20 border-white/40' : 'bg-white/50'}`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
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
