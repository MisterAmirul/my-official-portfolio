import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work, Skills } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Amirul",
  lastName: "Hezzat",
  name: ` Amirul Hezzat`,
  role: "Hybrid Cloud Engineer",
  avatar: "/images/persona-portfolio.jpg", 
  email: "example@gmail.com",
  location: "Asia/Kuala_Lumpur", 
  languages: ["Malay", "English", "Mandarin"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Curriculum Vitae",
    icon: "document",
    link: "/images/CV-Official-AmirulHezzat.pdf",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MisterAmirul",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhamad-amirul-hezzat-64864924a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    essential: true,
  },
    {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.link/wjjpkm",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:amirulhz.dev@outlook.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi! I'm Amirul.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      <br />
      This portfolio showcases my academic foundations, practical side-projects, credentials, and technical skills, highlighting my passion for building and exploring innovative technology.
      <br />
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Amirul is a final-year Information Technology Diploma student at Universiti Kuala Lumpur MIIT, actively shaping his career as a Hybrid Cloud Engineer. Driven by a curiosity for diverse technology domains, he embraces a T-shaped professional mindset, blending a broad understanding of IT ecosystems with deep technical specialization in cloud and container infrastructure.
        <br />
        <br />
        Through hands-on projects and continuous self-directed learning, he translates theoretical knowledge into production-ready solutions. His expertise spans Azure and AWS cloud infrastructure, container orchestration utilizing Docker, Podman, and Kubernetes, serverless backends, and AI service integrations.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Studies",
    experiences: [
      {
        company: "Universiti Kuala Lumpur MIIT",
        timeframe: "July 2024 - December 2026",
        role: "Diploma in Information Technology",
        achievements: [
          <>
            Completed extensive 6 semesters of various syllabus learning covering fundamental of information technology, multi-language programming, database, design principles, statistical analysis, discrete mathematics and more.
          </>,
          <>
            Engaged in real-world case studies, hands-on development projects, and ethical discussions, building a strong foundation in both theoretical and practical applications of technology.
          </>,
        ],
      },
      {
        company: "Forward College x AWS re/Start(Project Ignite Cohort 5)",
        timeframe: "October 2026 - February 2027",
        role: "AWS Cloud Foundational Training",
        achievements: [
          <>
            Part-time (4 months) cloud engineering program with dedicated instructors, designed to equip students with enterprise cloud computing skills in Amazon Web Services.
          </>,
          <>
            Intensive cloud engineering program covering AWS core compute, storage, IAM, Amazon Linux administration, and networking primitives.
          </>,
          <>
            Executing hands-on labwork using the AWS Management Console to provision virtual compute workloads, manage file systems, manage networking and governance.
          </>,
        ],
      },
{
        company: "Cloud Skill Badges & Coursework",
        timeframe: "Continuous Upskilling",
        role: "Azure & GCP Technical Credentials",
        achievements: [
          <>
            <strong>Microsoft Azure (AI-200 & AZ-900):</strong> Completed AI-200 coursework (Former Exam Candidate) and AZ-900 foundationals. Earned technical badges covering Azure VM, Azure Networking, IAM, Container Apps, Azure Kubernetes Service, Event Grid, Data Services, Managed Redis, and OpenTelemetry.
          </>,
          <>
            <strong>Google Cloud Platform:</strong> Earned hands-on technical skill badges in Google Kubernetes Engine (GKE), GPU Computation, and Machine Learning Operations (MLOps) Fundamentals.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Higher Stud",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Dedicated to hands-on lab recaps, technical insights, and knowledge sharing.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Project",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const skills: Skills = {
  path: "/skills",
  label: "Qualification",
  title: `Skills & Learning – ${person.name}`,
  description: `${person.name}'s certifications, learning journey, and technical skills`,
  
  certifications: [
    {
      name: "Microsoft Learn",
      title: "Azure Infrastructure & AI Workloads (AI-200 & AZ-900)",
      description:
        "Completed comprehensive AI-200 coursework (Former Exam Candidate) and earned AZ-900 foundational credentials. Gained verified badges in Azure services    fundamentals, Azure Kubernetes Service (AKS), Azure Container Apps (ACA), Azure Event Grid, Azure Data Services, Azure Managed Redis, and OpenTelemetry.",
      tag: "15+ Modules Completed",
      image: "/images/azure-glassmor.jpeg",
      link: "https://learn.microsoft.com/en-us/users/muhamadamirulhezzatbinwanahmad-3047/transcript/v0g8way0jzm0q8e?tab=tab-modules",
    },
    {
      name: "Google Skills",
      title: "GCP Infrastructure, GKE & MLOps",
      description:
        "Earned verified skill badges and credentials across Google Kubernetes Engine (GKE), GPU Computation, and Machine Learning Operations (MLOps) Fundamentals, focusing on scalable containerized infrastructure and pipeline automation.",
      tag: "Computation",
      image: "/images/google-glassmor.jpeg",
      link: "https://www.skills.google/public_profiles/e364194e-4c7a-4471-bd36-959d262cbbbe",
    },
  ],
  
  engagements: [  
    {
      name: "Google Hackathon 2026",
      title: "Google AI Hackathon — Certificate of Participation",
      description:
        "Attending the online developer talk and technical sessions hosted by GDG Campus UTM (Build with AI 2026), focusing on cloud-native AI workflows and industry insights.",
      tag: "Tech Session",
      image: "/images/qualifications/google-hackt2026.png",
      link: "", // Leave empty if you don't have an external link, or paste a link here
    },
    {
      name: "Google Cloud & NVIDIA",
      title: "Google Cloud & NVIDIA Community Member",
      description:
        "Accessing technical learning materials, official documentation, and GPU-accelerated computing resources for modern AI workloads.",
      tag: "Technical Resources",
      image: "/images/qualifications/goonvidia.png",
      link: "", // Leave empty if you don't have an external link, or paste a link here
    },
  ],
  
  learning: [
    {
      category: "Languages",
      skills: ["C#", "PHP", "TypeScript", "Python", "Swift", "Bash"],
    },
    {
      category: "Infrastructure",
      skills: ["Azure", "AWS", "Linux", "VPS", "Cloudflare", "DNS", "Nginx"],
    },
    {
      category: "Containerization",
      skills: ["Docker", "Podman", "Kubernetes"],
    },
      {
      category: "Databases",
      skills: ["PostgreSQL", "Supabase", "NoSQL", "Vector Databases"],
    },
    {
      category: "Frameworks",
      skills: ["React", "Vite", "Node.js", "Web3", "iOS SDK"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "LLM Integration", "WebSockets", "OBS Studio", "Unity"],
    },

  ],
}



const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },

  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, skills };
