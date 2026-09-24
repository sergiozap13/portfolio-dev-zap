export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  bio: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  period?: string;
  github: string;
  demo: string;
  demoLabel?: string;
}

export interface TechStack {
  [category: string]: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export const profile: Profile = {
  name: "Sergio Zapata de la Hoz",
  title: "Ingeniero de Software Backend",
  location: "Córdoba, España",
  email: "sergiozap1@gmail.com",
  phone: "+34 656 791 696",
  github: "https://github.com/sergiozap13",
  linkedin: "https://www.linkedin.com/in/sergio-zapata-de-la-hoz-80a437185/",
  bio: "Ingeniero de Software y Analista Técnico especializado en el diseño y desarrollo de arquitecturas eficientes. Combino una sólida base en backend (Java, Spring Boot, SQL) con un enfoque en Clean Code y optimización extrema de rendimiento. Destaco por mi capacidad para interlocutar directamente con Product Owners (POs), traduciendo requisitos de negocio complejos en soluciones técnicas escalables y robustas. Actualmente expandiendo mi stack hacia el ecosistema moderno (Astro, Tailwind), automatización (n8n, IA) y desarrollo con agentes de IA (Opencode / Claude)."
};

export const experience: Experience[] = [
  {
    role: "Analista Programador Backend",
    company: "Ayesa",
    location: "Remoto",
    startDate: "Nov 2025",
    endDate: "Presente",
    bullets: [
      "Lidero la toma de requisitos y el refinamiento técnico trabajando de forma directa con los Product Owners (POs) de una cuenta corporativa de gran escala, asegurando la alineación entre las necesidades de negocio y la viabilidad técnica.",
      "Diseño y arquitectura de nuevos módulos B2C de alto impacto (sistemas de gamificación, banners dinámicos de promociones y flujos de canjeo de saldos/pagos), aplicando arquitectura por capas.",
      "Garantizo la entrega de código optimizado (Clean Code), eliminando cuellos de botella algorítmicos y reduciendo la complejidad espacial y temporal en procesos críticos."
    ]
  },
  {
    role: "Desarrollador Backend",
    company: "Ayesa",
    location: "Remoto",
    startDate: "Abr 2025",
    endDate: "Nov 2025",
    bullets: [
      "Desarrollé APIs robustas en Java y Spring Boot para aplicaciones de uso masivo, priorizando la eficiencia del código y el bajo consumo de recursos.",
      "Optimización de persistencia de datos en bases de datos relacionales (Oracle SQL), rediseñando consultas complejas y estructuras de tablas para maximizar la velocidad de respuesta.",
      "Implementación de tests unitarios y de integración (JUnit, Mockito) garantizando entregas libres de errores y alta cobertura de código."
    ]
  },
  {
    role: "QA Automation Engineer",
    company: "Ayesa",
    location: "Remoto",
    startDate: "Abr 2023",
    endDate: "Abr 2025",
    bullets: [
      "Diseñé desde cero arquitecturas de pruebas de regresión End-to-End con Selenium y Cucumber.",
      "Automaticé flujos críticos de APIs y servicios, reduciendo drásticamente los tiempos de validación manual en cada ciclo de release del cliente."
    ]
  },
  {
    role: "Desarrollador de Software en prácticas",
    company: "Ayesa",
    location: "Remoto",
    startDate: "Oct 2022",
    endDate: "Abr 2023",
    bullets: [
      "Reducción activa de la deuda técnica del proyecto mediante la creación de suites de testing complejas usando JUnit 5, Mockito y PowerMockito."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "SMFotos",
    description: "Portfolio fotográfico de fauna ibérica especializado en aves. Álbum con 100+ especies, cuaderno de campo, galería con lightbox y CMS local. Optimizado para rendimiento y SEO.",
    tech: ["Astro v6", "Tailwind CSS v4", "Leaflet", "Express", "Vercel"],
    github: "#",
    demo: "https://sm-fotos.com",
    demoLabel: "Visitar"
  },
  {
    title: "ForgeHabits",
    description: "Aplicación web para ayudar a implementar hábitos saludables. Desarrollo asociado con la Universidad de Granada.",
    tech: ["Astro", "Prisma", "TypeScript"],
    period: "Feb 2024 - Jul 2024",
    github: "https://github.com/sergiozap13/forgehabits",
    demo: "#"
  }
];

export const techStack: TechStack = {
  "Lenguajes & Arquitectura": [
    "Java",
    "SQL Avanzado (Oracle, PostgreSQL)",
    "Clean Code",
    "Optimización Algorítmica",
    "Arquitectura por Capas"
  ],
  "Desarrollo Moderno": [
    "Astro",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript"
  ],
  "IA & Automatización": [
    "SDD con Opencode/Claude",
    "n8n (Workflows)",
    "AI Agents"
  ],
  "Frameworks & Testing": [
    "Spring Boot",
    "Hibernate",
    "Selenium",
    "Cucumber",
    "JUnit5",
    "Mockito"
  ],
  "Gestión & DevOps": [
    "Jira",
    "Agile/Scrum",
    "Git",
    "Docker",
    "Maven"
  ]
};

export const education: Education = {
  degree: "Grado en Ingeniería Informática",
  institution: "Universidad de Granada",
  location: "España",
  startDate: "Sep 2019",
  endDate: "Jul 2024"
};
