import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About Me",
        subtitle: "",
        isActive: true,
    },
    research: {
        title: "Research",
        subtitle: "Research statement, core themes, and collaborative directions.",
        isActive: true,
    },
    skills: {
        title: "Skills",
        subtitle: "",
        isActive: true,
    },
    publications: {
        title: "Publications",
        subtitle: "A collection of research papers and scientific articles.",
        isActive: true,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Conference presentations, scientific talks, and academic engagements.",
        isActive: true,
    },
    projects: {
        title: "Code & Projects",
        subtitle: "Open source contributions and technological experiments.",
        isActive: true,
    },
    // teaching and tags removed
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Academic and professional history.",
        isActive: true,
    },
    contact: {
        title: "Contact",
        subtitle: "Questions, collaborations, or research opportunities. Happy to hear from you.",
        isActive: true,
    },
};
