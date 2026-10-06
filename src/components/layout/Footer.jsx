import { profile } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-neutral-500 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
