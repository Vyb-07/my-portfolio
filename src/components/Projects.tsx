import { Card } from "./ui/Card";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "In-krypt",
        desc: "Decentralized P2P lending platform leveraging blockchain, Ethereum smart contracts, and .NET for secure and transparent financial transactions.",
        tech: ["Blockchain", "Ethereum", ".NET"],
        period: "Dec 2022 - Apr 2023",
        link: "#",
        github: "#"
    },
    {
        title: "The IT Portal",
        desc: "University IT portal for student access to news, faculty, and resources. Built with Java, Spring Boot, and React.",
        tech: ["Java", "Spring Boot", "React"],
        period: "Apr 2022 - June 2022",
        link: "#",
        github: "#"
    },
    {
        title: "Taskify",
        desc: "An end-to-end task management backend that generates tasks, sends smart reminders, syncs calendars, enables collaboration, tracks streaks, and actively prevents productivity drop-offs.",
        tech: ["Spring Boot", "Mongo DB", "Redis", "Spring Security"],
        period: "2024",
        link: "#",
        github: "#"
    },
    {
        title: "Stockpulse",
        desc: "A Streamlit-based stock prediction app that visualizes market trends and uses machine learning on historical data to generate interactive, data-driven price forecasts.",
        tech: ["Python", "Tensorflow", "Streamlit"],
        period: "2024",
        link: "#",
        github: "#"
    }
];

export function Projects() {
    return (
        <section id="projects">
            <h2 className="text-5xl md:text-7xl font-black mb-16 text-center uppercase tracking-tight text-black dark:text-white">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                {projects.map((project, idx) => (
                    <Card key={idx} className="group hover:bg-neo-primary hover:text-white transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold">{project.title}</h3>
                            <div className="flex gap-2">
                                <a href={project.github} className="p-2 border-2 border-neo-border rounded-md hover:bg-white hover:text-black transition-colors"><Github size={20} /></a>
                                <a href={project.link} className="p-2 border-2 border-neo-border rounded-md hover:bg-white hover:text-black transition-colors"><ExternalLink size={20} /></a>
                            </div>
                        </div>
                        <p className="mb-6 font-medium text-slate-700 group-hover:text-white/90">{project.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 text-sm font-bold border-2 border-neo-border rounded-full bg-white text-black shadow-neo-sm group-hover:shadow-none transition-all">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}
