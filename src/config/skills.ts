export interface SkillCategory {
    name: string;
    description: string;
    icon: string;
    skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        name: "Machine Learning",
        description: "Exploratory data analysis, feature engineering, predictive model training, evaluation, and deployment.",
        icon: "Brain",
        skills: ["EDA", "Feature Engineering", "Model Training & Evaluation", "Model Deployment"],
    },
    {
        name: "NLP & Generative AI",
        description: "Large language models, vector databases, RAG architecture, embeddings, and transformer pipelines.",
        icon: "Brain",
        skills: ["LLM", "Vector Database", "RAG", "Google API", "Ollama", "Transformer", "Hugging Face", "Text Preprocessing", "Embedding"],
    },
    {
        name: "Statistics & Biostatistics",
        description: "Rigorous probability theory, multivariate modeling, hypothesis testing, survival analysis, and epidemiology.",
        icon: "ChartBar",
        skills: ["Probability Theory", "Multivariate Analysis", "Hypothesis Testing", "Estimation", "Time Series Analysis", "Survival Analysis", "Epidemiology"],
    },
    {
        name: "Programming Languages",
        description: "Core statistical programming, scientific computation, data querying, and development languages.",
        icon: "Code",
        skills: ["Python", "R", "SQL", "STATA", "C++"],
    },
    {
        name: "Tools & Cloud Infrastructure",
        description: "Version control, interactive notebooks, containerization, cloud hosting, and statistical software.",
        icon: "Terminal",
        skills: ["Git", "Linux / Bash", "Jupyter", "VS Code", "Docker", "AWS", "SPSS"],
    },
    {
        name: "Web Frameworks",
        description: "Rapid data prototyping, RESTful APIs, and interactive machine learning web applications.",
        icon: "Globe",
        skills: ["Streamlit", "Flask", "FastAPI"],
    },
];
