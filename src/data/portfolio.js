import Warehouse from "../assets/images/projects/warehouse-management.png";
import Turf from "../assets/images/projects/turf-bd.png";
import Guirdian from "../assets/images/projects/guirdian-news.png";
import Product from "../assets/images/projects/product-query.png";
import Kebab from "../assets/images/projects/kebab-amigos.png";
import ArtCraft from "../assets/images/projects/art-and-craft.png";
import School from "../assets/images/projects/modern-school.png";
import Cluster from "../assets/images/projects/cluster-antivirus.png";
import BusinessMgmt from "../assets/images/projects/business-management.png";
import Grs from "../assets/images/projects/grievance-redress-system.png";

export const profile = {
  name: "Mohiminul Islam Ahad",
  shortName: "Ahad",
  role: "Software Engineer (II)",
  location: "Chattogram, Bangladesh",
  email: "mohiminulislamahad@gmail.com",
  phone: "+8801883687463",
  github: "https://github.com/ahad30",
  linkedin: "https://www.linkedin.com/in/mohiminul-islam-ahad/",
  facebook: "https://www.facebook.com/mohimin.ahad",
  headline:
    "I build ERP systems and business applications that teams run their operations on.",
  summary:
    "Full-stack Software Engineer with 3+ years of experience building ERP and business applications using React.js, Next.js, Node.js, and PostgreSQL/MongoDB. I currently own the Sales, Purchase, and Approval Workflow modules of a SaaS ERP product modeled on SAP Business One, designing REST APIs, relational schemas, and end-to-end business workflows.",
};

export const stats = [
  { value: "3+", label: "Years shipping production software" },
  { value: "4", label: "Companies, from agency to SaaS product" },
  { value: "3", label: "Core ERP modules owned" },
  { value: "10+", label: "Business systems delivered" },
];

export const experience = [
  {
    role: "Software Engineer (II)",
    company: "Techzu",
    mode: "Remote",
    period: "Oct 2025 – Present",
    current: true,
    points: [
      "Own the Sales and Purchase modules of a SaaS ERP product modeled on SAP Business One, including a configurable multi-level approval workflow with rule-based approvers, approval stages, and audit history.",
      "Designed PostgreSQL schemas and RESTful APIs in Node.js/Express.js for transactional ERP data, including document linking across modules.",
      "Built React.js interfaces for complex ERP forms and data grids, focused on fast data entry and usability for business users.",
    ],
    stack: ["React.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ"],
  },
  {
    role: "Software Developer",
    company: "Al Hidaayah",
    mode: "On-site",
    period: "May 2025 – Sep 2025",
    points: [
      "Developed a School Club Management system from scratch, covering club creation, student membership, and event management.",
      "Maintained and extended the institution's School ERP software in production: resolved bugs, delivered new features, and improved performance.",
      "Built responsive interfaces with React.js and Next.js and designed RESTful APIs backed by MongoDB/MySQL.",
    ],
    stack: ["Next.js", "React.js", "MongoDB", "MySQL"],
  },
  {
    role: "Full Stack Developer",
    company: "Smart Framework",
    mode: "On-site",
    period: "Jul 2024 – Apr 2025",
    points: [
      "Designed and integrated RESTful APIs connecting React.js/Next.js frontends with Node.js backends for client web applications.",
      "Modeled, optimized, and managed MongoDB and MySQL databases for reliable data storage and retrieval.",
      "Worked on a Product Management system and GRS (Grievance Redress System), a Government of Bangladesh project.",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "MySQL"],
  },
  {
    role: "Frontend Developer",
    company: "Z-Eight Tech",
    mode: "On-site",
    period: "Jul 2023 – Jun 2024",
    points: [
      "Built interactive web applications with React.js and Next.js, integrating REST APIs alongside backend developers.",
      "Worked on client projects including Warehouse Management and Turf Management systems.",
      "Delivered client projects on fixed deadlines in a fast-paced team environment.",
    ],
    stack: ["React.js", "Next.js", "Redux", "REST APIs"],
  },
];

export const erp = {
  title: "Cloud ERP System",
  status: "Product under development",
  description:
    "A SaaS ERP modeled on SAP Business One. I own the Sales, Purchase and Approval Workflow modules end to end, from PostgreSQL schema to the data-entry UI.",
  salesFlow: ["Quotation", "Order", "Delivery", "Invoice", "Return / Credit Memo"],
  purchaseFlow: ["Purchase Order", "Goods Receipt", "AP Invoice"],
  features: [
    "Copy To / Copy From with multi-document merging",
    "Multi-level approvals with rule-based approvers and audit history",
    "Tax, discounts, payment terms and exchange rates",
    "User-defined fields and attachments",
    "Financial management and PDF reports",
    "Role-based access control",
  ],
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "TypeScript",
    "PostgreSQL",
    "Sequelize",
    "Redis",
    "BullMQ",
    "AWS S3",
    "Docker",
    "Nginx",
    "GitHub Actions",
    "Sentry",
  ],
};

