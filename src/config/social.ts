import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Mail",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=naim.molla.stats@gmail.com",
        linkTitle: `Send an email to Md. Naim Molla via Gmail`,
        isActive: true,
    },
    {
        name: "Github",
        href: "https://github.com/md-naim-molla",
        linkTitle: `Follow Md. Naim Molla on Github`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?hl=en&user=_T4fa3EAAAAJ&view_op=list_works&authuser=1&gmla=ACrTK9VOGr_4OzG9r5l7BG9cRHOiCarAPkDr-Nc2GXx1b4FRYnZJXd0XcpROzPc48jYNI3AcgrUDmyeIcDH8TJfL",
        linkTitle: `Md. Naim Molla on Google Scholar`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/my-orcid?orcid=0009-0008-6915-0994",
        linkTitle: `Md. Naim Molla on ORCID`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/md-naimmolla",
        linkTitle: `Md. Naim Molla on LinkedIn`,
        isActive: true, // Assuming Claude doesn't have a LinkedIn profile
    },
    {
        name: "ResearchGate",
        href: "https://www.researchgate.net/profile/Md-Molla-67?ev=hdr_xprf",
        linkTitle: "Md. Naim Molla on ResearchGate",
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = { Github: "Github", Mail: "Mail", Linkedin: "LinkedIn", "Google Scholar": "GoogleScholar", ORCID: "ORCID", ResearchGate: "ResearchGate", RSS: "RSS" };