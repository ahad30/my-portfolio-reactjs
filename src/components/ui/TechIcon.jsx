import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTypescript, SiJavascript,
  SiPostgresql, SiMysql, SiMongodb, SiPrisma, SiSequelize, SiRedis, SiDocker,
  SiNginx, SiGithubactions, SiAmazons3, SiSentry, SiTailwindcss, SiRedux,
  SiNestjs, SiSocketdotio, SiPuppeteer, SiJest, SiPostman, SiVercel, SiFirebase,
  SiLaravel, SiGit, SiMongoose, SiNetlify,
} from "react-icons/si";

export const techIcons = {
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { Icon: SiExpress, color: "#ffffff" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Prisma: { Icon: SiPrisma, color: "#ffffff" },
  Sequelize: { Icon: SiSequelize, color: "#52B0E7" },
  Redis: { Icon: SiRedis, color: "#FF4438" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Nginx: { Icon: SiNginx, color: "#009639" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  "AWS S3": { Icon: SiAmazons3, color: "#FF9900" },
  Sentry: { Icon: SiSentry, color: "#A78BFA" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Redux: { Icon: SiRedux, color: "#9F7AEA" },
  "Nest.js": { Icon: SiNestjs, color: "#E0234E" },
  "Socket.IO": { Icon: SiSocketdotio, color: "#ffffff" },
  Puppeteer: { Icon: SiPuppeteer, color: "#40B5A4" },
  Jest: { Icon: SiJest, color: "#C21325" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Vercel: { Icon: SiVercel, color: "#ffffff" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  Git: { Icon: SiGit, color: "#F05032" },
  Mongoose: { Icon: SiMongoose, color: "#C1453B" },
  Netlify: { Icon: SiNetlify, color: "#00C7B7" },
};

export const TechIcon = ({ name, className = "h-4 w-4" }) => {
  const entry = techIcons[name];
  if (!entry) return null;
  const { Icon, color } = entry;
  return <Icon className={className} style={{ color }} aria-hidden="true" />;
};
