import { motion } from 'framer-motion'

const skillCategories = [
    {
        title: "Backend Core",
        skills: ["Java 8+", "Spring Boot", "Spring Security", "REST APIs", "Hibernate ORM", "JPA"],
        className: "col-span-12 md:col-span-6 lg:col-span-4 bg-white"
    },
    {
        title: "Database",
        skills: ["SQL", "MongoDB", "PostgreSQL", "Redis"],
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
        <section id="skills" className="min-h-screen flex flex-col justify-center py-20 relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-20 text-center uppercase tracking-tight text-black dark:text-white">
                Tech Stack
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 px-4 w-full">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        className={`${category.className} border-4 border-neo-border rounded-neo p-8 md:p-10 shadow-neo hover:translate-y-[-6px] hover:shadow-neo-lg transition-all duration-300 relative overflow-hidden group`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        {/* Shine Effect Animation - Conditional Color */}
                        <div
                            className={`absolute top-0 -left-[100%] w-full h-full skew-x-12 group-hover:animate-[shine_1s_ease-in-out]
                            ${category.className.includes('bg-white')
                                    ? 'bg-gradient-to-r from-transparent via-black/10 to-transparent'
                                    : 'bg-gradient-to-r from-transparent via-white/20 to-transparent'}`}
                        />

                        <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-wider">{category.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className={`px-4 py-2 text-base md:text-lg font-bold border-2 border-neo-border rounded-md ${category.className.includes('text-white') ? 'bg-white/20 border-white/40' : 'bg-white/50'}`}
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