export const projects = [
  {
    title: "Hotel Booking System",
    category: "Full Stack",
    description:
      "Room booking with authentication, hotel and room management, admin and user dashboards, notifications, SSLCommerz online payment, and search by division, district and area.",
    stack: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Prisma", "Tailwind CSS"],
    repo: "https://github.com/ahad30/hotel-booking",
    featured: true,
  },
  {
    title: "Warehouse Management System",
    category: "Full Stack",
    image: Warehouse,
    description:
      "Authentication, warehouse and product transfer management, CSV/PDF import and export, invoicing, email notifications, reporting and a POS module.",
    stack: ["React.js", "Redux", "Laravel", "MySQL", "SMTP"],
    link: "https://smsinventory.ca/login",
    repo: "https://github.com/ahad30/warehouse_management",
    demo: "admin@mail.com / password",
    featured: true,
  },
  {
    title: "Grievance Redress System",
    category: "Full Stack",
    image: Grs,
    description:
      "Government of Bangladesh platform (Tax Appellate Zone, Chittagong) where citizens file complaints about public services and track resolution status by SMS, email and login.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    link: "https://grs-gov-rouge.vercel.app/",
    demo: "grsadmin@gmail.com / 123456",
    featured: true,
  },
  {
    title: "Business Management Suite",
    category: "Full Stack",
    image: BusinessMgmt,
    description:
      "Multi-business ERP with POS, product and warehouse management, sales and purchase management, admin/user dashboards and CSV/PDF reports.",
    stack: ["React.js", "Redux", "REST API"],
    link: "https://erp-software-frontend.vercel.app/",
    demo: "b@gmail.com / admin123",
  },
  {
    title: "Cluster Antivirus",
    category: "Full Stack",
    image: Cluster,
    description:
      "Free trial booking and premium subscriptions with payments, plus an admin dashboard for statistics, orders, trials and product keys with Excel/CSV upload and download.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    link: "https://cluster-project.vercel.app/login",
    demo: "admin@cluster.com / admin123",
  },
  {
    title: "Turf-BD",
    category: "Full Stack",
    image: Turf,
    description:
      "Turf booking with time slots, report generation, and a subscription system powered by scheduled background jobs.",
    stack: ["React.js", "Laravel", "MySQL"],
    link: "https://turfbd.net/",
  },
  {
    title: "Guirdian News",
    category: "Full Stack",
    image: Guirdian,
    description:
      "News platform with a subscription system and an admin dashboard for payments and article management.",
    stack: ["React.js", "Node.js", "MongoDB", "Firebase"],
    link: "https://the-guirdian-news.netlify.app/",
    demo: "user1@gmail.com / 123456Aa",
  },
  {
    title: "Product Query",
    category: "Full Stack",
    image: Product,
    description:
      "Product discovery with search by name, category, brand or keyword, and community recommendations on each product page.",
    stack: ["React.js", "Express.js", "MongoDB", "Firebase"],
    link: "https://ahad-product-query.web.app/",
  },
  {
    title: "Art & Craft",
    category: "Frontend",
    image: ArtCraft,
    description:
      "Arts and crafts platform with tutorials, community features, portfolio showcases, and live events and workshops.",
    stack: ["React.js", "Tailwind CSS", "Firebase"],
    link: "https://assignment-10-ahad.netlify.app/",
  },
  {
    title: "Kebab Amigos",
    category: "Frontend",
    image: Kebab,
    description:
      "Restaurant website presenting departments, information and menus.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://kebab-amigos.netlify.app/",
  },
  {
    title: "Modern School",
    category: "Frontend",
    image: School,
    description:
      "School website with a clean interface for students, parents and teachers.",
    stack: ["HTML", "CSS", "Bootstrap"],
    link: "https://demo-project-ahad.netlify.app/",
  },
];


export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap"] },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Socket.IO",
      "BullMQ",
      "Redis",
      "Cron jobs",
      "Puppeteer",
    ],
  },
  {
    group: "Databases & ORM",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Sequelize", "Mongoose"],
  },
  {
    group: "DevOps & Cloud",
    items: [
      "Docker",
      "GitHub Actions",
      "Nginx",
      "Coolify",
      "AWS S3",
      "Staging / UAT / Prod",
      "Vercel",
      "Netlify",
      "Firebase",
    ],
  },
  { group: "Monitoring & Tools", items: ["Sentry", "Pino", "Git", "Postman", "Jest"] },
];

export const education = {
  degree: "BSc in Electrical & Electronic Engineering",
  school: "Port City International University",
  year: "2022",
};

export const certifications = [
  {
    title: "Frontend Web Development & Responsive Design",
    issuer: "BASIS",
    link: "https://drive.google.com/file/d/1q-ZC5Tvfg9TJ-YXeURFIBZ6O0l24FjbZ/view",
  },
  {
    title: "Web Development Internship",
    issuer: "Carriastic",
    link: "https://drive.google.com/file/d/1XfbXsdiLvKla_HIGcBVo-feZnghKiYT7/view",
  },
  {
    title: "Professional English Communication",
    issuer: "BASIS",
    link: "https://drive.google.com/file/d/1mMzLx7P9Y4ZByQLMeWkZpDknCKCPGjDb/view",
  },
];
